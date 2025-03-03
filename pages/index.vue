<template>
  <div v-if="!viewport.isLessThan('tablet')">
    <video
      class="md:w-10/12 mx-auto h-full md:h-dvh md:pt-0"
      autoplay
      loop
      muted
      playsinline
      loading="eager"
      :poster="posterUrl"
    >
      <source
        src="https://res.cloudinary.com/dkaakonrp/video/upload/f_auto,q_auto/v1740935738/oogaajgt1m7sx4r4aa6e.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="swiper mySwiper w-11/12 lg:w-6/12 mx-auto rounded-2xl">
    <div class="swiper-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="swiper-slide w-full bg-no-repeat bg-cover rounded-2xl bg-center pb-24 min-h-[700px] relative md:border-2 border-solid"
      >
        <div class="mx-auto max-w-7xl md:max-w-full px-4 sm:px-6 lg:px-8">
          <div
            class="w-full flex-col justify-start items-start gap-14 inline-flex"
          >
            <MobileLanding v-if="viewport.isLessThan('tablet')" class="z-10" />

            <div
              class="justify-center items-center gap-[492px] inline-flex z-20 md:mx-20"
            >
              <div
                class="flex-col justify-start items-start lg:gap-14 gap-10 inline-flex"
              >
                <div class="flex-col justify-start items-start gap-4 flex">
                  <div
                    class="flex-col justify-start items-start gap-2 flex mt-20 overflow-hidden"
                  >
                    <h2
                      v-gsap.animateText
                      v-gsap.from="{
                        opacity: 0,
                        x: 150,
                        stagger: 1.0,
                        delay: 0.3,
                      }"
                      class="text-white text-3xl md:text-6xl font-bold font-manrope md:leading-snug leading-snug"
                    >
                      Your Story. Your Brand. Our Pen.
                    </h2>
                    <h2
                      v-gsap.animateText
                      v-gsap.from="{
                        opacity: 0,
                        x: -150,
                        stagger: 1.0,
                        delay: 0.5,
                      }"
                      class="text-yellow-600 md:text-7xl text-6xl font-bold font-manrope md:leading-snug leading-snug"
                    >
                      Our Passion
                    </h2>
                    <p
                      v-gsap.animateText.slow
                      v-gsap.from="{ opacity: 0, y: 50, delay: 1.0 }"
                      class="lg:max-w-xl w-full text-gray-200/80 text-2xl font-normal leading-normal"
                    >
                      Driving Growth Through Strategy and Storytelling
                    </p>
                  </div>
                </div>
                <span class="text-white text-lg font-medium leading-relaxed">
                  <div
                    v-gsap.from="{ opacity: 0, y: 50, delay: 4.5 }"
                    class="border border-yellow-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-12 md:mb-4"
                  >
                    <span class="font-light text-lg text-white ml-3">
                      {{ slide.highlight }}
                    </span>
                    <a
                      href="javascript:;"
                      class="w-8 h-8 rounded-full flex justify-center items-center bg-yellow-600"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex items-center justify-between relative lg:mt-0 mt-7 absolute 2xl:bottom-40 xl:bottom-48 lg:bottom-44 bottom-44 max-w-[320px] mx-auto z-10"
    >
      <button
        class="swiper-button-prev group transition-all duration-700 ease-in-out"
      >
        <svg
          class="text-white group-hover:text-gray-400 transition-all duration-700 ease-in-out"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.55112 16.0613L2.5 9.99994M2.5 9.99994L7.55112 3.9386M2.5 9.99994L17.4999 9.99994"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="swiper-scrollbar mx-14"></div>
      <button
        class="swiper-button-next group transition-all duration-700 ease-in-out"
      >
        <svg
          class="text-white group-hover:text-gray-400 transition-all duration-700 ease-in-out"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.4488 5L17.4999 10.0511M17.4999 10.0511L12.4488 15.1022M17.4999 10.0511L2.5 10.0511"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div
      class="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal lg:top-[40%] lg:-left-[18%] left-[-48%]"
    ></div>
  </div>
  <SubscribeForm class="mt-40 mb-10 md:mt-0" />
</template>

<script setup>
import { useHead } from "#imports";
import Swiper from "swiper";
import SubscribeForm from "../components/SubscribeForm.vue";
import MobileLanding from "../components/index/MobileLanding.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const viewport = useViewport();

const posterUrl = useImage({
  src: "https://res.cloudinary.com/dkaakonrp/image/upload/v1740938519/Screenshot_2025-03-02_at_1.01.28_PM_gsknif.png",
  format: "webp",
  quality: 80,
});

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint);
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
    image: "https://img1.wsimg.com/isteam/getty/1400557658/:/rs=w:1350,m",
    highlight: "Learn How",
  },
  {
    image: "https://pagedone.io/asset/uploads/1720172793.png",
    highlight: "View our Services",
  },
  {
    image: "https://pagedone.io/asset/uploads/1720172806.png",
    highlight: "Read more",
  },
];

onMounted(() => {
  new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: { enabled: true },
    scrollbar: { el: ".swiper-scrollbar" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<style>
.swiper-wrapper {
  height: max-content !important;
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
  content: " ";
}

.swiper-scrollbar-drag {
  width: 56px !important;
  background: #c98a02;
}

.swiper-pagination {
  color: #9ca3af;
  font-size: 0px;
  font-weight: 400;
  line-height: 46px;
  position: absolute;
}

.swiper-pagination-current {
  color: white;
  font-size: 48px;
  font-weight: 600;
  line-height: 62px;
}

.scroll-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
