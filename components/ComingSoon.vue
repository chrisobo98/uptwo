<template>
  <section class="relative">
    <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto">
      <div
        class="flex h-screen items-center justify-between flex-col sm:flex-row gap-y-4 mb-5"
      >
        <h2 v-gsap.whenVisible.animateText.once class=" font-manrope text-9xl text-white my-8">
          A thrilling best-selling fantasy novel is set to hit the shelves in
          July 2025!
        </h2>
        <div class="flex justify-center items-center gap-6"></div>
      </div>
    </div>
    <div class="swiper mySwiper mb-10 py-10">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="w-full h-full max-h-[456px]">
            <img
              src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/StellarIV-Hardcover-M%20(1).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
              alt=""
              class="w-100 h-100 object-cover mx-auto"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="w-full h-full max-h-[456px]">
            <img
              src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Main%20Promo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
              alt=""
              class="w-100 h-100 object-cover mx-auto"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="w-full h-full max-h-[456px]">
            <img
              src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/StellarIV-eBook.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
              alt=""
              class="w-full h-full object-cover mx-auto"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="w-full h-full max-h-[456px]">
            <img
              src="//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Main%20Promo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
              alt=""
              class="w-full h-full object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/css";

export default {
  data() {
    return {
      images: [
        "https://pagedone.io/asset/uploads/1707712046.png",
        "https://pagedone.io/asset/uploads/1707712065.png",
        "https://pagedone.io/asset/uploads/1707712095.png",
      ],
    };
  },
  mounted() {
    new Swiper(".mySwiper", {
      pagination: ".swiper-pagination",
      slidesPerView: 2,
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      spaceBetween: 0,
      slideToClickedSlide: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
<style>
.swiper-slide.swiper-slide-active > .slide\:w-full {
  width: 100%;
}

.swiper-slide {
  max-height: 400px !important;
}

.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: "" !important;
}

.swiper-wrapper {
  height: 100% !important;
}

.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: "" !important;
}

.swiper-button-next,
.swiper-button-prev {
  position: relative !important;
}
</style>
