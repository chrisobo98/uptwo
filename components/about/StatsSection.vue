<template>
    <div class="w-8/12 mx-auto justify-start items-center lg:gap-8 gap-6 grid lg:grid-cols-2 grid-cols-1">
      <!-- Stats Grid -->
      <div class="w-full flex-col justify-start items-start lg:gap-10 gap-6 inline-flex mb-12 md:mb-0">
        <div
          v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
          class="w-full justify-start items-center gap-5 grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
        >
          <StatItem
            v-for="stat in stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
            :class="stat.class"
          />
        </div>
      </div>
  
      <!-- Image -->
      <NuxtImg
        v-gsap.whenVisible.from="{ opacity: 0, x: -150, stagger: 0.4 }"
        v-gsap.magnetic
        class="w-11/12 md:w-full mx-auto lg:h-full h-auto rounded-xl object-cover"
        :src="imageSrc"
        :alt="imageAlt"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import StatItem from "@/components/about/StatItem.vue";
  
  defineProps<{
    stats: { value: string; label: string; class?: string }[];
    imageSrc: string;
    imageAlt: string;
  }>();
  </script>