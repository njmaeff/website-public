import crypto from "crypto";
import { Config } from "@njmaeff/webpack-loader-image/types";
import findCacheDir from "find-cache-dir";
import { ProcessedImage } from "@njmaeff/webpack-loader-image";

export const getFileRange = (
    config: Config,
    opts: { width: number }
): { width: number; default?: boolean }[] => {
    return config.sizes.map((size, index) => ({
        width: opts.width * size,
        default: index === 0,
    }));
};

export const getHash = (str, count = 8) => {
    return crypto.createHash("md5").update(str).digest("hex").slice(0, count);
};
export const defaultConfig: Config = {
    skip: (mode) => mode !== "production",
    sizes: [1, 2],
};

export function getModuleTemplate(
    images: ProcessedImage[],
    width: number,
    height: number,
    placeholder: any
) {
    const imports = images
        .map(
            (img) =>
                `const ${img.resourceVar} = require("${img.imgRelativePath}?processed=true").default;`
        )
        .join("\n");
    const init = images.filter((img) => img.initial);
    const srcSet = images
        .map((img) => `\${${img.resourceVar}} ${img.size}`)
        .join(",");

    const template = [
        `${imports}`,
        `module.exports = {`,
        `   srcSet: \`${srcSet}\`,`,
        `   src: ${init[0].resourceVar},`,
        `   originalwidth: '${width}px',`,
        `   originalheight: '${height}px',`,
        `   placeholder: '${placeholder}',`,
        `}`,
    ].join("\n");
    return template;
}

export function getCacheDir() {
    return findCacheDir({
        name: require("@njmaeff/webpack-loader-image/package.json").name,
        thunk: true,
    });
}
