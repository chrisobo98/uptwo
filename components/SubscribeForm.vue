<template>
  <section class="py-8 bg-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class=" rounded-2xl p-6 lg:p-10">
        <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div class="w-full mx-auto lg:w-1/2">
            <h2
              v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
              class="font-manrope text-3xl font-bold text-white leading-[2.5rem] mb-5 text-center lg:text-left"
            >
              Subscribe to Our Newsletter
            </h2>
            <p
              v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
              class="text-gray-400 leading-6 mb-6 text-center lg:text-left"
            >
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free.
            </p>
            <ul
              class="grid gap-4 mb-6 lg:mb-12"
              v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
            >
              <li class="flex items-center gap-3 text-yellow-600 justify-center lg:justify-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="22" height="22" rx="11" fill="#c98a02"></rect>
                  <path
                    d="M6.33203 10.9974L8.95454 13.623C9.28777 13.9566 9.45438 14.1234 9.66153 14.1235C9.86868 14.1236 10.0354 13.9569 10.369 13.6236L16.332 7.66406"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                24/7 Chat Support
              </li>
              <li class="flex items-center gap-3 text-yellow-600 justify-center lg:justify-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="22" height="22" rx="11" fill="#c98a02"></rect>
                  <path
                    d="M6.33203 10.9974L8.95454 13.623C9.28777 13.9566 9.45438 14.1234 9.66153 14.1235C9.86868 14.1236 10.0354 13.9569 10.369 13.6236L16.332 7.66406"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                Access to Our Specialist Library
              </li>
            </ul>
            <div class="flex flex-col gap-4 md:flex-row lg:justify-start justify-center">
              <input
              v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"

                type="text"
                v-model="email"
                name="email"
                class="py-2 px-4 h-12 w-full md:max-w-sm border border-gray-300 bg-gray-500 shadow-sm rounded-full text-base text-white focus:outline-none placeholder:text-gray-300"
                placeholder="Your email address..."
              />
              <button
              v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"

                @click="subscribe"
                class="h-12 py-2 px-6 bg-yellow-600 shadow-sm rounded-full text-white font-semibold hover:bg-yellow-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

const subscribe = () => {
  if (email.value) {
    alert(`Subscribed with: ${email.value}`);
    email.value = "";
  }
};
</script>

<style>
/* Optional: Add custom styles if needed */
</style>