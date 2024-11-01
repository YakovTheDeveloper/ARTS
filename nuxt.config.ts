// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.css'
  ],
  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/futura-beauty/'
  },
  modules: ['@nuxt/image', 'nuxt-svgo'],
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})