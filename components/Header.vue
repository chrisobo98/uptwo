<template>
  <header class="fixed top-0 left-0 w-full bg-black shadow-md z-50">
    <nav class="container mx-auto flex justify-between items-center p-12">
      <!-- Logo and "upTwo" text -->
      <div class="flex items-center">
        <NuxtLink
          v-gsap.magnetic.stronger
          to="/"
          class="text-xl font-bold text-white relative overflow-hidden"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <span class="inline-block transition-transform duration-500 ease-in-out" :class="{ '-translate-y-full': isHovered }">
            upTwo
          </span>
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
      <ul class="hidden md:flex space-x-6">
        <li><NuxtLink to="/about" class="hover:text-yellow-500 text-gray-400">About</NuxtLink></li>
        <li><NuxtLink to="/services" class="hover:text-yellow-500 text-gray-400">Services</NuxtLink></li>
        <li><NuxtLink to="/portfolio" class="hover:text-yellow-500 text-gray-400">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/books" class="hover:text-yellow-500 text-gray-400">Books</NuxtLink></li>
        <li><NuxtLink to="/blog" class="hover:text-yellow-500 text-gray-400">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-yellow-500 text-gray-400">Contact</NuxtLink></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition>
      <ul v-if="menuOpen" class="md:hidden bg-white shadow-md p-4 space-y-4">
        <li><NuxtLink to="/about" class="hover:text-yellow-500 text-gray-400">About</NuxtLink></li>
        <li><NuxtLink to="/services" class="hover:text-yellow-500 text-gray-400">Services</NuxtLink></li>
        <li><NuxtLink to="/portfolio" class="hover:text-yellow-500 text-gray-400">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/books" class="hover:text-yellow-500 text-gray-400">Books</NuxtLink></li>
        <li><NuxtLink to="/blog" class="hover:text-yellow-500 text-gray-400">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-yellow-500 text-gray-400">Contact</NuxtLink></li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
const isHovered = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style>
/* Ensure content doesn't get hidden under navbar */
body { padding-top: 64px; }

/* Animation for the hover effect */
.text-xl span {
  display: inline-block;
  transition: transform 0.5s ease-in-out;
}
</style>