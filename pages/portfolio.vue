<template>
  <section class="pt-20">
    <!-- Hero Section -->
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full lg:h-screen md:mt-40"
    >
      <div class="grid grid-cols-1 items-center lg:grid-cols-12">
        <!-- Text Content -->
        <div class="w-full xl:col-span-5 lg:col-span-6">
          <h1
            v-gsap.from="{
              opacity: 0,
              y: 50,
              duration: 1,
              ease: 'power3.out',
            }"
            class="py-8 text-center text-white font-extrabold font-manrope text-5xl md:text-6xl lg:text-left"
          >
            The Art of <span class="text-yellow-600">Storytelling</span>
          </h1>
          <p
            v-gsap.from="{
              opacity: 0,
              y: 50,
              duration: 1,
              ease: 'power3.out',
              delay: 0.2,
            }"
            class="text-gray-400 text-base text-center mb-10 lg:text-left"
          >
            Explore T.W. Alexander’s storytelling portfolio, where each
            narrative transforms your brand’s vision into a compelling
            experience.
          </p>
        </div>
        <!-- Image -->
        <div
          v-gsap.from="{
            opacity: 0,
            x: 100,
            duration: 1,
            ease: 'power3.out',
            delay: 0.3,
          }"
          class="w-auto mx-auto h-auto animated-div rounded-3xl xl:col-span-7 lg:col-span-6 mb-12 md:mb-0"
        >
          <NuxtImg
            provider="cloudinary"
            v-gsap.magneticv-gsap.magnetic.weak
            v-gsap.from="{
              opacity: 0,
              x: 100,
              duration: 1,
              ease: 'power3.out',
              delay: 0.6,
            }"
            src="v1740964226/rs_w_1280_h_1280_shm6tc.webp"
            alt="Portfolio Image"
            class="w-auto h-auto rounded-3xl mx-auto px-3 py-3"
          />
        </div>
      </div>
    </div>

    <!-- Swiper Section -->
    <div class="md:w-3/4 bg-cover bg-center mx-auto rounded-2xl">
      <section class="mx-auto lg:pt-[84px] pb-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            class="swiper-container slider w-full flex-col justify-start items-start gap-12"
          >
            <div class="swiper-wrapper">
              <div
                v-gsap.whenVisible.from="{ scale: 0.8, height: 0, padding: 0 }"
                class="swiper-slide"
                v-for="(slide, index) in slides"
                :key="index"
              >
                <div
                  v-gsap.whenVisible.from="{ y: 200 }"
                  class="grid grid-cols-2 gap-4"
                >
                  <div
                    v-gsap.whenVisible.stagger.from="{
                      opacity: 0,
                      x: 40,
                    }"
                    class="w-full flex-col col-span-2 lg:col-span-1 justify-start items-start gap-8 flex"
                  >
                    <div class="flex flex-col">
                      <h2
                        class="text-white text-5xl font-normal font-playfairDisplay"
                      >
                        {{ slide.title }}
                      </h2>
                    </div>
                    <p
                      class="lg:max-w-xl w-full h-auto text-gray-300 text-base font-medium leading-relaxed"
                    >
                      {{ slide.description }}
                    </p>
                  </div>
                  <NuxtImg
                    provider="cloudinary"
                    v-gsap.magnetic.weak
                    class="w-full h-auto col-span-2 md:col-span-1 rounded-lg"
                    :src="slide.img"
                    alt="image description"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Swiper Thumbnail Navigation -->
          <div class="swiper-container slider-thumbnail relative mt-20">
            <div class="swiper-wrapper lg:flex-row flex-col">
              <div
                class="swiper-slide cursor-pointer transition duration-300 ease-in-out"
                :class="{
                  'text-yellow-400': activeIndex === index,
                  'text-white': activeIndex !== index,
                }"
                v-for="(slide, index) in slides"
                :key="index"
                @click="goToSlide(index)"
              >
                <div
                  class="text-lg font-normal leading-relaxed whitespace py-4 px-4"
                >
                  {{ index + 1 }}. {{ slide.thumbnail }}
                </div>
                <div
                  v-show="activeIndex === index"
                  class="swiper-scrollbar my-12"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-none overflow-y-none"
    >
      <h1
        v-gsap.whenVisible.to="{
          x: 50,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }"
        class="md:hidden text-white font-extrabold font-manrope text-5xl lg:text-left overflow-x-none"
      >
        Luxury <span class="text-yellow-600">Visuals</span> Storytelling
        <span class="text-yellow-600">Brands</span> Story
        <span class="text-yellow-600"></span>
      </h1>
      <h1
        v-gsap.whenVisible.to="{
          x: -300,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }"
        class="hidden md:block text-white font-extrabold font-manrope text-5xl lg:text-left overflow-x-none"
      >
        Luxury <span class="text-yellow-600">Visuals</span> Storytelling
        <span class="text-yellow-600">Brands</span> Story
        <span class="text-yellow-600"></span>
      </h1>
      <h1
        v-gsap.whenVisible.to="{
          x: 300,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.5,
        }"
        class="hidden md:block text-white font-extrabold font-manrope text-5xl"
      >
        Integrity <span class="text-yellow-600">Visuals</span> Thrill
        <span class="text-yellow-600">Visuals</span> Exploration
        <span class="text-yellow-600"></span>
      </h1>
    </div>

    <PortfolioBento />
    <TestimonialsSection />
    <ServicesSection class="md:mt-20 mt-0" />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PortfolioBento from "~/components/portfolio/PortfolioBento.vue";
import TestimonialsSection from "~/components/portfolio/TestimonialsSection.vue";
import ServicesSection from "~/components/portfolio/ServicesSection.vue";

useHead({
  title: "Portfolio | T.W. Alexander’s Storytelling",
  meta: [
    {
      name: "description",
      content:
        "Explore T.W. Alexander’s portfolio of compelling brand storytelling and narrative expertise.",
    },
    {
      property: "og:title",
      content: "Portfolio | T.W. Alexander’s Storytelling",
    },
    {
      property: "og:description",
      content:
        "Discover how T.W. Alexander crafts narratives that captivate and engage audiences.",
    },
  ],
});

const slides = ref([
  {
    title: "Chapter 1: The History",
    description:
      "Screams echoed from the children's mouths as toys were thrown across the playroom like confetti. 'Say sorry!' Teacher Winslow yelled at John for pushing Timmy down for the third time during duck-duck-goose. She could barely hear her thoughts over the noise of tossed footballs and plastic cheeseburgers being served, along with the cries of 'I want Mommy and Daddy,' which rang out every thirty seconds. Amid the chaos, a tall boy gazed into a world of imagination that extended far beyond the classroom. While his friends doubted the existence of Santa Claus and questioned the reality of magic, T.W. Alexander contemplated a different mystery: how to reconnect with the source of his visions for a more sustainable world and bring them to life. And that’s precisely what he did. Through the art of storytelling, he found himself performing in stage plays, contributing to newspapers, showcasing his talent at professional sporting events, and catching the attention of scouting agencies while still in elementary school. He was on the honor roll in middle school but was most proud of receiving the prestigious “Class Clown” award in 8th grade. By high school, popularity weighed on his ego like a heavy coat in winter, as days were filled with practices and games for multiple sports. Lunch breaks became opportunities for freestyle rap battles in the cafeteria. Evenings were dedicated to volunteering and community service, while nights were spent studying literature and writing poetry.",
    thumbnail: "While every moment of solitude.",
    img: "v1740965292/kids_aszurx_toxq11.webp",
  },
  {
    title: "Chapter 2: The Experience",
    description:
      "In college, his thesis statement on business ethics gained significant attention, even reaching the President’s desk. At the same time, he captured the interest of major record labels after releasing a hit single, which led to opportunities for him to be an opening performer for several platinum-selling artists. Still, he graduated at the top of his class with a Bachelor of Science degree in Business and an MBA. For 20 years after college, artistic storytelling has been his secret weapon for climbing the corporate ladder at multiple Fortune 500 companies. His innovative solutions have fast-tracked him in front of senior leadership across various roles, from accounting to purchasing to human resources. He developed compelling financial dashboards that effectively communicated the company's financial story, facilitating cost-saving initiatives and enhancing project mapping. He also wrote legal documentation and collaborated with ERISA attorneys for committee meetings.",
    thumbnail: "A Journey of Discovery and Survival.",
    img: "v1740964634/typewriter_u6q7a3.webp",
  },
  {
    title: "Chapter 3: The Passion",
    description:
      "In addition to his corporate success, he spent his nights and weekends winning the 2014 Poetry and Album of the Year awards, touring the nation with paid gigs, releasing highly streamed music albums, and hosting one of Central Florida’s top open mic shows for three years—all while serving on the board of multiple non-profit organizations and youth mentor.  Now, as a fully independent brand strategist, he often sits in his office, pondering what his 5-year-old envisions as he scribbles notes from across his desk chair. Another storyteller, perhaps? For decades, his brand messaging and innovative solutions have reached key stakeholders' desks, homes, and phones. And now he’s ready to do the same for your business. As a business-to-business consultant, his passion lies in helping companies that are helping others. It’s like compound interest in making it to that sustainable world he envisions. Storytelling is a way of life, and we are dedicated to telling a compelling story for your brand that resonates with your customers' hearts and minds—helping creatives convert!",
    thumbnail: "That captures the thrill of exploration.",
    img: "v1740964634/big_steps_zsuewh.webp",
  },
]);

const activeIndex = ref(0);
let slider, sliderThumbnail

onMounted(() => {
  // First Swiper
  sliderThumbnail = new Swiper(".slider-thumbnail", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  slider = new Swiper(".slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    thumbs: {
      swiper: sliderThumbnail,
    },
    on: {
      slideChange: () => {
        activeIndex.value = slider.activeIndex;
      },
    },
  });
});

const goToSlide = (index) => {
  slider.slideTo(index);
  activeIndex.value = index;
};
</script>

<style scoped>
.swiper-horizontal > .swiper-scrollbar,
.swiper-scrollbar.swiper-scrollbar-horizontal {
  margin-top: 30px;
  background-color: #9ca3af;
  height: 1px;
  left: 0;
}

.swiper-scrollbar-drag {
  height: 3px;
  background-color: #fff;
  border-radius: 30px;
  top: -1px;
}

.swiper-container {
  overflow: hidden;
}

.swiper-wrapper {
  height: auto;
  padding-bottom: 25%; /* Default for larger screens */
}

@media (max-width: 768px) {
  /* Adjust breakpoint as needed */
  .swiper-wrapper {
    padding-bottom: 100%;
  }
}

.swiper-slide {
  cursor: pointer;
}

/* Add smooth color transition for active text */
.swiper-slide.text-yellow-400 {
  font-weight: bold;
}
.animated-div {
  background: linear-gradient(200deg, #464545, #b78111, #e4e4e4);
  background-size: 600% 600%;
  -webkit-animation: AnimationName 7s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 7s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 69% 0%;
  }
  50% {
    background-position: 32% 100%;
  }
  100% {
    background-position: 69% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 69% 0%;
  }
  50% {
    background-position: 32% 100%;
  }
  100% {
    background-position: 69% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 69% 0%;
  }
  50% {
    background-position: 32% 100%;
  }
  100% {
    background-position: 69% 0%;
  }
}

.img-wrapper {
  position: relative;
  overflow: hidden;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.img-wrapper:hover .img-overlay {
  opacity: 1;
}

</style>
