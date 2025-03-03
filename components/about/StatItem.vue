<template>
    <div
      :class="[
        'w-full flex-col justify-start md:items-start items-center gap-2 inline-flex',
        customClass,
      ]"
    >
      <h4 class="text-yellow-600 text-xl font-bold leading-8">{{ value }}</h4>
      <h5 class="text-gray-500 text-lg font-normal leading-relaxed break-all">
        {{ label }}
      </h5>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    customClass?: string;
    value: string;
    label: string;
    class?: string;
  }>();
  </script>