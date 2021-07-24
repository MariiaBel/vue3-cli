module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://mariiabel.github.io/vue3-cli/dist/'
        : '/',
    productionSourceMap: false,
    assetsDir: 'assets',
    filenameHashing: false //не работает Ж(
}