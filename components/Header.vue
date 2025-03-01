<template>
  <header class="fixed top-0 left-0 w-full bg-black shadow-md z-50">
    <nav class="container mx-auto flex justify-between items-center p-6 my-4">
      <!-- Logo and "upTwo" text -->
      <div class="flex items-center">
        <NuxtLink
          v-gsap.magnetic.stronger
          to="/"
          class="text-xl font-bold text-white relative overflow-hidden"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <h1 class="inline-block transition-transform duration-500 ease-in-out" :class="{ '-translate-y-full': isHovered }">
            upTwo
          </h1>
          <span class="absolute top-full left-0 inline-block transition-transform duration-500 ease-in-out" :class="{ '-translate-y-full': isHovered }">
            Home
          </span>
        </NuxtLink>
      </div>

      <!-- Centered Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <img v-gsap.magnetic class="h-20 w-20" src="assets/css/uptwologo.png" />
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex space-x-6">
        <li><NuxtLink to="/about" class="hover:text-yellow-500 text-gray-100">About</NuxtLink></li>
        <li><NuxtLink to="/services" class="hover:text-yellow-500 text-gray-100">Services</NuxtLink></li>
        <li><NuxtLink to="/portfolio" class="hover:text-yellow-500 text-gray-100">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/books" class="hover:text-yellow-500 text-gray-100">Books</NuxtLink></li>
        <li><NuxtLink to="/blog" class="hover:text-yellow-500 text-gray-100">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-yellow-500 text-gray-100">Contact</NuxtLink></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button v-if="!menuOpen" @click="toggleMenu" class="lg:hidden focus:outline-none z-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <!-- Full-Screen Mobile Menu -->
    <transition name="fade">
      <div 
        v-if="menuOpen" 
        class="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-end items-start p-8 z-40"
      >
        <!-- Close Button (Replaces Hamburger) -->
        <button @click="closeMenu" class="absolute top-6 right-6 text-white text-4xl focus:outline-none">
          &times;
        </button>
        
        <!-- Left-Aligned Menu Items -->
        <ul class="space-y-6 text-left">
          <transition-group name="slide">
            <li v-for="(item, index) in menuItems" :key="index" class="text-4xl text-white font-bold">
              <NuxtLink :to="item.link" @click.stop="closeMenu" class="hover:text-yellow-500 transition-colors duration-300">
                {{ item.text }}
              </NuxtLink>
            </li>
          </transition-group>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

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
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style>
/* Ensure content doesn't get hidden under navbar */
body { padding-top: 64px; }

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
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
