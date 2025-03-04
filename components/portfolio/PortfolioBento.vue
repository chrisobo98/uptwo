<template>
    <section class="py-48">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-4 mb-12 text-center">
          <h2 class="text-white text-4xl font-bold">Storytelling Visuals</h2>
        </div>
  
        <div class="grid items-center justify-center lg:grid-cols-4 gap-8" id="image-gallery">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="relative group rounded-2xl image"
            @click="openLightbox(index)"
          >
            <div class="img-wrapper rounded-2xl lg:h-[698px] h-[333px]">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover rounded-2xl"
              />
              <div class="img-overlay rounded-2xl">
                <div class="absolute bottom-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  <h6 class="text-white text-3xl font-semibold">{{ item.title }}</h6>
                  <p class="text-white text-sm">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Lightbox -->
        <div v-if="lightboxActive" class="overlay" @click="closeLightbox">
          <img :src="items[activeIndex].image" alt="Gallery Image" class="overlay-img" />
          <button id="prevButton" @click.stop="prevImage">&#10094;</button>
          <button id="nextButton" @click.stop="nextImage">&#10095;</button>
          <button id="exitButton" @click.stop="closeLightbox">&times;</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const items = ref([
    {
      title: "We are a luxury brand strategy consulting firm",
      description: "Where integrity is the ink to our pen. I am a brand strategy consultant with a strong foundation in brand messaging. I have also authored a financial literacy children’s book and crafted top SEO-ranked blogs and websites.",
      image: "https://pagedone.io/asset/uploads/1714040794.png",
    },
    {
      title: "Professional Keynote Speaker | Performer",
      description: "Over the past two decades, I have traveled across the United States, performing spoken word poetry and delivering keynote speeches at business conferences while also building a strong network of business-to-business partners.",
      image: "https://pagedone.io/asset/uploads/1714040808.png",
    },
    {
      title: "Crafting stories through the art of music composition",
      description: "Over the past 15 years, I have released an award-winning poetry album and three highly streamed, internationally recognized musical compilation albums.",
      image: "https://pagedone.io/asset/uploads/1714040819.png",
    },
    {
      title: "Expertise",
      description: "My expertise extends to writing mission statements, SOPs, business documentation, and legal content for Fortune 500 companies. With a strategic approach to storytelling and clear communication, I simplify complex ideas into impactful messages that drive engagement and results.",
      image: "https://pagedone.io/asset/uploads/1714040832.png",
    },
  ]);
  
  const lightboxActive = ref(false);
  const activeIndex = ref(0);
  
  const openLightbox = (index) => {
    activeIndex.value = index;
    lightboxActive.value = true;
  };
  
  const closeLightbox = () => {
    lightboxActive.value = false;
  };
  
  const prevImage = () => {
    activeIndex.value = (activeIndex.value - 1 + items.value.length) % items.value.length;
  };
  
  const nextImage = () => {
    activeIndex.value = (activeIndex.value + 1) % items.value.length;
  };
  </script>
  
  <style scoped>
  /* Responsive Grid */
  .image {
    cursor: pointer;
  }
  
  .img-wrapper {
    position: relative;
    overflow: hidden;
  }
  
  .img-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
  }
  
  .group:hover .img-overlay {
    opacity: 1;
  }
  
  /* Lightbox */
  .overlay {
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .overlay-img {
    max-width: 80%;
    height: auto;
    object-fit: contain;
  }
  
  @media screen and (min-width: 768px) {
    .overlay-img {
      max-width: 60%;
    }
  }
  
  @media screen and (min-width: 1200px) {
    .overlay-img {
      max-width: 50%;
    }
  }
  
  /* Navigation Buttons */
  #prevButton,
  #nextButton,
  #exitButton {
    position: absolute;
    color: white;
    font-size: 2em;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  
  #prevButton {
    left: 5%;
  }
  
  #nextButton {
    right: 5%;
  }
  
  #exitButton {
    top: 20px;
    right: 20px;
  }
  
  #prevButton:hover,
  #nextButton:hover,
  #exitButton:hover {
    opacity: 0.7;
  }
  
  @media screen and (min-width: 768px) {
    #prevButton,
    #nextButton,
    #exitButton {
      font-size: 3em;
    }
  }
  </style>
  