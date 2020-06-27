import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  srcDir: 'app/',
  components: true,

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'Tsuyoshi Yamaguchi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tsuyoshi Yamaguchi',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      {
        src: 'libs/modernizr.min.js',
        defer: true,
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['normalize.css', '~/css/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/sitemap'],

  /*
   ** Build configuration
   */
  build: {
    // use extend() method for nuxt
    // use extendWebpack() method for quasar
    extend(config, _) {
      config.module!.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader',
        options: {
          /* ... */
        },
      })
    },
  },

  sitemap: {
    hostname: 'https://tsuyoshi.dev',
    gzip: true,
    exclude: [],
    routes: [],
  },
}

export default config
