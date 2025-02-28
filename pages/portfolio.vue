<template>
  <div>
    <section class="pt-5 lg:pt-20 overflow-x-hidden">
      <!-- Hero Section -->
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              class="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-32"
            >
              <!-- Text Content -->
              <div class="w-full xl:col-span-5 lg:col-span-6">
                <h1
                  v-gsap.from="{
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power3.out',
                  }"
                  class="py-8 text-center text-white font-extrabold font-manrope text-5xl lg:text-left"
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
              <div class="w-5/6 mx-auto xl:col-span-7 lg:col-span-6">
                <img
                  v-gsap.from="{
                    opacity: 0,
                    x: 100,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.4,
                  }"
                  src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/suave%20edited.jpg/:/cr=t:1.68%25,l:0%25,w:100%25,h:93.13%25"
                  alt="Portfolio Image"
                  class="w-full lg:h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
      </section>

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
                  <div v-gsap.whenVisible.from="{ y: 200 }" class="grid grid-cols-2 gap-4">
                    <div v-gsap.whenVisible.delay-1000.stagger.from="{ opacity: 0, x: 40 }"
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
                    <img
                      class="h-auto w-auto object-cover md:mt-24 rounded-lg"
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
                    class="text-lg font-normal leading-relaxed whitespace-nowrap"
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

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <h1  v-gsap.whenVisible.to="{ x: -300, start: 'top bottom', end: 'bottom top', scrub: 1.5 }"
          class="text-white font-extrabold font-manrope text-5xl lg:text-left overflow-x-show"
        >
          Luxury <span class="text-yellow-600">Visuals</span>          Storytelling <span class="text-yellow-600">Brands</span>
          Storytelling <span class="text-yellow-600"></span>
          <br />
        </h1>
        <h1  v-gsap.whenVisible.to="{ x: 300, start: 'top bottom', end: 'bottom top', scrub: 2.5 }"
          class="text-white font-extrabold font-manrope text-5xl"
        >
          Integrity <span class="text-yellow-600">Visuals</span>          Thrill <span class="text-yellow-600">Visuals</span>
          Exploration <span class="text-yellow-600"></span>
          Integrity <span class="text-yellow-600">Visuals</span>          Thrill <span class="text-yellow-600">Visuals</span>
          Exploration <span class="text-yellow-600"></span>
          <br />


        </h1>
      </div>

      <!-- Swiper2 Section -->
      <div
        class="md:w-3/4 bg-no-repeat bg-cover bg-center mx-auto rounded-2xl"
        :style="{ backgroundImage: `url(${slides2[activeIndex].img})` }"
      >
        <section class="mx-auto lg:pt-[84px] pb-12">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div v-gsap.whenVisible.from="{ y: 100 }"
              class="swiper-container slider2 w-full lg:pt-28 pt-10 flex-col justify-start items-start gap-12"
            >
              <div v-gsap.whenVisible.stagger.from="{ opacity: 0, x: 40 }" class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(slide, index) in slides2"
                  :key="index"
                >
                  <div class="grid grid-cols-2 gap-4">
                    <img
                      class="h-auto w-auto object-cover md:mt-24 rounded-lg"
                      :src="slide.img"
                      alt="image description"
                    />
                    <div
                      class="w-full flex-col justify-end items-end gap-8 flex text-right"
                    >
                      <div class="flex flex-col">
                        <h2
                          class="text-white text-6xl font-normal font-playfairDisplay"
                        >
                          {{ slide.title }}
                        </h2>
                      </div>
                      <p
                        class="lg:max-w-xl w-full text-gray-300 text-base font-medium leading-relaxed md:pb-28 pb-14"
                      >
                        {{ slide.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Second Swiper Thumbnail Navigation (Aligned Right) -->
            <div
              class="swiper-container slider-thumbnail2 relative flex justify-end mt-20"
            >
              <div class="swiper-wrapper lg:flex-row flex-col">
                <div
                  class="swiper-slide cursor-pointer transition duration-300 ease-in-out"
                  :class="{
                    'text-yellow-400': activeIndex2 === index,
                    'text-white': activeIndex2 !== index,
                  }"
                  v-for="(slide, index) in slides2"
                  :key="index"
                  @click="goToSlide2(index)"
                >
                  <div
                    class="text-lg font-normal leading-relaxed whitespace-nowrap"
                  >
                    {{ slide.thumbnail }}
                  </div>
                  <div
                    v-show="activeIndex2 === index"
                    class="swiper-scrollbar my-12"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    <div v-gsap.whenVisible.from="{ scale: 0.8, height: 0, padding: 0 }" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div v-gsap.whenVisible.from="{ y: 100 }"
        class="flex justify-center items-center gap-y-8 md:gap-y-0 flex-wrap md:flex-wrap xl:flex-nowrap xl:flex-row xl:justify-between xl:gap-x-8 max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto xl:max-w-full"
      >
        <div v-gsap.whenVisible.delay-1000.stagger.from="{ opacity: 0, x: -40 }" class="w-full xl:w-1/3">
          <span class="text-sm text-yellow-600 font-medium mb-4 block"
            >Brand Strategist Testimonials</span
          >
          <h2
            class="font-manrope text-4xl font-bold text-white leading-[3.25rem] mb-4"
          >
            What our clients say about us
          </h2>
          <p class="text-base text-gray-400 mb-14">
            knowledge, expertise, advices & confidence
          </p>
          <button
            class="bg-yellow-50 rounded-full shadow-sm py-3 px-7 flex items-center gap-4 font-semibold text-yellow-600 transition-all duration-500 hover:bg-yellow-100 mb-12"
          >
            View all testimonials
            <svg
              class="w-2 h-3 text-yellow-600"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 11L5.08578 7.41421C5.75245 6.74755 6.08579 6.41421 6.08579 6C6.08579 5.58579 5.75245 5.25245 5.08579 4.58579L1.5 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="w-full xl:w-2/3 relative md:-mt-20 xl:mt-0">
          <div class="flex flex-col items-center md:flex-row gap-8">
            <div class="w-full xl:w-1/2">
              <div v-gsap.parallax.faster-n10 class="bg-white shadow-sm rounded-2xl p-8">
                <div
                  class="flex items-center gap-2 text-amber-500 transition-all duration-500"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p class="py-6 text-lg leading-8 text-gray-400">
                  "Working with upTWo Consulting has been a game-changer for
                  Elite Children's Learning Center. His strategic brand
                  approach, innovative ideas, and project management skills
                  exceeded my expectations and kept him on retainer for far
                  longer than I initially anticipated. Beyond crafting impactful
                  copy for our curriculum, his brand messaging strategies
                  created a seamless flow among employees, reconnected us with
                  parents, and fostered a safe, loving, and professional
                  environment. His solutions didn't just elevate our brand —
                  they expanded our franchise in ways I hadn’t imagined."
                </p>
                <div class="flex items-center">
                  <div class="flex items-center gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1704349534.png"
                      alt="Emily image"
                      class="w-6 h-6 rounded-full object-cover"
                    />
                    <h6 class="font-medium text-white">C.E.O., Founder</h6>
                  </div>
                  <span
                    class="text-sm font-medium text-yellow-600 ml-4 pl-4 border-l border-solid border-gray-300"
                    >Elite Children Learning Center</span
                  >
                </div>
              </div>
            </div>
            <div class="w-full xl:w-1/2 grid gap-8">
              <div v-gsap.parallax.faster-8 class="bg-white shadow-sm rounded-2xl p-8">
                <div
                  class="flex items-center gap-2 text-amber-500 transition-all duration-500"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p class="py-6 text-lg leading-8 text-gray-400">
                  "Thanks to their strategic brand messaging, we transformed our
                  customer flow with new to-go signs and posters. We saw
                  smoother traffic, increased sales, and happier customers
                  within a week. It was an instant success!"
                </p>
                <div class="flex items-center">
                  <div class="flex items-center gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1704349514.png"
                      alt="Olivia image"
                      class="w-6 h-6 rounded-full object-cover"
                    />
                    <h6 class="font-medium text-white">Co-Founder</h6>
                  </div>
                  <span
                    class="text-sm font-medium text-yellow-600 ml-4 pl-4 border-l border-solid border-gray-300"
                    >Kingston 5 Restaurant</span
                  >
                </div>
              </div>
              <div v-gsap.parallax.faster class="bg-white shadow-sm rounded-2xl p-8">
                <div
                  class="flex items-center gap-2 text-amber-500 transition-all duration-500"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p class="py-6 text-lg leading-8 text-gray-400">
                  "When we faced a critical moment, preparing to launch a new
                  product and service under tight pressure, there was only one
                  person we knew could deliver — T. Alexander. Having worked
                  with him in the past, we knew his strategic mind and...
                  <span class="font-bold">Read More</span>
                </p>
                <div class="flex items-center">
                  <div class="flex items-center gap-4">
                    <img
                      src="https://pagedone.io/asset/uploads/1704351062.png"
                      alt="Wyatt image"
                      class="w-6 h-6 rounded-full object-cover"
                    />
                    <h6 class="font-medium text-white">C.E.O</h6>
                  </div>
                  <span
                    class="text-sm font-medium text-yellow-600 ml-4 pl-4 border-l border-solid border-gray-300"
                    >Automotive Wrap Professionals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }" class="mb-14 text-center">
          <span
            class="py-1 px-4 bg-yellow-100 rounded-full text-xs font-medium text-yellow-600 text-center"
            >Services</span
          >
          <h2 class="text-4xl text-center font-bold text-white mt-5">
            Services Offered
          </h2>
          <p class="text-lg text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla imperdiet scelerisque. teger finibus, mi ique rhoncus consectetur.


        </p>
        </div>
        <div
          class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8"
        >
        <!-- Brand Identity & Messaging -->
          <div
            class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
          >
            <div
              class="bg-yellow-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-yellow-600"
            >
              <svg
                class="stroke-yellow-600 transition-all duration-500 group-hover:stroke-white"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-white mb-3 capitalize">
              Brand Identity & Messaging
            </h4>
            <p class="text-sm font-normal text-gray-400">
              plan and structure work how you want. Quickly organizing tasks.
            </p>
          </div>
          <!-- Copywriting & Storytelling
 -->
          <div
            class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
          >
            <div
              class="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600"
            >
              <svg
                class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                  stroke=""
                  stroke-width="2"
                ></path>
                <path
                  d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                  stroke=""
                  stroke-width="2"
                ></path>
                <path
                  d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                  stroke=""
                  stroke-width="2"
                ></path>
                <path
                  d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                  stroke=""
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-white mb-3 capitalize">
              Copywriting & Storytelling
            </h4>
            <p class="text-sm font-normal text-gray-400">
              Bring all your tools and data together. Also join with hundreds of
              other apps.
            </p>
          </div>
          <!-- Project Management
 -->
          <div
            class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
          >
            <div
              class="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600"
            >
              <svg
                class="stroke-teal-600 transition-all duration-500 group-hover:stroke-white"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-white mb-3 capitalize">
              Project Management
            </h4>
            <p class="text-sm font-normal text-gray-400">
              Get real time insight into progress and allows teams to track
              their work habits
            </p>
          </div>
          <!-- Keynote Speaker
 -->
          <div
            class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
          >
            <div
              class="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600"
            >
              <svg
                class="stroke-orange-600 transition-all duration-500 group-hover:stroke-white"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-white mb-3 capitalize">
              Keynote Speaker
            </h4>
            <p class="text-sm font-normal text-gray-400">
              Automated processes to coordinate your teams and increase
              communication.
            </p>
          </div>
          <!-- Market Positioning
 -->
          <div
            class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
          >
            <div
              class="bg-fuchsia-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-fuchsia-600"
            >
              <svg
                class="stroke-orange-600 transition-all duration-500 group-hover:stroke-white"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-white mb-3 capitalize">
              Market Positioning
            </h4>
            <p class="text-sm font-normal text-gray-400">
              Automated processes to coordinate your teams and increase
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = ref([
  {
    title: "Chapter 1: The History",
    description:
      "Screams echoed from the children's mouths as toys were thrown across the playroom like confetti. 'Say sorry!' Teacher Winslow yelled at John for pushing Timmy down for the third time during duck-duck-goose. She could barely hear her thoughts over the noise of tossed footballs and plastic cheeseburgers being served, along with the cries of 'I want Mommy and Daddy,' which rang out every thirty seconds. Amid the chaos, a tall boy gazed into a world of imagination that extended far beyond the classroom. While his friends doubted the existence of Santa Claus and questioned the reality of magic, T.W. Alexander contemplated a different mystery: how to reconnect with the source of his visions for a more sustainable world and bring them to life. And that’s precisely what he did. Through the art of storytelling, he found himself performing in stage plays, contributing to newspapers, showcasing his talent at professional sporting events, and catching the attention of scouting agencies while still in elementary school. He was on the honor roll in middle school but was most proud of receiving the prestigious “Class Clown” award in 8th grade. By high school, popularity weighed on his ego like a heavy coat in winter, as days were filled with practices and games for multiple sports. Lunch breaks became opportunities for freestyle rap battles in the cafeteria. Evenings were dedicated to volunteering and community service, while nights were spent studying literature and writing poetry.",
    thumbnail: "While every moment of solitude.",
    img: "https://img1.wsimg.com/isteam/getty/1159989044/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
  },
  {
    title: "Chapter 2: The Experience",
    description:
      "In college, his thesis statement on business ethics gained significant attention, even reaching the President’s desk. At the same time, he captured the interest of major record labels after releasing a hit single, which led to opportunities for him to be an opening performer for several platinum-selling artists. Still, he graduated at the top of his class with a Bachelor of Science degree in Business and an MBA. For 20 years after college, artistic storytelling has been his secret weapon for climbing the corporate ladder at multiple Fortune 500 companies. His innovative solutions have fast-tracked him in front of senior leadership across various roles, from accounting to purchasing to human resources. He developed compelling financial dashboards that effectively communicated the company's financial story, facilitating cost-saving initiatives and enhancing project mapping. He also wrote legal documentation and collaborated with ERISA attorneys for committee meetings.",
    thumbnail: "A Journey of Discovery and Survival.",
    img: "//img1.wsimg.com/isteam/stock/lb4Aowp/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
  },
  {
    title: "Chapter 3: The Passion",
    description:
      "In addition to his corporate success, he spent his nights and weekends winning the 2014 Poetry and Album of the Year awards, touring the nation with paid gigs, releasing highly streamed music albums, and hosting one of Central Florida’s top open mic shows for three years—all while serving on the board of multiple non-profit organizations and youth mentor.  Now, as a fully independent brand strategist, he often sits in his office, pondering what his 5-year-old envisions as he scribbles notes from across his desk chair. Another storyteller, perhaps? For decades, his brand messaging and innovative solutions have reached key stakeholders' desks, homes, and phones. And now he’s ready to do the same for your business. As a business-to-business consultant, his passion lies in helping companies that are helping others. It’s like compound interest in making it to that sustainable world he envisions. Storytelling is a way of life, and we are dedicated to telling a compelling story for your brand that resonates with your customers' hearts and minds—helping creatives convert!",
    thumbnail: "That captures the thrill of exploration.",
    img: "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/small%20steps.jpg/:/cr=t:12.38%25,l:0%25,w:100%25,h:75.24%25/rs=w:600,h:300,cg:true",
  },
]);

const slides2 = ref([
  {
    title:
      "We are a luxury brand strategy consulting firm where integrity is the ink to our pen.",
    description:
      "I am a brand strategy consultant with a strong foundation in brand messaging. I have also authored a financial literacy children’s book and crafted top SEO-ranked blogs and websites. My expertise extends to writing mission statements, SOPs, business documentation, and legal content for Fortune 500 companies. With a strategic approach to storytelling and clear communication, I simplify complex ideas into impactful messages that drive engagement and results.",
    thumbnail: "Luxury brand strategy consulting firm",
  },
  {
    title: "Professional Keynote Speaker | Performer",
    description:
      "Over the past two decades, I have traveled across the United States, performing spoken word poetry and delivering keynote speeches at business conferences while also building a strong network of business-to-business partners. ",
    thumbnail: "Professional Keynote Speaker",
  },
  {
    title: "Crafting stories through the art of music composition",
    description:
      "Over the past 15 years, I have released an award-winning poetry album and three highly streamed, internationally recognized musical compilation albums.",
    thumbnail: "Crafting stories",
  },
]);

const activeIndex = ref(0);
const activeIndex2 = ref(0);
let slider, sliderThumbnail, slider2, sliderThumbnail2;

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

  // Second Swiper
  sliderThumbnail2 = new Swiper(".slider-thumbnail2", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  slider2 = new Swiper(".slider2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    thumbs: {
      swiper: sliderThumbnail2,
    },
    on: {
      slideChange: () => {
        activeIndex2.value = slider2.activeIndex;
      },
    },
  });
});

const goToSlide = (index) => {
  slider.slideTo(index);
  activeIndex.value = index;
};

const goToSlide2 = (index) => {
  slider2.slideTo(index);
  activeIndex2.value = index;
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
  padding-bottom: 30px;
}

.swiper-slide {
  cursor: pointer;
}

/* Add smooth color transition for active text */
.swiper-slide.text-yellow-400 {
  font-weight: bold;
}
</style>
