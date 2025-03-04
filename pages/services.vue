<template>
  <section class="py-24 bg-black">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="text-center mb-10"
      >
        <h2 class="text-4xl md:text-6xl font-bold text-white leading-normal">
          Your Brand Deserves a Stage
          <span class="text-yellow-600">not a Shelf</span>
        </h2>
        <p class="text-lg text-gray-400">
          A brand without strategy is like placing a Rolex in the canned goods
          aisle—lost, overlooked, and out of place. Brand strategy is more than
          logos and colors; bold architecture positions your business in the
          correct rooms, in front of the right eyes, at the right time.
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
          <NuxtImg
            provider="cloudinary"
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
              <Icon name="humbleicons:check-circle" size="2em" style="color: goldenrod" />

                <div>
                  <h6 class="text-white text-xl font-bold">
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

useHead({
  title: "Brand Strategy & Business Consulting | Services",
  meta: [
    {
      name: "description",
      content:
        "Explore upTWO’s expert branding and business consulting services, including brand messaging, website copywriting, content support, project management, and keynote speaking.",
    },
    {
      property: "og:title",
      content: "upTWO Services | Elevate Your Brand with Expert Consulting",
    },
    {
      property: "og:description",
      content:
        "From strategic brand messaging to content support and keynote speaking, upTWO helps businesses in hospitality, small business, and creative industries thrive.",
    },
  ],
});

const activeTab = ref("brand");

const tabs = ref([
  {
    id: "brand",
    title: "Brand Messaging",
    image: "v1740964634/Brand_pcngvn.webp",
    heading: "Brand Strategy & Messaging",
    description:
      "Craft powerful brand identities through strategic messaging, operational alignment, employee retention strategies, and internal brand culture development.",
    features: [
      {
        title: "SEO-Optimized Messaging",
        description:
          "Develop brand messaging that enhances search rankings and digital presence.",
      },
      {
        title: "Audience-Centric Storytelling",
        description:
          "Align messaging with target demographics to boost engagement and conversions.",
      },
      {
        title: "Competitive Differentiation",
        description:
          "Position your brand uniquely with value-driven messaging strategies.",
      },
    ],
  },
  {
    id: "website",
    title: "Strategic Copywriting",
    image: "v1740964634/SEO_m9qjoi.webp",
    heading: "Strategic Copywriting",
    description:
      "Transform words into compelling stories that drive customer action—across websites, campaigns, and product launches.",
    features: [
      {
        title: "SEO-Driven Content",
        description:
          "Create keyword-rich copy that improves rankings on Google and other search engines.",
      },
      {
        title: "Conversion-Focused Copy",
        description: "Craft persuasive content that increases leads and sales.",
      },
      {
        title: "A/B Tested Messaging",
        description:
          "Optimize copy effectiveness through real-world testing and performance analytics.",
      },
    ],
  },
  {
    id: "retainer",
    title: "Content Strategy",
    image: "v1740964634/Content_y3smaa.webp",
    heading: "Content Strategy & Development",
    description:
      "Build content ecosystems that elevate your brand’s voice, ensuring consistency and impact across all platforms.",
    features: [
      {
        title: "Evergreen Content Planning",
        description:
          "Develop long-term content strategies that drive sustained traffic.",
      },
      {
        title: "Omnichannel Distribution",
        description:
          "Maximize content reach through blogs, social media, and email marketing.",
      },
      {
        title: "Search Intent Optimization",
        description:
          "Align content with user search behaviors to improve discoverability.",
      },
    ],
  },
  {
    id: "project",
    title: "Project Management",
    image: "v1740965292/Main_Promo_2_z5eteh_q8ed9x.webp",
    heading: "Project Management for Brand Growth",
    description:
      "Streamline brand initiatives with expert project management, ensuring strategic goals are met with precision and efficiency.",
    features: [
      {
        title: "Agile Workflow Optimization",
        description:
          "Implement flexible project strategies to enhance efficiency and productivity.",
      },
      {
        title: "KPI-Driven Execution",
        description:
          "Track key performance indicators to ensure brand growth aligns with business goals.",
      },
      {
        title: "Cross-Platform Brand Integration",
        description:
          "Ensure seamless brand consistency across web, social media, and offline campaigns.",
      },
    ],
  },
  {
    id: "keynote",
    title: "Speaking & Storytelling",
    image: "v1740964634/BBB_Proof_xo6cfz.webp",
    heading: "Keynote Speaking & Brand Storytelling",
    description:
      "Inspire and educate through captivating keynotes, unlocking the power of storytelling to amplify your brand’s influence.",
    features: [
      {
        title: "Authority Building Content",
        description:
          "Position yourself as a thought leader through impactful speaking engagements.",
      },
      {
        title: "Viral Storytelling Techniques",
        description:
          "Craft narratives that captivate audiences and encourage organic sharing.",
      },
      {
        title: "Podcast & Media Guest Spot Optimization",
        description:
          "Enhance your brand visibility through strategic podcast appearances and media exposure.",
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
