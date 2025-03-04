<template>
  <section class="py-48">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-4 mb-12 text-center">
        <h2 class="text-white text-4xl font-bold">Storytelling Visuals</h2>
      </div>
      <div v-if="viewport.isLessThan('tablet')" class="mx-auto mx-4 my-8">
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=WhatsApp_Video_2025-03-03_at_3.29.06_PM_i9fqii&cloud_name=dkgpny3ca&profile=cld-default"
          width="640"
          height="360"
          style="height: auto; width: 100%; aspect-ratio: 640 / 360"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
      <div
        class="grid items-center justify-center lg:grid-cols-3 gap-8 my-4"
        id="image-gallery"
      >
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
              <div
                class="absolute bottom-0 p-5 opacity-100 transition-all duration-700 ease-in-out"
              >
                <h6 class="text-white text-3xl font-semibold my-2">
                  {{ item.title }}
                </h6>
                <p class="text-white text-sm mb-4">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxActive" class="overlay" @click="closeLightbox">
        <!-- Embed YouTube Video or Image -->
        <div v-if="items[activeIndex].video" class="video-container">
          <iframe
            :src="`https://www.youtube.com/embed/${items[activeIndex].video}?autoplay=1&rel=0`"
            frameborder="0"
            allowfullscreen
            class="overlay-video"
          ></iframe>
        </div>
        <div v-else>
          <NuxtImg
            provider="cloudinary"
            :src="items[activeIndex].image"
            alt="Gallery Image"
            class="overlay-img"
          />
        </div>

        <button name="Previous Button" id="prevButton" @click.stop="prevImage">&#10094;</button>
        <button name="Next Button" id="nextButton" @click.stop="nextImage">&#10095;</button>
        <button name="Exit Button" id="exitButton" @click.stop="closeLightbox">&times;</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const viewport = useViewport();

const items = ref([
  {
    title: "We are a luxury brand strategy consulting firm",
    description:
      "Where integrity is the ink to our pen. I am a brand strategy consultant with a strong foundation in brand messaging.",
    image:
      "https://res.cloudinary.com/dkgpny3ca/image/upload/v1741011885/whatisuptwo_vqk6n2.webp",
    video: "02MLeFAXzwg", // No video for this item
  },
  {
    title: "Professional Keynote Speaker | Performer",
    description:
      "Over the past two decades, I have traveled across the United States, performing spoken word poetry and delivering keynote speeches.",
    image:
      "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740964634/BBB_Proof_xo6cfz.webp",
    video: "I3YGyMYLpUM", // YouTube video ID for this item
  },
  {
    title: "Crafting stories through the art of music composition",
    description:
      "Over the past 15 years, I have released an award-winning poetry album.",
    image: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1741011885/storytelling_bxbuab.webp",
    video: "rjhVBor_gm8", // YouTube video ID for this item
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
  activeIndex.value =
    (activeIndex.value - 1 + items.value.length) % items.value.length;
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
  opacity: 0; /* Hidden by default */
  transition: opacity 0.6s ease-in-out;
}

/* Make overlay visible on hover for large screens */
@media (min-width: 768px) {
  .image:hover .img-overlay {
    opacity: 1; /* Visible on hover */
  }
}

/* Ensure overlay is always visible on mobile */
@media (max-width: 768px) {
  .img-overlay {
    opacity: 1; /* Always visible on mobile */
  }
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

.overlay-img,
.overlay-video {
  max-width: 100%;
  height: 500px;
  width: 500px;
  object-fit: contain;
}

/* Responsive adjustments for overlay */
@media screen and (min-width: 768px) {
  .overlay-img,
  .overlay-video {
    max-width: 70%; /* Slightly smaller on larger screens */
  }
}

@media screen and (min-width: 1200px) {
  .overlay-img,
  .overlay-video {
    max-width: 60%; /* A bit smaller on large screens */
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
