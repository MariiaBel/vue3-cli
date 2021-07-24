module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : '/',
    productionSourceMap: false,
    assetsDir: 'assets',
    filenameHashing: false //не работает Ж(
}