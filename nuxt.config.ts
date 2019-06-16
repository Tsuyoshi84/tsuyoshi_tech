// tslint:disable-next-line:no-implicit-dependencies
import NuxtConfiguration from '@nuxt/config'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const config: NuxtConfiguration = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Tsuyoshi Yamaguchi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tsuyoshi Yamaguchi' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        tslint: true,
        vue: true
      })
    ]
  }
}

export default config
