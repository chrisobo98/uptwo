// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Enable SSR so social media scrapers can read metadata
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically finds and prerenders all pages
      routes: ['/', '/about', '/services', '/portfolio'], // Ensures homepage is always prerendered
    },
    routeRules: {
      "/_nuxt/**": { cache: { maxAge: 31536000 } }, // Cache static assets for 1 year
      "/static/**": { cache: { maxAge: 31536000 } }, // Cache static files for 1 year
      "/video/**": { cache: { maxAge: 604800 } }, // Cache videos for 1 week
    },
  },
  ogImage: {
    enabled: true,
  },
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
    'nuxt-vitalizer',
    '@nuxt/fonts',
  ],
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
  fonts: {
    defaults: {
      weights: [400, 700], // Default weights for all fonts
      styles: ['normal', 'italic'], // Default styles
      subsets: ['latin', 'latin-ext'], // Default subsets
    },
    families: [
      {
        name: 'Cinzel',
        provider: 'google',
        weights: [400, 700],
      },
      {
        name: 'Lora',
        provider: 'google',
        weights: [400, 700],
        styles: ['normal', 'italic'],
      },
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [100, 300, 400, 700],
      },
    ],
    priority: ['google'], // Set Google as the primary provider
  },
})