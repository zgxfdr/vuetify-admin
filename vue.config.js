module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
   // 修复HMR
   config.resolve.symlinks(true);

  }
}