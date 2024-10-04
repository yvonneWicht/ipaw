// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  //durch den Alias muss man nicht immer das Verzeichnis eingeben
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  //brauche ich das?
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  googleFonts: {
    families: {
      'Aleo': true,
      'Reenie Beanie': true,
      'Sue Ellen Francisco': true,
      'Delicious Handrawn': true,
      'Noto Sans': true,
    }
  },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/google-fonts", '@nuxt/icon']
})