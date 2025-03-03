<script setup>
import { useRoute } from "vue-router";
import { useAsyncData } from "#app";
import { watchEffect } from "vue";

const route = useRoute();
const slug = route.params.slug;

// Fetch the post data
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("content").path(`/blog/${slug}`).first();
});

// Fetch all blog posts for related posts
const { data: posts } = await useAsyncData("blog-list", () => {
  return queryCollection("content").all();
});

// Ensure `useHead` runs only when `post` is available
watchEffect(() => {
  if (post.value) {
    useHead({
      title: post.value.title ? `${post.value.title} | Blog` : "Blog Post",
      meta: [
        {
          name: "description",
          content: post.value.description
            ? post.value.description
            : "Read the latest insights on business, lifestyle, and personal growth from upTWO’s blog.",
        },
        {
          property: "og:title",
          content: post.value.title
            ? `${post.value.title} | upTWO Blog`
            : "Blog Post",
        },
        {
          property: "og:description",
          content: post.value.description
            ? post.value.description
            : "Explore expert insights and thought-provoking articles on business, lifestyle, and more.",
        },
        {
          property: "og:image",
          content: post.value.meta?.image || "/default-blog-image.jpg",
        },
        {
          property: "og:url",
          content: `https://yourwebsite.com/blog/${slug}`,
        },
      ],
    });
  }
});
</script>

<template>
  <section class="relative pt-40 pb-24 bg-yellow-600">
    <div
      class="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4"
    >
      <NuxtLink v-gsap.visible.from="{ opacity: 0, y: -150, stagger: 1.0, delay: 0.5 }" to="/blog" class="hover:text-gray-100 flex">
        <Icon name="stash:arrow-reply-solid" size="4em" style="color: white" />
        <span class="text-center object-center my-6"
          >All Post</span
        ></NuxtLink
      >
      <h1 v-gsap.visible.from="{ opacity: 0, y: -150, stagger: 0.3 }"
        class="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8 mt-12"
      >
        {{ post.title }}
      </h1>
      <div v-gsap.visible.from="{ opacity: 0, x: 50, stagger: 0.5 }" class="flex items-center justify-between">
        <div class="data">
          <p class="font-medium text-xl leading-8 text-white mb-1">
            Tags: {{ post.meta.tags.join(", ") }}
          </p>
          <p class="font-normal text-lg leading-7 text-white">
            By {{ post.meta.author }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="relative py-10 lg:py-16">
    <div
      class="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3"
    >
      <!-- Featured Image -->
      <div v-gsap.visible.from="{ opacity: 0, y: -150, stagger: 1.0 }" class="img w-full mb-14">
        <NuxtImg
          provider="cloudinary"
          :src="post.meta.image"
          alt="Blog image"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>

      <!-- Content Renderer -->
      <article v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }" class="prose lg:prose-xl dark:prose-invert mx-auto">
        <ContentRenderer :value="post" />
      </article>

      <!-- Popular Blogs Section -->
      <section class="py-12 lg:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            class="font-manrope text-4xl font-bold text-white text-center mb-14"
          >
            Our popular blogs
          </h2>
          <div
            class="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8"
          >
            <NuxtLink
              :to="featuredPost.path"
              v-for="(featuredPost, index) in posts.slice(0, 3)"
              :key="index"
              class="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-yellow-600"
            >
              <div class="flex items-center mb-6">
                <img
                  :src="featuredPost.meta.image"
                  :alt="featuredPost.title"
                  class="rounded-lg w-full object-cover h-48"
                />
              </div>
              <div class="block">
                <h4 class="text-white font-medium leading-8 mb-9">
                  {{ featuredPost.title }}
                </h4>
                <div class="flex items-center justify-between font-medium">
                  <h6 class="text-sm text-white">
                    By
                    {{ featuredPost.meta.author }}
                  </h6>
                  <span class="text-sm text-yellow-600">{{
                    featuredPost.meta.date
                  }}</span>
                </div>
              </div>
            </NuxtLink>
          </div>
          <NuxtLink to="/blog">
            <button
              class="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-white font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
            >
              View All
            </button>
          </NuxtLink>
        </div>
      </section>
    </div>
  </section>
</template>
