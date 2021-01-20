import path, { ParsedPath } from "path";
import loaderUtils from "loader-utils";
import webpack from "webpack";
import sharp from "sharp";
import fs from "fs-extra";
import lqip from "lqip";
import {
    defaultConfig,
    getCacheDir,
    getFileRange,
    getHash,
    getModuleTemplate,
} from "@njmaeff/webpack-loader-image/lib";
import { Config } from "@njmaeff/webpack-loader-image/types";

const cache = getCacheDir();
const cacheRoot = cache();
if (!cacheRoot) {
    throw new Error("unable to find cache directory");
}
fs.ensureDirSync(cacheRoot);

export async function buildImage(
    pipeline: sharp.Sharp,
    nextWidth: number,
    assetDir,
    pathItems: ParsedPath,
    width: string
) {
    const imgBuffer = await pipeline.clone().resize(nextWidth, null).toBuffer();
    const imgPath = path.join(
        assetDir,
        pathItems.name + `-${width}` + pathItems.ext
    );
    await fs.writeFile(imgPath, imgBuffer);
    return imgPath;
}

export interface ProcessedImage {
    imgRelativePath: string;
    imgPath: string;
    initial: boolean;
    size: string;
    resourceVar: string;
}

export const loader: webpack.loader.Loader = function (input) {
    const parsedResourceQuery = this.resourceQuery
        ? loaderUtils.parseQuery(this.resourceQuery)
        : {};
    const config: Config = Object.assign({},
        defaultConfig,
        loaderUtils.getOptions(this),
        parsedResourceQuery
    );

    if (parsedResourceQuery.processed) {
        return input;
    } else {
        const callback = this.async();

        const process = async () => {
            if (config.skip(this.mode)) {
                return `module.exports = {src: require("${this.resourcePath}?processed=true").default}`;
            }

            const imageHash = getHash(
                this.resourcePath + this.resourceQuery + input,
                -1
            );
            const prefix = imageHash.slice(0, 8);
            const pathItems = path.parse(this.resourcePath);
            const assetDir = cache([pathItems.name, prefix].join("-"));
            await fs.ensureDir(assetDir);

            const cacheHashFile = path.join(assetDir, "cache.json");
            let cacheHash, cacheHashFileExists;
            try {
                cacheHash = await fs.readJSON(cacheHashFile);
                cacheHashFileExists = true;
            } catch (e) {
                cacheHash = { hash: "" };
            }

            if (cacheHash.hash === imageHash) {
                return cacheHash.template;
            } else {
                if (cacheHashFileExists) {
                    await fs.remove(assetDir);
                    await fs.mkdir(assetDir);
                }

                const pipeline = sharp(this.resourcePath);
                const meta = await pipeline.metadata();

                const sizes = getFileRange(config, {
                    width: config.base ?? meta.width,
                });

                const promises = sizes.map(async (size, index) => {
                    const width = `${size.width}w`;
                    const imgPath = await buildImage(
                        pipeline,
                        size.width,
                        assetDir,
                        pathItems,
                        width
                    );

                    return {
                        imgPath,
                        imgRelativePath: path.relative(this.context, imgPath),
                        initial: size.default,
                        size: width,
                        resourceVar: `img${index}`,
                    } as ProcessedImage;
                });

                const images: ProcessedImage[] = await Promise.all(promises);

                let placeholder: string;
                if (config.placeholder) {
                    const [placeHolder] = images.filter((img) => img.initial);
                    try {
                        placeholder = await lqip.base64(placeHolder.imgPath);
                    } catch (e) {
                        this.emitError(e);
                    }
                }

                const template = getModuleTemplate(
                    images,
                    meta.width,
                    meta.height,
                    placeholder
                );

                await fs.writeJSON(
                    cacheHashFile,
                    { hash: imageHash, template },
                    { spaces: 2 }
                );
                return template;
            }
        };

        process().then((template) => {
            this.loaders = this.loaders.slice(this.loaderIndex);
            this.loaderIndex = 0;
            callback(null, template);
        });
    }
};

export default loader;
export const raw = true;
