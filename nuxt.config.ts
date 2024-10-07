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
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/google-fonts", '@nuxt/icon', '@vee-validate/nuxt'],

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  }
})