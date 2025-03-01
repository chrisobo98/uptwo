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
      <NuxtLink to="/blog" class="hover:text-yellow-500 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
          height="50px"
          width="50px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 26.676 26.676"
          xml:space="preserve"
        >
          <path
            d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z"
          />
        </svg>
        <span class="text-center object-center mt-6 ml-4">All Post</span></NuxtLink>
      <h1
        class="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8 mt-12"
      >
        {{ post.title }}
      </h1>
      <div class="flex items-center justify-between">
        <div class="data">
          <p class="font-medium text-xl leading-8 text-white mb-1">insights</p>
          <p class="font-normal text-lg leading-7 text-white">
            {{ post.author }}
          </p>
        </div>
        <div class="flex items-center gap-5">
          <!-- Social icons -->
          <a href="javascript:;">
            <svg
              class="w-10 h-10 text-white group-hover:text-white"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Twitter/X icon -->
            </svg>
          </a>
          <a href="javascript:;">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Instagram icon -->
            </svg>
          </a>
          <a href="javascript:;">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- LinkedIn icon -->
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="relative py-10 lg:py-16">
    <div
      class="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3"
    >
      <!-- Featured Image -->
      <div class="img w-full mb-14">
        <img
          :src="post.meta.image"
          alt="Blog image"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>

      <!-- Content Renderer -->
      <article class="prose lg:prose-xl dark:prose-invert mx-auto">
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
            <div
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
                  <h6 class="text-sm text-gray-400">
                    By {{ featuredPost.author }}
                  </h6>
                  <span class="text-sm text-yellow-600">{{
                    featuredPost.date
                  }}</span>
                </div>
              </div>
            </div>
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
