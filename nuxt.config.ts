// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Fully static site
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically finds and prerenders all pages
      routes: ['/'], // Ensures homepage is always prerendered
    },
    routeRules: {
      "/_nuxt/**": { cache: { maxAge: 31536000 } }, // Cache static assets for 1 year
      "/static/**": { cache: { maxAge: 31536000 } }, // Cache static files for 1 year
      "/video/**": { cache: { maxAge: 604800 } }, // Cache videos for 1 week
    },
  },
  ogImage: {
    enabled: false, // Disable OG Image since SSR is off
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'v-gsap-nuxt', '@nuxt/image', '@nuxtjs/seo', '@nuxt/content', [
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
  ], 'nuxt-viewport', '@nuxtjs/cloudinary', '@nuxt/icon', '@nuxtjs/google-fonts', 'nuxt-vitalizer'],
  vitalizer: {
    disableStylesheets: 'entry',
    disablePrefetchLinks: true,
    delayHydration: {
      hydrateOnEvents: ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel'],
      idleCallbackTimeout: 8000,
      postIdleTimeout: 4000
    }
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dkgpny3ca/image/upload/', // Replace with your Cloudinary base URL
    },
  },
  robots: {
    allow: '/', // Allows all pages to be crawled
    sitemap: '/sitemap.xml' // Optional, if you have a sitemap
  },
  css: ['~/assets/css/main.css'],
})