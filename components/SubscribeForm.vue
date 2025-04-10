<template>
  <section class="py-8 bg-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-2xl p-6 lg:p-10">
        <form @submit.prevent="handleSubmit">
          <div
            class="flex flex-col items-center justify-between gap-6 lg:flex-row"
          >
            <div class="w-full mx-auto lg:w-1/2">
              <h2
                v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
                class="font-manrope text-3xl font-bold text-white leading-[2.5rem] mb-5 text-center lg:text-left"
              >
                Subscribe to Our Newsletter
              </h2>
              <p
                v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
                class="text-gray-400 leading-6 mb-6 text-center lg:text-left"
              >
                Join our community of subscribers and receive regular updates
                delivered straight to your inbox. It's quick, easy, and free.
              </p>
              <div class="flex flex-col sm:flex-row items-center gap-4">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Your email"
                  required
                  class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full sm:w-auto px-6 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition disabled:opacity-50"
                >
                  <span v-if="loading">Sending...</span>
                  <span v-else>Subscribe</span>
                </button>
              </div>
              <p
                v-if="notification.show"
                :class="notificationClass"
                class="mt-4 text-sm"
              >
                {{ notification.message }}
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import emailjs from "@emailjs/browser";

const email = ref("");
const loading = ref(false);
const notification = ref({
  show: false,
  message: "",
  type: "success" as "success" | "error",
});

const notificationClass = computed(() =>
  notification.value.type === "success" ? "text-green-400" : "text-red-400"
);

const handleSubmit = () => {
  loading.value = true;
  notification.value.show = false;
  const templateParams = {
    email: email.value,
  };

  emailjs
    .send(
      "service_oeh1z7o", // Replace with your actual Service ID
      "template_rst08ie", // Replace with your actual Template ID
      templateParams, // Template variable
      "50kCpdxmRHfnhakxl" // Replace with your actual Public Key
    )
    .then(() => {
      loading.value = false;
      notification.value = {
        show: true,
        message: "Subscription successful! 🎉",
        type: "success",
      };
      email.value = "";
    })
    .catch(() => {
      loading.value = false;
      notification.value = {
        show: true,
        message: "Something went wrong. Please try again later.",
        type: "error",
      };
    });
};
</script>
