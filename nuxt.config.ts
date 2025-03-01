export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'v-gsap-nuxt',
    '@nuxt/image',
    '@nuxt/content',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Cinzel: { wght: [400, 700] },
          Lora: { wght: [400, 700], ital: [400, 700] },
          Montserrat: { wght: [100, 300, 400, 700] },
        },
        display: 'swap',
        subsets: 'latin',
        preload: true,
      },
    ],
    '@nuxt/scripts',
  ],
  css: ['~/assets/css/main.css'],
});
