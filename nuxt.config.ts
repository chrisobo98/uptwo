// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Fully static site
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically finds and prerenders all pages
      routes: ['/'], // Ensures homepage is always prerendered
    },
  },
  ogImage: { enabled: false },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'v-gsap-nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/content',
    'nuxt-viewport',
    '@nuxtjs/cloudinary',
    '@nuxt/icon',
  ],
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dkgpny3ca/image/upload/', // Replace with your Cloudinary base URL
    },
  },
  css: ['~/assets/css/main.css'],
})