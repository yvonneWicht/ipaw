export default defineNuxtConfig({

  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  googleFonts: {
    families: {
      'Delicious Handrawn': true,
      'Noto Sans': true,
    }
  },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/google-fonts", '@nuxt/icon']
})