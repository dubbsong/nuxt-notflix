export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Notflix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        // content: process.env.npm_package_description || ''
        content: 'Notflix'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Ubuntu&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/Loading.vue',
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/index.scss'],
  router: {
    middleware: 'i18n'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
