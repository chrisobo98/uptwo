<template>
  <section class="relative my-24">
    <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto mt-12">
      <div
        class="flex h-screen items-center justify-between flex-col sm:flex-row gap-y-4 mb-5"
      >
        <h2
          v-gsap.whenVisible.animateText.once
          class="font-manrope xl:text-9xl lg:text-6xl text-7xl text-white my-8"
        >
          A thrilling best-selling fantasy novel is set to hit the shelves in
          July 2025!
        </h2>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:mb-20 -mt-80 md:mt-0">
      <div class="flex justify-between items-center flex-col lg:flex-row">
        <div class="w-full lg:w-1/2">
          <h2
            class="font-manrope text-5xl text-white max-w-lg font-bold leading-[4rem] mb-7 text-center md:text-left"
          >
            Stellar IV: The Agents of Zierlux
          </h2>
          <p class="text-lg text-gray-400 mb-16 text-center md:text-left">
            Coming Soon
          </p>
        </div>
        <div class="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
          <div
            class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8 md:-mt-20"
          >
            <img
            v-gsap.parallax.faster
              src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Main%20Promo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
              alt="Team tailwind section"
              class="w-full h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
            />
            <img
            v-gsap.parallax.faster-10
              src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/StellarIV-eBook.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
              alt="Team tailwind section"
              class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
            />
            <img
            v-gsap.parallax.faster-5
              src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/StellarIV-Hardcover-M%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
              alt="Team tailwind section"
              class="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
