<template>

    <div
      class="lg:p-6 p-4 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
    >
      <div
        v-gsap.magnetic.weak
        class="flex-col justify-start items-start gap-2 flex"
      >
        <div class="justify-start items-center gap-1.5 inline-flex">
          <div class="py-[3px] justify-center items-center flex">
            <Icon :name="icon" size="2em" style="color: white" />
          </div>
          <h6 class="text-white text-lg text-base font-medium leading-relaxed">
            {{ title }}
          </h6>
        </div>
        <p class="text-gray-500 text-xs font-normal leading-normal">
          {{ description }}
        </p>
      </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
