
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Count On Us',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favico.png' }
    ],
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicitps://cdn.jsdelivr.net/npm/vue/dist/vue.js',
        async: true,
        defer: true
      }
    ]

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validate.js',
    '~/plugins/mask.js'
  ],
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
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', {
      baseURL: 'https://count-on-us.online/'
    }],
    'nuxt-fontawesome',
    'nuxt-buefy',
    ['nuxt-validate', {
      lang: 'pt_BR'
    }],
    'nuxt-dayjs-module',
    'vue-sweetalert2/nuxt'
  ],
  buefy: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  router: {
    linkActiveClass: 'is-active'
  },

  env: {
    recaptchaSiteKey: '6LeGrOUUAAAAAKMZFyYQrCjSnBtdcfD0SAx88Thr'
  }
}
