module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://mariiabel.github.io/vue3-cli/dist/'
        : '/',
    outputDir: process.env.NODE_ENV === 'production'
        ? 'public'
        : 'dev',
    productionSourceMap: false,
    assetsDir: 'assets',
    filenameHashing: true
}