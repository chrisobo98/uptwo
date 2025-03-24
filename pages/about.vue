<template>
  <section class="py-24 mt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="w-full flex-col justify-start items-start gap-12 inline-flex">
        <!-- Heading -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-20">
          <div
            class="justify-start items-center gap-9 flex xl:flex-row flex-col"
          >
            <div
              class="max-w-[620px] mx-auto w-full lg:justify-start justify-center items-center gap-5 grid grid-cols-2"
            >
              <NuxtImg
                v-gsap.from="{ opacity: 0, x: -150, stagger: 0 }"
                provider="cloudinary"
                class="w-full h-full rounded-full object-cover"
                src="v1740965292/Main_Promo_2_z5eteh_q8ed9x.webp"
                alt="About Us image"
              />
              <div class="w-full flex-col justify-start items-start gap-5 flex">
                <NuxtImg
                  v-gsap.from="{ opacity: 0, y: -150, delay: 0.2 }"
                  class="lg:w-full w-auto h-auto object-cover rounded-tl-full rounded-tr-full rounded-bl-3xl rounded-br-full"
                  src="v1740965363/stellar_bwri1p_lobtze.webp"
                  alt="About Us image"
                />
                <NuxtImg
                  v-gsap.from="{ opacity: 0, y: 150, delay: 0.4 }"
                  class="lg:w-full w-auto h-auto object-cover rounded-tl-3xl rounded-tr-full rounded-bl-full rounded-br-full"
                  src="v1740941147/data_ezpzcy.png"
                  alt="About Us image"
                />
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-10 inline-flex">
              <div class="w-full flex-col justify-start items-start gap-8 flex">
                <div
                  class="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                >
                  <div
                    class="flex-col justify-start lg:items-start items-center gap-1.5 flex"
                    v-gsap.from="{ opacity: 0, y: -150, stagger: 0 }"
                  >
                    <h5 class="text-5xl md:text-6xl text-center">
                      About <span class="text-yellow-600">Me</span>
                    </h5>
                  </div>
                  <p
                    class="lg:max-w-[560px] w-full text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center"
                    v-gsap.from="{ opacity: 0, y: 150, delay: 0.5 }"
                  >
                    I’m T.W. Alexander, a visionary brand strategist, author,
                    and consultant with over 20 years of experience in
                    transforming brands and crafting compelling narratives that
                    drive impact. My journey began as a storyteller at the age
                    of five, when I started writing poetry that evolved into
                    powerful brand messages, chart-topping music, and
                    captivating novels.
                    <br />
                    <br />
                    Equipped with an MBA and a proven track record of helping
                    companies save and generate millions, I bridge the world of
                    corporate strategy and creative expression.
                    <br />

                    <br />
                    Today, I leverage that expertise to empower businesses that
                    are driving change, helping them craft stories that resonate
                    deeply with their target audiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="tabs py-20">
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
                class="rounded-2xl h-80 w-80 object-right-top md:object-center object-cover"
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
    <div class="h-screen py-20">
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
    label: "Our Mission",
    src: "v1740965363/story_gytc2v_yjfvgq.webp",
    description:
      "At upTWo Branding Company, we believe that words don’t just tell stories; they craft visions. We transform complex ideas into captivating narratives that enable your ideal customers to see, feel, and choose your brand as if they were selecting the perfect book from a crowded shelf. Our approach combines strategy, storytelling, and operational excellence to craft brand identities that endure, ensuring your message not only resonates but also inspires action.",
  },
  {
    id: "tabs-with-pill-2",
    label: "Why We’re Different",
    src: "v1740965292/mission_xsigit_i4oqxw.webp",
    description:
      "We prioritize our clients by aligning every strategy with their core mission, ensuring that their brand narrative reflects their values, goals, and impact. Through our 30-day Brand Identity Transformation Program, we don’t just refine messaging; we build ecosystems that enhance operational turnover, improve customer retention, and position businesses for long-term success. From stunning visual branding to SEO optimization and high-end media content, we elevate every touchpoint, ensuring that your story echoes beyond the first encounter.",
  },
  {
    id: "tabs-with-pill-3",
    label: "Our Promise",
    src: "v1740965363/vision_ql0cjj_bxqq6m.webp",
    description:
      "We’re not just consultants; we’re architects of influence. Our mission is to add value to those who bring value to others, driving measurable results by amplifying the voices of brands that are making a difference.",
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
