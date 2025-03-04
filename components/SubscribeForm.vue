<template>
  <section class="py-8 bg-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-2xl p-6 lg:p-10">
        <div
          class="flex flex-col items-center justify-between gap-6 lg:flex-row"
        >
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
            <div
              class="flex flex-col gap-4 md:flex-row lg:justify-start justify-center"
            >
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
    alert("Email Subscriptions Currently Unavailable");
    email.value = "";
  }
};
</script>

<style>
/* Optional: Add custom styles if needed */
</style>
