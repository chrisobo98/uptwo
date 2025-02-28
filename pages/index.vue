<template>
  <div>
    <section class="w-full h-auto mt-12">
      <video
        width="auto"
        height="auto"
        autoplay
        loop
        muted
        class="swiper-slide w-full bg-no-repeat bg-cover bg-center md:pt-[84px] md:pb-24 md:min-h-[800px] relative"
      >
        <source src="assets/css/Final Comp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


    </section>
    <div class="swiper mySwiper md:w-4/5 mx-auto md:rounded-2xl">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide w-full bg-no-repeat bg-cover bg-center pb-24 min-h-[600px] relative"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <!-- Background overlay using ::before -->
            <div class="absolute inset-0 bg-black bg-opacity-70"></div>

            <section class="pt-14 pb-14 relative">
              <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  class="w-full flex-col justify-start items-start gap-14 inline-flex"
                >
                  <div
                    class="justify-center items-center gap-[492px] inline-flex"
                  >
                    <div
                      class="flex-col justify-start items-start lg:gap-14 gap-10 inline-flex"
                    >
                      <div
                        class="flex-col justify-start items-start gap-4 flex"
                      >
                        <div
                          class="flex-col justify-start items-start gap-2 flex mt-8"
                        >
                          <h2
                            v-gsap.animateText
                            v-gsap.from="{ opacity: 0, y: 50, stagger: 1.0 }"
                            class="text-white md:text-7xl text-6xl font-bold font-manrope md:leading-snug leading-snug"
                          >
                            Your Story. Your Brand. Our Pen.
                          </h2>
                          <h2
                            v-gsap.animateText
                            v-gsap.from="{ opacity: 0, y: 50, stagger: 1.0 }"
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
                      <h5
                        class="text-white text-lg font-medium leading-relaxed"
                      >
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
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
    <SubscribeForm />

  </div>
</template>

<script>
import Swiper from "swiper";
import SubscribeForm from "../components/SubscribeForm.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  data() {
    return {
      slides: [
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
          highlight: "Read more about us",
        },
      ],
    };
  },
  mounted() {
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
      pagination: { el: ".swiper-pagination", type: "fraction" },
    });
  },
};
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
  background: #818cf8;
}
.swiper-pagination {
  color: #9ca3af;
  font-size: 30px;
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
</style>
