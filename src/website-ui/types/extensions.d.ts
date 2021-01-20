type Image = import('@njmaeff/webpack-loader-image/types').LoadedImage

declare module "*.svg" {
    const content: any;
    export default content
}
declare module "*.png" {
    const content: Image;
    export default content
}
declare module "@njmaeff/website-ui/assets/img/*" {
    const content: Image;
    export default content
}

declare module "*.jpg" {
    const content: Image;
    export default content
}
declare module "*.mdx" {
    const content: any;
    export default content
}
