<template>
  <header class="fixed top-0 left-0 w-full bg-black shadow-md z-50">
    <nav class="container mx-auto flex justify-between items-center p-6 my-4">
      <!-- Left-aligned Logo & Title -->
      <div class="flex items-center">
        <NuxtLink
          v-gsap.magnetic.stronger
          to="/"
          class="text-xl font-bold text-white relative overflow-hidden"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <h1
            class="inline-block transition-transform duration-500 ease-in-out"
            :class="{ '-translate-y-full': isHovered }"
          >
            upTwo
          </h1>
          <span
            class="absolute top-full left-0 inline-block transition-transform duration-500 ease-in-out"
            :class="{ '-translate-y-full': isHovered }"
          >
            Home
          </span>
        </NuxtLink>
      </div>

      <!-- Centered Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <NuxtLink to="/" class="flex items-center">
          <NuxtImg
            provider="cloudinary"
            width="100%"
            height="100%"
            v-gsap.magnetic
            class="h-20 w-20"
            src="v1740940906/uptwo_n62bjt.webp"
            alt="upTwo Top Header Logo"
          />
        </NuxtLink>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex space-x-6">
        <li v-for="(item, index) in menuItems" :key="index">
          <NuxtLink :to="item.link" class="hover:text-yellow-500 text-gray-100">
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        v-if="!menuOpen"
        @click="toggleMenu"
        class="lg:hidden focus:outline-none z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="white"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>

    <!-- Full-Screen Mobile Menu -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-yellow-600 flex flex-col justify-start p-8 z-40 overflow-hidden"
      >
        <!-- Close Button -->
        <button
          @click="closeMenu"
          class="absolute top-6 right-6 text-white text-4xl focus:outline-none"
        >
          &times;
        </button>

        <!-- Menu Items -->
        <ul class="space-y-6 text-left mt-10">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="text-4xl font-black text-white uppercase montserrat-black"
          >
            <NuxtLink
              :to="item.link"
              @click.stop="closeMenu"
              class="hover:text-yellow-300 transition-colors duration-300"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>

        <div class="w-full bg-black rounded-3xl px-8 py-8 mt-8">
        <!-- Two-Column Footer Inside Menu -->
        <div class="grid grid-cols-2 gap-6 text-white uppercase">
          <!-- Contact Section -->
          <div>
            <h3 class="text-2xl font-bold">Contact</h3>
            <p class="text-white mt-2">info@uptwo.com</p>
            <p class="text-white">+1 (555) 123-4567</p>
          </div>

          <!-- Social Media Buttons -->
          <div>
            <h3 class="text-2xl font-bold">Follow Us</h3>
            <div class="flex space-x-4 mt-2">
              <NuxtLink to="#" class="text-xl">🔵</NuxtLink> <!-- Replace with real icons -->
              <NuxtLink to="#" class="text-xl">📷</NuxtLink>
              <NuxtLink to="#" class="text-xl">🐦</NuxtLink>
              <NuxtLink to="#" class="text-xl">🔗</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";

const menuOpen = ref(false);
const isHovered = ref(false);

const menuItems = ref([
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Portfolio", link: "/portfolio" },
  { text: "Books", link: "/books" },
  { text: "Blog", link: "/blog" },
  { text: "Contact", link: "/contact" },
]);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.classList.toggle("menu-open", menuOpen.value);
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.classList.remove("menu-open");
};

// Ensure scrolling is re-enabled when component unmounts
watch(menuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "";
});
</script>

<style>
/* Ensure Montserrat Black is used */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");

.montserrat-black {
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
}

/* Prevent scrolling when mobile menu is open */
body {
  padding-top: 64px;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide animation for menu items */
.slide-enter-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
