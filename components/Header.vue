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
      <div v-gsap.magnetic class="absolute left-1/2 transform -translate-x-1/2">
        <NuxtLink to="/" class="flex items-center">
          <NuxtImg
            provider="cloudinary"
            format="auto"
            quality="80"
            class="transition-all duration-300"
            width="80"
            height="80"
            :class="{ 'h-14 w-14': isScrolled, 'h-16 w-16': !isScrolled }"
            src="v1740940906/uptwo_n62bjt.webp"
            alt="upTwo Top Header Logo"
            preload
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
        name="Mobile Header Menu"
        v-if="!menuOpen"
        @click="toggleMenu"
        class="lg:hidden focus:outline-none z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="white"
        >
          <path
            d="M5 8H13.75M5 12H19M10.25 16L19 16"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
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
          name="Close Header Menu"
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
          <div class="grid grid-cols-2 text-white uppercase">
            <!-- Social Media Buttons -->
            <div class="col-span-2">
              <h3 class="text-xl font-bold">Follow Us</h3>
              <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <!-- Facebook -->
                <NuxtLink
                  to="https://www.facebook.com/uptwoink"
                  target="_blank"
                >
                  <Icon
                    name="simple-icons:facebook"
                    size="2em"
                    style="color: white"
                  />
                </NuxtLink>
                <NuxtLink
                  to="https://www.instagram.com/beuptwo"
                  target="_blank"
                >
                  <!-- Instagram -->
                  <Icon
                    name="simple-icons:instagram"
                    size="2em"
                    style="color: white"
                  />
                </NuxtLink>

                <NuxtLink
                  to="https://www.youtube.com/@uptwoink"
                  target="_blank"
                >
                  <!-- youtube -->
                  <Icon
                    name="simple-icons:youtube"
                    size="2em"
                    style="color: white"
                  />
                </NuxtLink>

                <NuxtLink
                  to="https://www.linkedin.com/in/t-w-alexander-mba-24969a122"
                >
                  <!-- Linkedin -->
                  <Icon
                    name="simple-icons:linkedin"
                    size="2em"
                    style="color: white"
                  />
                </NuxtLink>

                <NuxtLink
                  to="https://maps.app.goo.gl/cJdcHPF41DFV8k7F8"
                  target="_blank"
                >
                  <!-- Google -->
                  <Icon
                    name="simple-icons:google"
                    size="2em"
                    style="color: white"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const isHovered = ref(false);
const isScrolled = ref(false);

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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Ensure scrolling is re-enabled when component unmounts
watch(menuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden"; // Disable scroll when menu is open
  } else {
    document.body.style.overflow = ""; // Enable scroll when menu is closed
  }
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
  padding-top: 0px; /* Removed padding to avoid bouncing effect */
  overflow: hidden; /* Added overflow hidden globally when mobile menu is open */
}

/* Mobile Menu Fix */
.fixed.inset-0.bg-yellow-600 {
  height: 100vh; /* Ensure full viewport height for mobile menu */
  top: 0; /* Ensure menu is at the top */
  left: 0;
  right: 0;
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
