<template>
  <section class="relative py-5 mt-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 xl:gap-24 lg:gap-16 gap-6 items-center lg:h-full h-auto"
      >
        <div class="w-full lg:col-span-6 lg:pb-0 pb-12 md:order-first">
          <div class="text-center lg:text-left lg:max-w-xl">
            <h1
              class="pb-5 text-center font-bold leading-snug font-manrope text-5xl lg:text-left lg:pr-5 relative"
            >
              <span class="text-yellow-600">Stellar IV:</span> The Agents of
              Zierlux
              <svg
                class="max-lg:hidden absolute md:-top-24 xl:-top-20 -right-20"
                xmlns="http://www.w3.org/2000/svg"
                width="221"
                height="211"
                viewBox="0 0 221 211"
                fill="none"
              >
                <path
                  d="M62.2261 93.0678C41.7341 90.3429 21.4375 85.0552 1.83731 79.9319L0.960363 82.8895C20.6626 88.0463 41.0462 93.3545 61.7109 96.0919C78.3783 98.3006 93.5569 98.623 107.674 97.0186C107.779 100.387 108.256 103.748 109.098 106.961C112.316 119.163 120.269 130.646 133.379 142.102C147.06 154.051 162.634 163.291 179.718 169.629L171.34 173.294L172.181 175.385L184.873 169.819L178.964 157.698L176.914 158.768L180.798 166.71C164.078 160.496 148.83 151.455 135.435 139.752C122.774 128.685 115.104 117.664 112.06 106.049C111.237 102.935 110.799 99.7713 110.735 96.6293C115.446 95.9983 120.045 95.1621 124.532 94.0921C130.619 92.6557 137.515 90.5248 142.602 85.6033C147.432 80.9506 150.49 72.5837 146.69 66.2436C144.288 62.2297 139.345 59.7922 134.097 60.0139C128.507 60.2679 123.828 63.1385 120.901 65.5275C115.21 70.1465 111.14 76.7114 109.085 84.5523C108.298 87.5876 107.848 90.7494 107.714 93.9387C93.7404 95.5583 78.7209 95.2641 62.2261 93.0678ZM122.688 67.9176C125.245 65.8366 129.311 63.3113 134.044 63.1094C137.147 62.9749 140.108 63.975 142.195 65.7763C142.915 66.3983 143.541 67.1299 144.027 67.9322C146.916 72.7483 144.496 79.6175 140.5 83.4874C135.957 87.8687 129.567 89.8081 123.905 91.147C119.601 92.1566 115.216 92.9869 110.719 93.5835C111.244 83.3569 115.526 73.7247 122.688 67.9176Z"
                  fill="#D1D5DB"
                />
              </svg>
            </h1>
            <p
              v-gsap.whenVisible.animateText.once.fast
              class="text-center mb-9 lg:text-left md:h-10 h-20"
            >
              These four strangers must overcome their differences to form an
              unbreakable team. As they confront external threats and internal
              struggles, bonds are forged, love is kindled, and secrets about
              Zierlux’s true history come to light.
            </p>
            <NuxtImg
              provider="cloudinary"
              src="v1744299884/book-cover-transparent_kqfutd.png"
              alt="Stellar IV Book Cover"
              class="mx-auto h-full w-full"
            />
          </div>
        </div>

        <!-- FORM SECTION -->
        <div
          class="w-full lg:col-span-6"
          v-gsap.visible.from="{ opacity: 0, x: 250, stagger: 1.2 }"
        >
          <div
            class="rounded-3xl p-5 lg:p-10 max-lg:max-w-2xl max-lg:mx-auto xl:ml-auto xl:max-w-lg lg:max-w-md border border-yellow-600"
          >
            <form @submit.prevent="handleSubmit">
              <div class="py-6">
                <h4 class="text-3xl font-bold mb-2">Register Now</h4>
                <p>
                  Be the first to get updates on release dates, exclusive
                  content, and more related to Stellar IV: The Agents of
                  Zierlux.
                </p>
              </div>
              <div class="block w-full">
                <div class="relative mb-9">
                  <label class="flex items-center mb-2 text-sm font-medium">
                    Email
                    <svg
                      width="7"
                      height="7"
                      class="ml-1"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </label>
                  <input
                    v-model="email"
                    type="email"
                    id="email"
                    class="block w-full h-14 px-5 py-2.5 text-base font-normal shadow-xs bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                class="bg-yellow-600 shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-full w-full h-14 text-lg text-white font-semibold cursor-pointer transition-all duration-500 hover:bg-yellow-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- FINAL TEXT SECTION -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div
        class="w-full flex-col justify-start items-start gap-2.5 inline-flex"
      >
        <h2
          class="text-white md:text-[123px] text-center md:text-left sm:text-5xl text-7xl md:leading-tight sm:leading-tight leading-snug"
        >
          bravery, sacrifice
          <span class="md:hidden text-yellow-600">Unity</span>
        </h2>
        <div
          class="w-full justify-start items-center md:gap-14 gap-7 flex md:flex-row flex-col-reverse md:pb-0 pb-5"
        >
          <p
            v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
            class="w-full text-white text-xl font-normal leading-relaxed md:text-start text-center"
          >
            Only four nations remain on the distant, mysterious planet of
            Zierlux after centuries of conflict. The balance of power is
            fragile, and peace is tenuous. Each country is represented by a
            reluctant champion, plucked from their ordinary lives and thrust
            into Stellar IV, the planet's formidable international space center.
          </p>
          <h2
            class="w-full hidden md:inline text-yellow-600 md:text-[153px] sm:text-5xl text-7xl md:leading-tight text-center sm:leading-tight leading-snug whitespace-nowrap"
          >
            unity
          </h2>
        </div>
        <p
          v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.6 }"
          class="w-full text-white text-xl font-normal leading-relaxed md:text-start text-center"
        >
          These four strangers must overcome their differences to form an
          unbreakable team. As they confront external threats and internal
          struggles, bonds are forged, love is kindled, and secrets about
          Zierlux’s true history come to light.
        </p>
        <p
          v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 0.8 }"
          class="w-full text-white text-xl font-normal leading-relaxed md:text-start text-center"
        >
          In a story of bravery, sacrifice, and the power of unity, "Stellar IV:
          The Agents of Zierlux" is a thrilling tale of adventure and discovery.
          Can these four individuals, each with their scars and ambitions, learn
          to trust one another and save their world? Or will their differences
          doom Zierlux to destruction?
        </p>
        <p
          v-gsap.whenVisible.from="{ opacity: 0, y: 50, stagger: 1.0 }"
          class="w-full text-white text-xl font-normal leading-relaxed md:text-start text-center"
        >
          Get ready for an epic adventure! A thrilling best-selling fantasy
          novel is set to hit the shelves in July 2025. <br /><br />
          Don’t miss your chance to dive into a world of magic and adventure!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const email = ref("");

const handleSubmit = async () => {
  try {
    const templateParams = { email: email.value };

    const result = await emailjs.send(
      "service_oeh1z7o", // Replace with your actual Service ID
      "template_rst08ie", // Replace with your actual Template ID
      templateParams, // Template variable
      "50kCpdxmRHfnhakxl" // Replace with your actual Public Key
    );

    alert("Thanks for signing up! 🎉");
    email.value = "";
  } catch (error) {
    alert("Oops! Something went wrong. Try again.");
  }
};
</script>
