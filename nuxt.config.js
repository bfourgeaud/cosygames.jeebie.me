export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cosygames.jeebie.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cosygames let\'s you play all sorts of games with your friends to have a full load of fun together !' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyAiUrRBKgGwp-1aeuRCvR8PXylG_Njnusw',
      authDomain: 'livegames-fr.firebaseapp.com',
      databaseURL: 'https://livegames-fr.firebaseio.com',
      projectId: 'livegames-fr',
      storageBucket: 'livegames-fr.appspot.com',
      messagingSenderId: '725766803136',
      appId: '1:725766803136:web:d39853d7f0aa7022b7a725',
      measurementId: 'G-W5HS4VQJG1'
    },
    services: {
      auth: true,
      firestore: true
    }
  },

  firestore: {
    memoryOnly: false, // default
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
    enablePersistence: true,
    emulatorPort: 8080,
    emulatorHost: 'localhost',
    settings: {
      // Firestore Settings - currently only works in SPA mode
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      theme_color: '#212121'
    },
    workbox: {
      clientsClaim: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
