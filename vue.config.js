const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/rick_morty_api/" : "/",
  transpileDependencies: true
})
