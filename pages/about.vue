<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="w-full flex-col justify-start items-start gap-12 inline-flex">
        <!-- Heading -->
        <div
          v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
          class="w-full flex-col justify-start items-center gap-3 flex"
        >
          <h2 class="text-center text-white text-4xl font-bold leading-normal">
            About <span class="text-yellow-600"> Us </span>
          </h2>
          <p
            class="lg:max-w-3xl w-full text-center text-gray-500 text-lg leading-relaxed"
          >
            Your trusted partner in the digital realm, we specialize in creating
            products that not only look stunning but also deliver seamless user
            experiences.
          </p>
        </div>

        <!-- Tabs -->
        <div class="tabs">
          <div class="flex w-full items-center justify-center overflow-auto">
            <ul
              class="w-full flex sm:gap-8 gap-4 sm:flex-row flex-col items-center justify-center transition-all duration-700 ease-in-out lg:mb-0 mb-3"
            >
              <li v-for="tab in tabs" :key="tab.id">
                <button
                  @click="changeTab(tab.id)"
                  :class="[
                    'group w-full flex items-center justify-center pb-2.5 border-b border-transparent text-gray-400 text-base font-medium leading-relaxed transition-all duration-700 ease-in-out hover:text-yellow-600 hover:border-yellow-600',
                    { 'border-yellow-600 text-yellow-600': isActive(tab.id) },
                  ]"
                >
                  {{ tab.label }}
                </button>
              </li>
            </ul>
          </div>

          <!-- Tab Content (Only Shows the Active Tab's Data) -->
          <div class="lg:pt-10 pt-6" v-if="activeTabData">
            <div
              class="w-full justify-start items-center lg:gap-9 gap-7 flex lg:flex-row flex-col"
            >
              <!-- Image with GSAP Animation -->
              <img
                v-gsap.magnetic.weak
                ref="tabImage"
                class="rounded-2xl h-80 w-full object-right-top md:object-center md:h-auto md:w-auto object-cover"
                :src="activeTabData.src"
                alt="About Us image"
              />
              <!-- Text with GSAP Animation -->
              <div
                ref="tabText"
                class="w-full pt-2.5 flex-col justify-start lg:items-start items-center lg:gap-10 gap-6 inline-flex"
              >
                <div
                  class="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                >
                  <p
                    class="text-white md:text-3xl leading-relaxed lg:text-start text-center"
                  >
                    {{ activeTabData.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex"
      >
        <div
          class="w-full justify-start items-center lg:gap-8 gap-6 grid lg:grid-cols-2 grid-cols-1"
        >
          <div
            class="w-full flex-col justify-start items-start lg:gap-10 gap-6 inline-flex mb-12 md:mb-0"
          >
            <div
              v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
              class="w-full justify-start items-center gap-5 grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
            >
              <div
                class="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex sm:pr-5 border-gray-200"
              >
                <h4 class="text-yellow-600 text-xl font-bold leading-8">20+</h4>
                <h5
                  class="text-gray-500 text-lg font-normal leading-relaxed break-all"
                >
                  Combined Years of Experience
                </h5>
              </div>
              <div
                class="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex md:pr-5 border-gray-200"
              >
                <h4 class="text-yellow-600 text-xl font-bold leading-8">57</h4>
                <h5 class="text-gray-500 text-lg font-normal leading-relaxed">
                  Projects Accomplished
                </h5>
              </div>
              <div
                class="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex sm:pr-5 border-gray-200"
              >
                <h4 class="text-yellow-600 text-xl font-bold leading-8">
                  1146
                </h4>
                <h5 class="text-gray-500 text-lg font-normal leading-relaxed">
                  Cups of Coffee
                </h5>
              </div>
              <div
                class="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex"
              >
                <h4 class="text-yellow-600 text-xl font-bold leading-8">
                  120%
                </h4>
                <h5 class="text-gray-500 text-lg font-normal leading-relaxed">
                  Effort
                </h5>
              </div>
            </div>
          </div>
          <img
            v-gsap.magnetic
            class="w-11/12 md:w-full mx-auto lg:h-full h-auto rounded-xl object-cover"
            src="https://pagedone.io/asset/uploads/1724388858.png"
            alt="About Us image"
          />
        </div>
        <div
          class="w-full justify-start items-center lg:gap-8 gap-6 grid md:grid-cols-3 grid-cols-1 mt-20"
        >
          <!-- story -->
          <div
            class="lg:p-6 p-4 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
          >
            <div
              v-gsap.magnetic.weak
              class="flex-col justify-start items-start gap-2 flex"
            >
              <div class="justify-start items-center gap-1.5 inline-flex">
                <div
                  class="w-6 h-6 px-1 py-[3px] justify-center items-center flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                  >
                    <path
                      d="M17 11.35C17 16.3206 13.4183 19 9 19C4.58172 19 1 16.2 1 11.35C1 6.5 7.5 7 9 1C14 3 17 6.37944 17 11.35Z"
                      stroke="white"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.30232 10C9.86449 13 10.6357 10 10.3023 8C17.1026 12.4 12.3633 19 9.30232 19C2.47945 19 5.46375 10 7.30232 10Z"
                      stroke="white"
                      stroke-width="1.3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h6 class="text-white text-base font-medium leading-relaxed">
                  Our Story
                </h6>
              </div>
              <p class="text-gray-500 text-xs font-normal leading-normal">
                We empower purpose-driven businesses in the hospitality, small
                business, and creative industries
              </p>
            </div>
          </div>
          <!-- Vision -->
          <div
            class="lg:p-6 p-4 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
          >
            <div
              v-gsap.magnetic.weak
              class="flex-col justify-start items-start gap-2 flex"
            >
              <div class="justify-start items-center gap-1.5 inline-flex">
                <div class="w-6 h-6 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2.45399 13.8008C1.84607 12.6796 1.84607 11.3204 2.45399 10.1992C4.29474 6.80404 7.87917 4.5 11.9995 4.5C16.1197 4.5 19.7042 6.80404 21.5449 10.1992C22.1528 11.3204 22.1528 12.6796 21.5449 13.8008C19.7042 17.196 16.1197 19.5 11.9994 19.5C7.87917 19.5 4.29474 17.196 2.45399 13.8008Z"
                      stroke="white"
                      stroke-width="1.6"
                    />
                    <path
                      d="M15.0121 11.9551C15.0121 13.6119 13.669 14.9551 12.0121 14.9551C10.3553 14.9551 9.01215 13.6119 9.01215 11.9551C9.01215 10.2982 10.3553 8.95508 12.0121 8.95508C13.669 8.95508 15.0121 10.2982 15.0121 11.9551Z"
                      stroke="black"
                      stroke-width="1.6"
                    />
                  </svg>
                </div>
                <h6 class="text-white text-base font-medium leading-relaxed">
                  Our Vision
                </h6>
              </div>
              <p class="text-gray-500 text-xs font-normal leading-normal">
                To be the leading luxury brand strategy partner for innovative
                businesses and programs in hospitality, small business, and the
                arts
              </p>
            </div>
          </div>
          <!-- Purpose -->
          <div
            class="lg:p-6 p-4 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
          >
            <div
              v-gsap.magnetic.weak
              class="flex-col justify-start items-start gap-2 flex"
            >
              <div class="justify-start items-center gap-1.5 inline-flex">
                <div
                  class="w-6 h-6 px-0.5 py-[3px] justify-center items-center flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M7 18V13M7 18C7 18.5523 7.44772 19 8 19H14C14.5523 19 15 18.5523 15 18M7 18H2C1.44772 18 1 17.5523 1 17V13C1 11.3431 2.34315 10 4 10C5.65685 10 7 11.3431 7 13M15 18V13M15 18H20C20.5523 18 21 17.5523 21 17V13C21 11.3431 19.6569 10 18 10C16.3431 10 15 11.3431 15 13M15 13C15 11.3431 13.6569 10 12 10H10C8.34315 10 7 11.3431 7 13M14 4C14 5.65685 12.6569 7 11 7C9.34315 7 8 5.65685 8 4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4ZM5.5 5.5C5.5 6.32843 4.82843 7 4 7C3.17157 7 2.5 6.32843 2.5 5.5C2.5 4.67157 3.17157 4 4 4C4.82843 4 5.5 4.67157 5.5 5.5ZM19.5 5.5C19.5 6.32843 18.8284 7 18 7C17.1716 7 16.5 6.32843 16.5 5.5C16.5 4.67157 17.1716 4 18 4C18.8284 4 19.5 4.67157 19.5 5.5Z"
                      stroke="white"
                      stroke-width="1.3"
                    />
                  </svg>
                </div>
                <h6 class="text-white text-base font-medium leading-relaxed">
                  Our Purpose
                </h6>
              </div>
              <p class="text-gray-500 text-xs font-normal leading-normal">
                Our purpose is to add value to those who bring value to others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  <SubscribeForm />
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import gsap from "gsap";

const activeTab = ref("tabs-with-pill-1");

const tabs = [
  {
    id: "tabs-with-pill-1",
    label: "Our Story",
    src: "//img1.wsimg.com/isteam/stock/uV8DYPKZyNTe2d5ox/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true",
    description:
      'We empower purpose-driven businesses in the hospitality, small business, and creative industries by crafting luxury brand strategies that elevate their impact — adding value to those who bring value to others. Guided by our "Quality Simplified" approach, we blend strategic creativity with hospitality, creating brand experiences that inspire, connect, and make people smile through the power of love and purpose.',
  },
  {
    id: "tabs-with-pill-2",
    label: "Our Mission",
    src: "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Glassses%20lookaway.JPG/:/cr=t:0%25,l:8.25%25,w:66.68%25,h:100%25/rs=w:365,h:365,cg:true",
    description:
      'To be the leading luxury brand strategy partner for innovative businesses and programs in hospitality, small business, and the arts — where "Quality Simplified" fuels bold ideas, clear messaging, and transformative impact. We envision a future where brands drive creativity, education, and change and build heartfelt connections and memorable experiences.',
  },
  {
    id: "tabs-with-pill-3",
    label: "Our Vision",
    src: "//img1.wsimg.com/isteam/stock/u73W5ZPJDGUN0VeWl/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:365,h:365,cg:true",
    description:
      "Our purpose is to add value to those who bring value to others — driving the drivers of tomorrow. With a foundation of love and hospitality, we simplify complexity, empower impactful voices, and create brand experiences that spark innovation, inspire smiles, and elevate businesses in hospitality, small businesses, and the creative arts.",
  },
];

const isActive = (tabId: string) => activeTab.value === tabId;

// Get the currently active tab's data
const activeTabData = computed(() =>
  tabs.find((tab) => tab.id === activeTab.value)
);

// Refs for GSAP animations
const tabImage = ref(null);
const tabText = ref(null);

// Function to change tabs with animations
const changeTab = (tabId: string) => {
  // Animate out the current content
  gsap.to([tabImage.value, tabText.value], {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      // Update the active tab
      activeTab.value = tabId;

      // Animate in the new content
      gsap.fromTo(
        [tabImage.value, tabText.value],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    },
  });
};

// Watch for tab changes and animate content
watch(activeTab, () => {
  if (tabImage.value && tabText.value) {
    gsap.fromTo(
      [tabImage.value, tabText.value],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }
});
</script>

<style>
/* Optional: Add custom styles if needed */
</style>
