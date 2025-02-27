<template>
    <section class="py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white leading-normal">
            Comprehensive <span class="text-yellow-600">Services and Benefits</span>
          </h2>
          <p class="text-lg text-gray-400">
            We pride ourselves on delivering tailored services to meet diverse needs, 
            from strategic consulting and creative solutions to robust marketing.
          </p>
        </div>
  
        <!-- Tabs -->
        <div class="flex justify-center overflow-auto">
          <ul class="w-full flex flex-nowrap border-gray-200 p-1 lg:border lg:rounded-full">
            <li v-for="tab in tabs" :key="tab.id" class="w-full">
              <button 
                @click="activeTab = tab.id" 
                class="group w-full flex items-center justify-center gap-2 py-2 px-7 rounded-full text-base font-medium text-white hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 ease-in-out"
                :class="{ 'text-yellow-600 rounded-full': activeTab === tab.id }"
              >
                {{ tab.title }}
              </button>
            </li>
          </ul>
        </div>
  
        <!-- Tab Content -->
        <div class="lg:pt-12 pt-10">
          <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="grid lg:grid-cols-2 gap-10">
            <img :src="tab.image" alt="Feature image" class="mx-auto max-h-80 w-full object-cover rounded-3xl">
            <div class="flex flex-col gap-7 py-8">
              <h2 class="text-white text-3xl  font-semibold">{{ tab.heading }}</h2>
              <p class="text-gray-400 text-base">{{ tab.description }}</p>
              <ul class="flex flex-col gap-4">
                <li v-for="feature in tab.features" :key="feature.title" class="flex gap-4 items-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <h6 class="text-white text-sm font-medium">{{ feature.title }}</h6>
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
  import { ref } from "vue";
  
  const activeTab = ref("brand");
  
  const tabs = ref([
    {
      id: "brand",
      title: "Brand Messaging Service",
      image: "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Brand.jpg",
      heading: "Brand Messaging Service",
      description: "Clarify your vision and connect with your audience through powerful brand messaging services. I help businesses craft authentic, compelling messages that reflect their values, resonate with their audience, and differentiate them in the market. Whether you need a captivating tagline, mission statement, or a cohesive brand story, I’ll ensure your messaging aligns with your goals and leaves a lasting impression.",
    },
    {
      id: "website",
      title: "Website Copywriting",
      image: "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/SEO.jpg",
      heading: "Website Copywriting",
      description: "Bring your online presence to life with professional website building services tailored to your brand. I create user-friendly, visually appealing websites that showcase your unique identity and engage your audience. From design and functionality to SEO optimization, I ensure your website not only looks great but also performs effectively to meet your business goals. Let’s build a site that leaves a lasting impression and drives success.",
      features: [
        { title: "Deep Insights", description: "Get real-time analytics on user behavior." },
        { title: "Predictive Analysis", description: "Forecast trends with machine learning." },
        { title: "Custom Reports", description: "Generate insights tailored to your needs." },
      ],
    },
    {
      id: "retainer",
      title: "Retainer Content Support",
      image: "//img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Content.jpg",
      heading: "Retainer Content Support",
      description: "Stay consistent and keep your audience engaged with retainer content support services. I provide ongoing, high-quality content tailored to your brand’s needs, ensuring your message stays fresh and relevant across all platforms. From blogs and social media posts to newsletters and marketing materials, I deliver dependable content creation and strategy that saves you time and drives results. Let’s keep your brand top of mind with a reliable content partner",
    },
    {
      id: "project",
      title: "Project Management Services",
      image: "https://img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/Main%20Promo%202.jpg",
      heading: "Project Management Services",
      description: "I offer expert project management services designed to help creatives complete their musical albums, eBooks, novels, and other artistic endeavors with efficiency and precision. With a structured yet flexible approach, I streamline workflows, set clear milestones, and manage timelines to ensure projects are delivered on time and to the highest quality. Leveraging years of experience in coordinating complex creative processes, I provide guidance and support that empowers artists and writers to focus on their craft while achieving their vision.",
      features: [
        { title: "Deep Insights", description: "Get real-time analytics on user behavior." },
        { title: "Predictive Analysis", description: "Forecast trends with machine learning." },
      ],
    },
    {
      id: "keynote",
      title: "Keynote Speaker",
      image: "	https://img1.wsimg.com/isteam/ip/aadf6fc8-f522-4009-80bc-3b540e85f52b/BBB%20Proof.jpg",
      heading: "Keynote Speaker",
      description: "The 'Build, Brand, Believe' workshop is a fun and educational presentation that focuses on creating an effective brand identity and the power of influence. This TED Talk-like speech lasts 15 to 30 minutes and is filled with real-life success and failure stories, as well as proven processes that have led to my brand's success in various sectors over the past 20 years.",
      features: [
        { title: "Deep Insights", description: "Get real-time analytics on user behavior." },
        { title: "Predictive Analysis", description: "Forecast trends with machine learning." },
      ],
    },
  ]);
  </script>
  