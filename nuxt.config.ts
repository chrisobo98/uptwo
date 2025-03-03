// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'v-gsap-nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/content',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Cinzel: {
            wght: [400, 700], // Regular and Bold for Cinzel
          },
          Lora: {
            wght: [400, 700], // Regular and Bold for Lora
            ital: [400, 700], // Italic variants
          },
          Montserrat: {
            wght: [100, 300, 400, 700], // Thin, Light, Regular, and Bold for Montserrat
          },
        },
        display: 'swap', // Ensure fonts are loaded with a fallback
        subsets: 'latin', // Optimize for Latin-based languages
        preload: true, // Preload fonts for faster rendering
      },
    ],
    '@nuxt/scripts',
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