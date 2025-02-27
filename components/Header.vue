<template>
    <header class="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <nav class="container mx-auto flex justify-between items-center p-12">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold text-white">UpTwo</NuxtLink>
        
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
          <li><NuxtLink to="/about" class="block">About</NuxtLink></li>
          <li><NuxtLink to="/services" class="block">Services</NuxtLink></li>
          <li><NuxtLink to="/blog" class="block">Blog</NuxtLink></li>
          <li><NuxtLink to="/contact" class="block">Contact</NuxtLink></li>
        </ul>
      </transition>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const menuOpen = ref(false);
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  </script>
  
  <style>
    /* Ensure content doesn't get hidden under navbar */
    body { padding-top: 64px; }
  </style>