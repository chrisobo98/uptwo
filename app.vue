<template>
  <NuxtLayout />
</template>

<script setup>
import '@/assets/css/main.css'

useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: "%s", // Ensures no default Nuxt title suffix
  title: "upTWO | Elevate Your Brand with Strategy & Storytelling",
  meta: [
    { name: "description", content: "upTWO helps brands stand out with expert storytelling, strategic branding, and marketing innovation." },

    // OpenGraph Essentials
    { property: "og:title", content: "upTWO | Elevate Your Brand with Strategy & Storytelling" },
    { property: "og:description", content: "upTWO helps brands stand out with expert storytelling, strategic branding, and marketing innovation." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://beuptwo.com/" },

    // Author & Publisher for Credibility
    { property: "article:author", content: "https://www.linkedin.com/in/t-w-alexander-mba-24969a122/" },
    { property: "article:publisher", content: "https://www.facebook.com/beuptwo" },
    
    // OpenGraph Images (Multiple Sizes)
    { property: "og:image", content: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1741196509/Screenshot_2025-03-05_at_12.41.28_PM_n7uxvd.png" }, // Large OpenGraph image
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "upTWO - Elevate Your Brand with Strategy & Storytelling." },
    { property: "og:image", content: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740965292/mission_xsigit_i4oqxw.webp" }, // Smaller OG image for fast loading
    { property: "og:image", content: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740940906/uptwo_n62bjt.webp" }, // Logo as fallback image

    // OpenGraph Locale
    { property: "og:locale", content: "en_US" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@beuptwo" }, // Assuming @beuptwo is your handle
    { name: "twitter:title", content: "upTWO | Elevate Your Brand with Strategy & Storytelling" },
    { name: "twitter:description", content: "upTWO helps brands stand out with expert storytelling, strategic branding, and marketing innovation." },
    { name: "twitter:image", content: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740965292/mission_xsigit_i4oqxw.webp" },
    { name: "twitter:image:alt", content: "upTWO - Elevate Your Brand with Strategy & Storytelling." },

    // Schema Markup
    { name: "application/ld+json", content: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "upTWO",
      "url": "https://beuptwo.com/",
      "logo": "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740940906/uptwo_n62bjt.webp",
      "sameAs": [
        "https://www.facebook.com/beuptwo",
        "https://www.instagram.com/beuptwo",
        "https://www.youtube.com/@uptwoink",
        "https://www.linkedin.com/in/t-w-alexander-mba-24969a122/"
      ]
    })}
  ]
});
</script>

