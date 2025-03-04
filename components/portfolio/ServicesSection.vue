<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="mb-14 text-center"
      >
        <h2 class="text-4xl text-center font-bold text-white mt-5">
          Services <span class="text-yellow-600">Offered</span>
        </h2>
        <p class="text-lg text-white">
          Brand strategy is more than logos & colors; bold architecture
          positions your business in the correct rooms, in front of the right
          eyes, at the right time.”
        </p>
      </div>
      <div
        v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.7 }"
        class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8"
      >
        <!-- Brand Identity & Messaging -->
        <div
          class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
        >
          <NuxtLink to="/services">
            <div
              class="bg-yellow-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-yellow-600"
            >
              <Icon
                name="tabler:chess-knight-filled"
                size="3em"
                style="color: yellowgreen"
              />
            </div>
          </NuxtLink>

          <h4 class="text-2xl font-medium text-white mb-3 capitalize">
            Brand Identity & Messaging
          </h4>
          <p class="text-sm font-normal text-white">
            plan & structure work how you want. Quickly organizing tasks.
          </p>
        </div>
        <!-- Copywriting & Storytelling -->
        <div
          class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
        >
          <NuxtLink to="/services">
            <div
              class="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600"
            >
              <Icon
                name="tabler:writing-sign"
                size="3em"
                style="color: darkturquoise"
              />
            </div>
            <h4 class="text-2xl font-medium text-white mb-3 capitalize">
              Copywriting & Storytelling
            </h4>
          </NuxtLink>

          <p class="text-sm font-normal text-white">
            Bring all your tools & data together. Also join with hundreds of
            other apps.
          </p>
        </div>

        <!-- Project Management -->
        <div
          class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
        >
          <NuxtLink to="/services">
            <div
              class="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600"
            >
              <Icon
                name="tabler:presentation-filled"
                size="3em"
                style="color: black"
              />
            </div>
            <h4 class="text-2xl font-medium text-white mb-3 capitalize">
              Project Management
            </h4>
          </NuxtLink>

          <p class="text-sm font-normal text-white">
            Get real time insight into progress & allows teams to track their
            work habits
          </p>
        </div>

        <!-- Keynote Speaker -->
        <div
          class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
        >
          <NuxtLink to="/services">
            <div
              class="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600"
            >
              <Icon
                name="tabler:speakerphone"
                size="3em"
                style="color: burlywood"
              />
            </div>
            <h4 class="text-2xl font-medium text-white mb-3 capitalize">
              Keynote Speaker
            </h4>
          </NuxtLink>

          <p class="text-sm font-normal text-white">
            Automated processes to coordinate your teams & increase
            communication.
          </p>
        </div>

        <!-- Market Positioning -->
        <div
          class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
        >
          <NuxtLink to="/services">
            <div
              class="bg-fuchsia-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-fuchsia-600"
            >
              <Icon
                name="tabler:chart-dots-2"
                size="3em"
                style="color: lightcoral"
              />
            </div>
          </NuxtLink>

          <h4 class="text-2xl font-medium text-white mb-3 capitalize">
            Market Positioning
          </h4>
          <p class="text-sm font-normal text-white">
            Automated processes to coordinate your teams & increase
            communication.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props or logic needed for this component
</script>
