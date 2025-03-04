// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Fully static site
  components: {
    dirs: [{ path: "~/components", global: true, prefix: "Lazy" }],
  },
  nitro: {
    prerender: {
      crawlLinks: true, // Automatically finds and prerenders all pages
      routes: ["/"], // Ensures homepage is always prerendered
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
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "v-gsap-nuxt",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/content",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Cinzel: true,
          Lora: true,
          Montserrat: true,
        },
        display: "swap", // Ensures text is visible during font load
        prefetch: true, // Enables DNS prefetch for faster Google Fonts loading
        preconnect: true, // Preconnect to Google Fonts for quicker connection
        preload: true, // Preload Google Fonts to speed up font load time
        useStylesheet: true, // Ensures CSS is injected for Google Fonts
      },
    ],
    "nuxt-viewport",
    "@nuxtjs/cloudinary",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "nuxt-vitalizer",
  ],
  vitalizer: {
    disableStylesheets: "entry",
    disablePrefetchLinks: true,
    delayHydration: {
      hydrateOnEvents: [
        "mousemove",
        "scroll",
        "keydown",
        "click",
        "touchstart",
        "wheel",
      ],
      idleCallbackTimeout: 8000,
      postIdleTimeout: 4000,
    },
  },
  image: {
    provider: "cloudinary",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dkgpny3ca/image/upload/", // Replace with your Cloudinary base URL
    },
  },
  robots: {
    allow: "/", // Allows all pages to be crawled
    sitemap: "/sitemap.xml", // Optional, if you have a sitemap
  },
  css: ["~/assets/css/main.css"],
});
