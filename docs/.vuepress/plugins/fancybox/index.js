const PUBLIC_PREFIX = "/docs/.vuepress/public";

module.exports = md => {
    md.renderer.rules.image = (tokens, idx) => {
        const token = tokens[idx];
        const srcIndex = token.attrIndex("src");
        const url = token.attrs[srcIndex][1].replace(PUBLIC_PREFIX, "");
        const caption = md.utils.escapeHtml(token.content);
        return `<a data-fancybox href="${url}" content="${caption}">
                    <img src="${url}" alt="${caption}" />
                </a>`;
    };
};

module.exports.webpack = (config, isServer) => {
    const inlineLimit = 10000;
    config.module
        .rule("images")
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use("url-loader")
        .loader("url-loader")
        .options({
            limit: inlineLimit,
            name: `assets/img/[name].[hash:8].[ext]`
        });
    config.module
        .rule("vue")
        .uses.store.get("vue-loader")
        .store.get("options").transformAssetUrls = {
            video: ["src", "poster"],
            source: "src",
            img: "src",
            image: ["xlink:href", "href"],
            a: "href"
        };
};