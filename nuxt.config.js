export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nemia || Biggest aNime Platform',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nemia.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Overpass&display=swap",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nemia.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/bootstrap/bootstrap.min.css', '~/static/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjss.dev/config-plugins
  plugins: [
    {src:'~/assets/bootstrap/bootstrap.bundle.min.js', mode:'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8'
  ],

  target: 'server',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv'
  ],
  
  axios: {
    // proxy: true
  },
  // Apollo configuration
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.anilist.co',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
  
}
