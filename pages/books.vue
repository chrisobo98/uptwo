<template>
  <section class="py-24 relative">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="text-center mb-10"
      >
        <h2 class="text-6xl font-bold text-white leading-normal">Books</h2>
        <p class="text-lg text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fringilla imperdiet scelerisque. teger finibus, mi ique rhoncus
          consectetur.
        </p>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="w-full">
        <div class="block lg:flex items-center justify-between mb-4">
          <div
            v-gsap.visible.from="{ opacity: 0, x: 200, delay: 0.5 }"
            class="flex md:flex-row flex-col items-center gap-4 lg:justify-start justify-center"
          >
            <h2
              class="font-manrope font-bold text-3xl md:text-5xl text-white md:text-left text-center"
            >
              Ivan, The Investor Kid: The ABCs of
              <span class="text-yellow-600"> How Money Works</span>
            </h2>
          </div>
        </div>
        <div
          class="flex items-center lg:justify-start justify-center max-sm:flex-wrap gap-y-3 mt-3"
          v-gsap.visible.from="{ opacity: 0, x: 200, delay: 0.5 }"
        >
          <p
            class="font-semibold text-lg leading-8 text-white ml-3 whitespace-nowrap"
          >
            <span class="text-gray-500 font-medium text-base leading-7"
              >By
            </span>
            T.W. Alexander
          </p>
          <svg
            class="mx-5"
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="30"
            viewBox="0 0 2 30"
            fill="none"
          >
            <path d="M1 0V30" stroke="#E5E7EB" />
          </svg>
          <div class="flex items-center">
            <span
              class="flex items-center gap-1 bg-amber-400 rounded-md py-0.5 px-1.5 font-medium text-base leading-7 text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12754_11652)">
                  <path
                    d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                    fill="white"
                  />
                  <g clip-path="url(#clip1_12754_11652)">
                    <path
                      d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_12754_11652">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_12754_11652">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              5.0
            </span>
            <p class="font-medium text-base leading-7 text-white ml-2">
              6 Reviews
            </p>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-8 mt-8 mb-12">
          <div class="img-box col-span-12 md:col-span-6">
            <NuxtImg
            provider="cloudinary"
              v-gsap.visible.from="{ opacity: 0, x: -300, delay: 1.5 }"
              v-gsap.magnetic.weak
              src="v1740964102/ivan_the_investor_bgyrj0.webp"
              alt="red dots top image"
              class="max-lg:mx-auto rounded-3xl object-cover"
            />
          </div>
          <div
            v-gsap.visible.from="{ opacity: 0, x: -100, delay: 1.0 }"
            class="col-span-12 md:col-span-6"
          >
            <h5
              v-gsap.visible.from="{ opacity: 0, x: 100, delay: 1.2 }"
              class="font-manrope font-semibold text-2xl leading-9 text-white mb-5"
            >
              Purpose
            </h5>
            <p class="text-gray-400 text-base font-normal mb-8">
              'Ivan, the Investor Kid' is more than just a book. It's a fun and
              educational journey that parents and children can embark on
              together, exploring the world of financial literacy. This book is
              designed to not only entertain but also to empower parents to have
              meaningful discussions about money with their children.
            </p>
            <h5
              v-gsap.visible.from="{ opacity: 0, x: -100, delay: 1.1 }"
              class="font-manrope font-semibold text-2xl leading-9 text-white mb-5"
            >
              Theme
            </h5>
            <p class="text-gray-400 text-base font-normal mb-8">
              This is a story about a young, smart, and ambitious child named
              Ivan, who is curious to learn how money works from his father. In
              response to his son's interest, Ivan's father takes him on a fun
              alphabetical journey to explain the ins and outs of how money
              works.
            </p>
            <h5
              v-gsap.visible.from="{ opacity: 0, x: 100, delay: 1.2 }"
              class="font-manrope font-semibold text-2xl leading-9 text-white mb-5"
            >
              Target Age Group
            </h5>
            <p class="text-gray-400 text-base font-normal mb-8">
              Ages 7 through 11 (3rd graders - 5th graders)
            </p>
          </div>
          <div class="col-span-12 md:col-start-7 md:col-end-12">
            <p class="font-normal text-sm leading-6 text-gray-400">
              Available on Amazon.com
            </p>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center justify-end gap-4"></div>
            </div>
            <div
              class="flex items-center justify-between py-2.5 pl-6 pr-3 rounded-full bg-yellow-50"
            >
              <div class="">
                <p class="font-normal text-lg text-yellow-700">Kindle</p>
                <p class="font-semibold text-sm text-yellow-600">$4.99</p>
              </div>
              <div class="">
                <p class="font-normal text-lg text-yellow-700">Paperback</p>
                <p class="font-semibold text-sm text-yellow-600">$9.99</p>
              </div>
              <button
                class="h-full px-8 text-center rounded-full py-2.5 bg-yellow-600 sh-1 font-semibold text-sm text-white transition-all duration-500 hover:bg-yellow-700"
              >
                Buy&nbsp;Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="bg-yellow-600 rounded-2xl p-8 xl:p-11">
        <h2
          v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
          class="font-manrope text-4xl text-white text-center font-bold mb-6"
        >
          Bookshelf
        </h2>
        <p
          v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
          class="text-center mb-6 text-white"
        >
          The upTWo writing staff is looking forward to the release of several
          outstanding books in the upcoming quarters. The author and founder of
          upTWo, T.W. Alexander, is excited about the release of "Ivan, the
          Investor Kid," an interactive children's book designed for parents to
          read along and open a dialogue about how money works.
        </p>
        <div
          class="md:flex-row gap-5 flex-col flex items-center justify-center"
        >
          <a
            v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0 }"
            href="#"
            class="border border-gray-300 shadow-sm rounded-full font-semibold text-white block py-3.5 px-7"
            >More about author</a
          >
        </div>
      </div>
    </div>

    <ComingSoon />
  </section>
</template>

<script setup>
import ComingSoon from "../components/books/ComingSoon.vue";

useHead({
  title: "Books | Publishing & Author Services",
  meta: [
    {
      name: "description",
      content:
        "Explore upTWO’s collection of books and author services. From compelling storytelling to expert publishing support, we help authors bring their vision to life.",
    },
    {
      property: "og:title",
      content: "Books | Discover Stories & Publishing Services by upTWO",
    },
    {
      property: "og:description",
      content:
        "Browse books and publishing services from upTWO. Whether you're an author or a reader, find inspiring stories and expert publishing support here.",
    },
  ],
});
</script>
