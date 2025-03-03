<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="w-full flex-col justify-start items-start gap-12 inline-flex md:h-screen"
      >
        <!-- Heading -->
        <div
          v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
          class="w-full flex-col justify-start items-center gap-3 flex"
        >
          <h2 class="text-center text-white text-6xl font-bold leading-normal">
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
              <NuxtImg
              provider="cloudinary"
                v-gsap.visible.from="{ opacity: 0, x: -150, stagger: 0.4 }"
                v-gsap.magnetic.weak
                ref="tabImage"
                class="rounded-2xl h-auto w-full object-right-top md:object-center object-cover"
                :src="activeTabData.src"
                alt="About Us image"
              />
              <!-- Text with GSAP Animation -->
              <div
                ref="tabText"
                class="w-full pt-2.5 flex-col justify-start lg:items-start items-center lg:gap-10 gap-6 inline-flex"
              >
                <div
                  v-gsap.visible.from="{ opacity: 0, x: 150, stagger: 0.8 }"
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
    <div class="h-auto">
      <StatsSection
        :stats="stats"
        imageSrc="v1740941147/data_ezpzcy.png"
        imageAlt="About Us image"
      />
      <div
        class="w-8/12 mx-auto justify-center items-center lg:gap-8 gap-6 grid md:grid-cols-3 grid-cols-1 mt-20"
      >
        <InfoCard
          v-for="card in infoCards"
          :key="card.title"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
    <SubscribeForm />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import gsap from "gsap";
import InfoCard from "@/components/about/InfoCard.vue";
import StatsSection from "@/components/about/StatsSection.vue";

useHead({
  title: "About upTWO | Luxury Brand Strategy in Central Florida",
  meta: [
    {
      name: "description",
      content:
        "upTWO is a premier brand strategy consultant in Central Florida, specializing in hospitality, small businesses, and creative industries. Elevate your brand with strategic clarity and compelling messaging.",
    },
    {
      property: "og:title",
      content: "About upTWO | Quality Simplified Branding & Strategy",
    },
    {
      property: "og:description",
      content:
        "Discover how upTWO empowers purpose-driven businesses with expert brand strategy, messaging, and creative solutions. Transform your brand presence today.",
    },
  ],
});

// Stats Data
const stats = [
  {
    value: "20+",
    label: "Combined Years of Experience",
    class: "sm:pr-5 border-gray-200",
  },
  {
    value: "57",
    label: "Projects Accomplished",
    class: "md:pr-5 border-gray-200",
  },
  {
    value: "1146",
    label: "Cups of Coffee",
    class: "sm:pr-5 border-gray-200",
  },
  {
    value: "120%",
    label: "Effort",
  },
];

const activeTab = ref("tabs-with-pill-1");

const tabs = [
  {
    id: "tabs-with-pill-1",
    label: "Our Story",
    src: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740941147/story_gytc2v.webp",
    description:
      'We empower purpose-driven businesses in the hospitality, small business, and creative industries by crafting luxury brand strategies that elevate their impact — adding value to those who bring value to others. Guided by our "Quality Simplified" approach, we blend strategic creativity with hospitality, creating brand experiences that inspire, connect, and make people smile through the power of love and purpose.',
  },
  {
    id: "tabs-with-pill-2",
    label: "Our Mission",
    src: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740941147/mission_xsigit.webp",
    description:
      'To be the leading luxury brand strategy partner for innovative businesses and programs in hospitality, small business, and the arts — where "Quality Simplified" fuels bold ideas, clear messaging, and transformative impact. We envision a future where brands drive creativity, education, and change and build heartfelt connections and memorable experiences.',
  },
  {
    id: "tabs-with-pill-3",
    label: "Our Vision",
    src: "https://res.cloudinary.com/dkgpny3ca/image/upload/v1740941148/vision_ql0cjj.webp",
    description:
      "Our purpose is to add value to those who bring value to others — driving the drivers of tomorrow. With a foundation of love and hospitality, we simplify complexity, empower impactful voices, and create brand experiences that spark innovation, inspire smiles, and elevate businesses in hospitality, small businesses, and the creative arts.",
  },
];

// Info Cards Data
const infoCards = [
  {
    icon: "humbleicons:align-text-center",
    title: "Our Story",
    description:
      "We empower purpose-driven businesses in the hospitality, small business, and creative industries",
  },
  {
    icon: "humbleicons:eye",
    title: "Our Vision",
    description:
      "To be the leading luxury brand strategy partner for innovative businesses and programs in hospitality, small business, and the arts",
  },
  {
    icon: "humbleicons:certificate",
    title: "Our Purpose",
    description:
      "Our purpose is to add value to those who bring value to others",
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
