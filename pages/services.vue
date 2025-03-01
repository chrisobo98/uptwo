<template>
  <section class="py-24 bg-black">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="text-center mb-10"
      >
        <h2 class="text-5xl md:text-6xl font-bold text-white leading-normal">
          Comprehensive
          <span class="text-yellow-600">Services and Benefits</span>
        </h2>
        <p class="text-lg text-gray-400">
          We pride ourselves on delivering tailored services to meet diverse
          needs, from strategic consulting and creative solutions to robust
          marketing.
        </p>
      </div>

      <!-- Tabs -->
      <div
        v-gsap.visible.from="{ opacity: 0, y: -150, stagger: 2.0 }"
        class="flex justify-center overflow-auto py-8 md:py-0"
      >
        <ul
          class="w-full flex flex-nowrap border-gray-200 p-1 lg:border lg:rounded-full"
        >
          <li v-for="tab in tabs" :key="tab.id" class="w-full px-1">
            <button
              @click="changeTab(tab.id)"
              class="group w-full flex items-center justify-center py-2 px-5 rounded-full text-sm font-medium text-white hover:text-yellow-600 transition-all duration-300 ease-in-out"
              :class="{ 'text-yellow-600 bg-yellow-50': activeTab === tab.id }"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Tab Content -->
      <div class="lg:pt-10 pt-8 min-h-[40rem]">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          v-show="activeTab === tab.id"
          class="grid lg:grid-cols-2 gap-8"
          ref="tabContent"
        >
          <!-- Image with GSAP Animation -->
          <img
            v-gsap.visible.from="{ opacity: 0, y: -200, delay: 0.3 }"
            v-gsap.magneticv-gsap.magnetic.weak
            :src="tab.image"
            alt="Feature image"
            class="mx-auto max-h-[520px] w-full object-cover rounded-3xl"
            ref="tabImage"
          />
          <!-- Content with GSAP Animation -->
          <div class="flex flex-col gap-6 py-6 md:px-12 md:pt-14" ref="tabText">
            <h2
              v-gsap.visible.from="{ opacity: 0, x: -200, delay: 0.5 }"
              class="text-white text-5xl font-semibold"
            >
              {{ tab.heading }}
            </h2>
            <p
              v-gsap.visible.from="{ opacity: 0, x: 200, delay: 0.7 }"
              class="text-gray-400 text-base"
            >
              {{ tab.description }}
            </p>
            <ul class="flex flex-col gap-3">
              <li
                v-for="feature in tab.features"
                :key="feature.title"
                class="flex gap-3 items-center"
              >
                <svg
                  class="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <h6 class="text-white text-sm font-medium">
                    {{ feature.title }}
                  </h6>
                  <p class="text-gray-400 text-sm">{{ feature.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import gsap from "gsap";

const activeTab = ref("brand");

const tabs = ref([
  {
    id: "brand",
    title: "Brand Messaging",
    image:
      "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Brand.jpg",
    heading: "Brand Messaging Service",
    description:
      "Clarify your vision and connect with your audience through powerful brand messaging services. I help businesses craft authentic, compelling messages that reflect their values, resonate with their audience, and differentiate them in the market. Whether you need a captivating tagline, mission statement, or a cohesive brand story, I’ll ensure your messaging aligns with your goals and leaves a lasting impression.",
  },
  {
    id: "website",
    title: "Website Copywriting",
    image:
      "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/SEO.jpg",
    heading: "Website Copywriting",
    description:
      "Bring your online presence to life with professional website building services tailored to your brand. I create user-friendly, visually appealing websites that showcase your unique identity and engage your audience. From design and functionality to SEO optimization, I ensure your website not only looks great but also performs effectively to meet your business goals. Let’s build a site that leaves a lasting impression and drives success.",
    features: [
      {
        title: "Deep Insights",
        description: "Get real-time analytics on user behavior.",
      },
      {
        title: "Predictive Analysis",
        description: "Forecast trends with machine learning.",
      },
      {
        title: "Custom Reports",
        description: "Generate insights tailored to your needs.",
      },
    ],
  },
  {
    id: "retainer",
    title: "Content Strategy",
    image:
      "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Content.jpg",
    heading: "Retainer Content Support",
    description:
      "Stay consistent and keep your audience engaged with retainer content support services. I provide ongoing, high-quality content tailored to your brand’s needs, ensuring your message stays fresh and relevant across all platforms. From blogs and social media posts to newsletters and marketing materials, I deliver dependable content creation and strategy that saves you time and drives results. Let’s keep your brand top of mind with a reliable content partner",
  },
  {
    id: "project",
    title: "Project Management",
    image:
      "https://img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Main%20Promo%202.jpg",
    heading: "Project Management Services",
    description:
      "I offer expert project management services designed to help creatives complete their musical albums, eBooks, novels, and other artistic endeavors with efficiency and precision. With a structured yet flexible approach, I streamline workflows, set clear milestones, and manage timelines to ensure projects are delivered on time and to the highest quality. Leveraging years of experience in coordinating complex creative processes, I provide guidance and support that empowers artists and writers to focus on their craft while achieving their vision.",
    features: [
      {
        title: "Deep Insights",
        description: "Get real-time analytics on user behavior.",
      },
      {
        title: "Predictive Analysis",
        description: "Forecast trends with machine learning.",
      },
    ],
  },
  {
    id: "keynote",
    title: "Keynote Speaker",
    image:
      "	https://img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/BBB%20Proof.jpg",
    heading: "Keynote Speaker",
    description:
      "The 'Build, Brand, Believe' workshop is a fun and educational presentation that focuses on creating an effective brand identity and the power of influence. This TED Talk-like speech lasts 15 to 30 minutes and is filled with real-life success and failure stories, as well as proven processes that have led to my brand's success in various sectors over the past 20 years.",
    features: [
      {
        title: "Deep Insights",
        description: "Get real-time analytics on user behavior.",
      },
      {
        title: "Predictive Analysis",
        description: "Forecast trends with machine learning.",
      },
    ],
  },
]);

const tabContent = ref(null);
const tabImage = ref(null);
const tabText = ref(null);

const changeTab = (tabId) => {
  // Animate out the current tab content
  gsap.to([tabImage.value, tabText.value], {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.out",
    onComplete: () => {
      // Update the active tab
      activeTab.value = tabId;

      // Animate in the new tab content
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
