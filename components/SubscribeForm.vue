<template>
  <section class="py-12 bg-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl p-7 xl:p-14">
        <div
          class="flex flex-col items-center justify-between gap-8 lg:gap-16 lg:flex-row"
        >
          <div class="w-full lg:w-1/2">
            <div class="flex justify-center lg:block">
              <img
                src="https://pagedone.io/asset/uploads/1696242432.png"
                alt="CTA tailwind section"
                class="object-cover"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <h2 v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
              class="font-manrope text-4xl font-bold text-gray-900 leading-[3.5rem] mb-7 text-center lg:text-left"
            >
              Subscribe to newsletter
            </h2>
            <p v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }" class="text-gray-500 leading-6 mb-8 text-center lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <ul class="grid gap-5 mb-8 lg:mb-24" v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }">
              <li
                class="flex items-center gap-3 text-yellow-600 justify-center lg:justify-start"
              >
                <svg
                  width="22"
                  height="22"
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
                24*7 chat support of any time
              </li>
              <li
                class="flex items-center gap-3 text-yellow-600 justify-center lg:justify-start"
              >
                <svg
                  width="22"
                  height="22"
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
                Library of our specialist team
              </li>
            </ul>
            <div
              class="flex items-center flex-col gap-4 md:flex-row lg:justify-start justify-center"
            >
              <input
                type="text"
                name="email"
                class="py-2.5 px-5 h-14 w-full md:max-w-sm border border-gray-300 bg-white shadow-sm rounded-full text-lg text-gray-900 focus:outline-none placeholder:text-gray-300"
                placeholder="Your mail id.."
              />
              <button
                class="h-14 py-3.5 px-8 bg-yellow-600 shadow-sm rounded-full text-white font-semibold hover:bg-yellow-700"
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
