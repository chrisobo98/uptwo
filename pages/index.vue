<template>
  <!-- VIDEO: Only loads on larger screens -->
  <div v-show="!viewport.isLessThan('tablet')">
    <video
      class="md:w-10/12 mx-auto h-full md:h-dvh md:pt-20"
      autoplay
      loop
      muted
      playsinline
      preload="none"
      :poster="posterUrl"
    >
      <source
        :src="
          !viewport.isLessThan('tablet')
            ? 'https://res.cloudinary.com/dkaakonrp/video/upload/f_auto,q_auto/v1740935738/oogaajgt1m7sx4r4aa6e.mp4'
            : ''
        "
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>

  <!-- SWIPER SLIDER -->
  <div class="swiper mySwiper w-11/12 lg:w-6/12 mx-auto rounded-2xl">
    <MobileLanding v-show="viewport.isLessThan('tablet')" />
    <div class="swiper-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="swiper-slide w-full bg-no-repeat bg-cover rounded-2xl bg-center pb-24 min-h-[700px] relative md:border-2 border-solid"
      >
        <div v-if="index === 0 || lazyLoaded.includes(index)">
          <div class="mx-auto max-w-7xl md:max-w-full px-4 sm:px-6 lg:px-8">
            <div class="w-full flex flex-col gap-14">
              <div class="justify-center items-center z-20 md:mx-20 flex">
                <div class="flex flex-col gap-10 lg:gap-14">
                  <div class="mt-40 md:mt-20">
                    <h2
                      v-if="index === 0"
                      class="text-white text-3xl md:text-6xl font-bold"
                    >
                      {{ slide.header }}
                    </h2>
                    <h2
                      v-if="index === 0"
                      class="text-yellow-600 md:text-7xl text-6xl font-bold"
                    >
                      {{ slide.subheader }}
                    </h2>
                    <p
                      v-if="index === 0"
                      class="lg:max-w-xl text-gray-200/80 text-2xl"
                      style="will-change: transform, opacity"
                    >
                      Driving Growth Through Strategy and Storytelling
                    </p>

                    <!-- For other slides, keep GSAP animations -->
                    <h2
                      v-if="index !== 0"
                      v-gsap.animateText
                      v-gsap.from="{ opacity: 0, x: 150, delay: 0.3 }"
                      class="text-white text-3xl md:text-6xl font-bold"
                    >
                      {{ slide.header }}
                    </h2>
                    <h2
                      v-if="index !== 0"
                      v-gsap.animateText
                      v-gsap.from="{ opacity: 0, x: -150, delay: 0.5 }"
                      class="text-yellow-600 md:text-7xl text-6xl font-bold"
                    >
                      {{ slide.subheader }}
                    </h2>
                    <p
                      v-if="index !== 0"
                      v-gsap.from="{ opacity: 0, y: 50, delay: 1.0 }"
                      class="lg:max-w-xl text-gray-200/80 text-2xl"
                    >
                      {{ slide.description }}
                    </p>
                  </div>

                  <!-- CTA BUTTON -->
                  <div
                    v-if="index !== 0"
                    v-gsap.from="{ opacity: 0, y: 50, delay: 1.5 }"
                    class="border border-yellow-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between"
                  >
                    <span class="font-light text-lg text-white ml-3">
                      {{ slide.highlight }}
                    </span>
                    <div class="bg-yellow-600 rounded-full">
                      <!-- Right Icon -->
                      <Icon
                        name="oi:arrow-right"
                        size="1.2em"
                        class="rounded-full flex mx-2 my-2 justify-center items-center"
                        style="color: white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Placeholder for Lazy Loading -->
        <div
          v-else
          class="h-full flex items-center justify-center text-gray-500"
        >
          Loading...
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center relative lg:mt-0 mt-7 absolute 2xl:bottom-40 xl:bottom-48 lg:bottom-44 bottom-44 max-w-[320px] mx-auto z-10"
    >
      <!-- Swipe Text -->
      <span v-gsap.magnetic class="mb-2 text-white">Swipe Me</span>

      <div class="flex items-center justify-between w-full">
        <!-- Left Icon -->
        <Icon
          name="oi:chevron-left"
          size="2em"
          class="swiper-button-prev group transition-all duration-700 ease-in-out grabbable"
          style="color: white"
        />

        <!-- Swiper Scrollbar -->

        <!-- Right Icon -->
        <Icon
          name="oi:chevron-right"
          size="2em"
          class="swiper-button-next group grabbable transition-all duration-700 ease-in-out"
          style="color: white"
        />
      </div>
    </div>
  </div>
  <DelayHydration>
    <LazyServicesSection />
    <LazySubscribeForm />
  </DelayHydration>
</template>

<script setup>
import Swiper from "swiper";
import MobileLanding from "@/components/index/MobileLanding.vue";
import LazySubscribeForm from "@/components/SubscribeForm.vue";
import LazyServicesSection from "@/components/portfolio/ServicesSection.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const viewport = useViewport();

const posterUrl = useImage({
  src: "https://res.cloudinary.com/dkaakonrp/image/upload/v1740938519/Screenshot_2025-03-02_at_1.01.28_PM_gsknif.png",
  format: "webp",
  quality: 100,
});

useHead({
  title: "Luxury Brand Strategy & Storytelling",
  meta: [
    {
      name: "description",
      content:
        "upTWO empowers businesses with strategic storytelling, branding, and digital marketing to create lasting impact.",
    },
    {
      property: "og:title",
      content: "Luxury Brand Strategy & Storytelling",
    },
    {
      property: "og:description",
      content:
        "Transform your brand with upTWO’s expertise in storytelling, strategy, and marketing.",
    },
  ],
});

const slides = [
  {
    highlight: "Learn How",
    header: "Your Story. Your Brand. Our Pen.",
    subheader: "Our Passion",
    description: "Driving Growth Through Strategy and Storytelling",
  },
  {
    highlight: "Read More",
    header: "Your Brand Deserves a Stage",
    subheader: "Not a Shelf",
    description:
      "Brand without strategy is like placing a Rolex in the canned goods aisle—lost, overlooked, and out of place...",
  },
  {
    highlight: "View our Services",
    header: "The Art of Story Telling",
    subheader: "Explore",
    description: "T.W. Alexander’s storytelling portfolio",
  },
];

const lazyLoaded = ref([0]); // Only first slide loads initially

onMounted(() => {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    keyboard: { enabled: true },
    lazy: { loadPrevNext: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        if (!lazyLoaded.value.includes(this.activeIndex)) {
          lazyLoaded.value.push(this.activeIndex);
        }
      },
    },
  });
});
</script>

<style>
/* Inline your critical heading styles */
.text-yellow-600 {
  color: #cb8b01;
}
.md\:text-7xl {
  font-size: 4.5rem;
}
.animate-description {
  opacity: 0;
  transform: translateY(50px);
}

/* IMPROVED SWIPER STYLES */
.swiper-wrapper {
  height: auto !important;
  padding-bottom: 100px;
}

.swiper-scrollbar {
  width: 196px !important;
  height: 2px;
  background-color: #d1d5db;
  bottom: 21px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  content: "";
}

.swiper-scrollbar-drag {
  width: 56px !important;
  background: #c98a02;
}

.swiper-pagination {
  color: #9ca3af;
  font-size: 0px;
  font-weight: 400;
}

.swiper-pagination-current {
  color: white;
  font-size: 48px;
  font-weight: 600;
}

.grabbable {
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
</style>
