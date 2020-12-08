module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'https://cdn.jsdelivr.net/gh/mouyase/PixivCool@gh-pages/' : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'PixivCool'
                return args
            })
    },
}