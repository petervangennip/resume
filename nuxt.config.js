export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'personal-resume',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Peter van Gennip - Personal Resume',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/components' }, { src: '~/plugins/vue-fragment' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    '@nuxtjs/dotenv',
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // storyblok
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        cacheProvider: 'memory',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // PostCSS
    postcss: {
      parser: 'postcss-scss',
      plugins: {
        'postcss-advanced-variables': {},
        'postcss-nested': {},
      },
    },
  },

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
    jit: true,
  },

  googleFonts: {
    families: {
      Questrial: [400],
      Solway: [300, 400, 500, 700, 800],
    },
    display: 'swap',
    preconnect: true,
    preload: true,
  },
};
