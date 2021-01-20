export interface Config {
    sizes: number[];
    base?: number;
    placeholder?: boolean;
    skip(mode: "production" | "development" | "none"): boolean;
}

export interface LoadedImage {
    srcSet: string;
    src: string;
    originalwidth: string;
    originalheight: string;
    placeholder: string;
}
