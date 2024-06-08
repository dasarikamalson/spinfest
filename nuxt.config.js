// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  app: {
      head: {
        title: 'Spinfest',
        meta: [
          {name: 'description', content: '#1 Sustainable Festival'}
        ],
        link:[
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap' },
        ]
      }
    },
  modules: [
    "@nuxtjs/tailwindcss",
      ],

})
