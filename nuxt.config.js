export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'EN',
      xmlns: 'http://www.w3.org/1999/xhtml',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui',
      },
      {
        name: 'window-target',
        content: '_top',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#FFB90F', continuous: true, height: '5px' },
  loading: '~/components/loading.vue',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/styles/style.css',
    'assets/styles/widgets.css',
    'assets/styles/color.css',
    'assets/styles/responsive.css',
    // 'assets/styles/vendor/owl.carousel.min.css',
    'assets/styles/vendor/material-icons.min.css',
    'assets/styles/vendor/weather-icons.min.css',
    'assets/styles/vendor/flaticon.css',
    'assets/styles/vendor/slicknav.css',
    'assets/styles/vendor/animate.min.css',
    'assets/styles/vendor/magnific-popup.css',
    'assets/styles/vendor/fontawesome-all.min.css',
    'assets/styles/vendor/themify-icons.css',
    'assets/styles/vendor/slick.css',
    'assets/styles/vendor/nice-select.css',
    'assets/styles/vendor/perfect-scrollbar.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/filters',
    '~/plugins/axios',
    '~/plugins/infor',
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/viewer.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
   ** Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
   */
  router: {
    middleware: ['resetEnv'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-material-design-icons-iconfont',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    ['cookie-universal-nuxt', { alias: 'cookies' }],
    // [
    //   '@nuxtjs/google-adsense',
    //   { id: 'ca-pub-5683711753850351', pageLevelAds: true },
    // ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    credentials: true,
  },

  proxy: {
    // '/api/': 'https://edms.site',
    '/api/': 'http://127.0.0.1:8800',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
      presets(env, [preset, options]) {
        return [['@nuxt/babel-preset-app', options]]
      },
    },
  },
}
