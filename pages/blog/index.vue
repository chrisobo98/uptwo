<script setup>
import { ref, watch } from "vue";

useHead({
  title: "Blog | Insights on Business, Lifestyle & More",
  meta: [
    {
      name: "description",
      content:
        "Discover expert insights on business, lifestyle, dating, personal development, and more. Explore upTWO’s latest articles and stay informed.",
    },
    {
      property: "og:title",
      content:
        "Blog | Explore Articles on Business, Lifestyle & Growth | upTWO",
    },
    {
      property: "og:description",
      content:
        "Read insightful articles from upTWO on business strategies, lifestyle tips, personal growth, and interviews with industry leaders.",
    },
  ],
});

const { data: posts } = await useAsyncData(
  "posts",
  async () => {
    return queryCollection("content").all();
  },
  { server: true }
);

const categories = ref([
  "All Posts",
  "Business",
  "Dating",
  "Interviews",
  "Lifestyle",
  "Personal Development",
]);

const selectedCategory = ref("All Posts");
const filteredPosts = ref(posts.value || []);

watch(selectedCategory, () => {
  // Update filtered posts
  filteredPosts.value =
    posts.value?.filter(
      (p) =>
        selectedCategory.value === "All Posts" ||
        p.meta?.category === selectedCategory.value
    ) || [];
});
</script>

<template>
  <section class="pt-20 lg:pb-16 pb-10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[1000px]">
      <div
        v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="text-center mb-16"
      >
        <h2 class="text-6xl font-bold text-white leading-normal">
          Latest <span class="text-yellow-600">Articles</span>
        </h2>
        <p class="text-lg text-gray-400 mt-4">
          Explore our collection of insightful articles across various
          categories
        </p>
      </div>

      <!-- Category Filters -->
      <div
        v-gsap.visible.from="{ opacity: 0, y: -150, stagger: 2.0 }"
        class="flex flex-wrap justify-center gap-4 mb-12"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-full transition-colors duration-200',
            selectedCategory === category
              ? 'bg-yellow-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div
        v-gsap.visible.from="{ opacity: 0, y: 200, delay: 0.5 }"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <TransitionGroup name="fade">
          <div
            v-for="post in filteredPosts"
            :key="post.slug"
            class="post-card bg-gray-800 rounded-xl p-6"
          >
            <NuxtLink :to="post.path">
              <NuxtImg
                provider="cloudinary"
                :src="post.meta.image"
                :alt="post.title"
                class="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div class="flex items-center gap-2 mb-4">
                <span
                  class="px-3 py-1 bg-yellow-600 text-sm rounded-full text-white"
                >
                  {{ post.meta.category }}
                </span>
                <span class="text-gray-400 text-sm">
                  {{ post.meta.date }}
                </span>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">
                {{ post.title }}
              </h3>
              <p class="text-gray-400 line-clamp-3">{{ post.description }}</p>
              <div class="mt-4 flex items-center gap-2">
                <img
                  v-if="post.authorImage"
                  :src="post.authorImage"
                  class="w-8 h-8 rounded-full"
                  alt="Author"
                />
                <span class="text-yellow-400 text-sm">{{ post.author }}</span>
              </div>
            </NuxtLink>
          </div>
        </TransitionGroup>
      </div>

      <!-- Empty State -->
      <div v-if="filteredPosts.length === 0" class="text-center py-12">
        <p class="text-gray-400 text-lg">No articles found in this category</p>
      </div>
    </div>
  </section>
</template>

<style>
/* Smooth fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Clean link styling */
a {
  text-decoration: none;
}

/* Prevent layout shifts */
.post-card {
  will-change: opacity;
}
</style>
