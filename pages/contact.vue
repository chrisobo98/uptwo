<template>
  <section class="py-24 mt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="text-white text-center font-manrope md:text-6xl text-5xl font-bold leading-10 mb-4"
      >
        Contact <span class="text-yellow-600">Us</span>
      </h2>
      <p
        v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="text-gray-400 text-center text-base font-normal leading-6 mb-14"
      >
        Feel free to contact us? submit your queries here and we will listen
      </p>
      <div class="grid lg:grid-cols-3 grid-cols-1 md:gap-8 gap-0">
        <div class="md:mb-0 mb-5 flex flex-col justify-between">
          <div
            v-gsap.visible.from="{ opacity: 0, x: 200, delay: 0.5 }"
            class="bg-yellow-600 rounded-2xl p-6 mb-8"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4"
              >
                <Icon
                  name="humbleicons:phone-call"
                  size="2em"
                  style="color: #121728"
                />
              </div>
              <h4 class="text-white text-base font-medium leading-6">
                Call Us Directly At
              </h4>
            </div>
            <h3
              v-gsap.visible.animateText.once
              class="text-white font-manrope 2xl:text-3xl lg:text-2xl text-3xl font-bold leading-10 mb-12"
            >
              321 - 388 - 2772
            </h3>
            <a href="tel:+3213882772" target="_blank">

            <button
              class="w-full h-11 text-white text-center text-sm font-semibold leading-5 rounded-full bg-yellow-500 transition-all duration-700 hover:bg-yellow-700"
            >
              Call Us
            </button>
            </a>
          </div>
          <div
            v-gsap.visible.from="{ opacity: 0, x: -200, delay: 0.5 }"
            class="p-6 bg-gray-100 rounded-2xl"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4"
              >
                <Icon
                  name="humbleicons:chat"
                  size="2em"
                  class="absolute mx-3 my-3"
                  style="color: #121728"
                />
              </div>
              <h4 class="text-black text-base font-medium leading-6">
                Chat With Our Team
              </h4>
            </div>
            <h3
              v-gsap.visible.animateText.once
              class="text-black font-manrope 2xl:text-3xl lg:text-2xl text-3xl md:break-words break-normal font-bold leading-10 mb-12"
            >
              email@upTWo.com
            </h3>
            <a href="mailto:talexander@uptwoink.com" target="_blank">
              <button
                class="w-full h-11 text-black text-center text-sm font-semibold leading-5 rounded-full bg-gray-300 group-hover:bg-yellow-500 transition-all duration-700 hover:bg-gray-400"
              >
                Email Us
              </button>
            </a>
          </div>
        </div>
        <div
          v-gsap.visible.from="{ opacity: 0, y: 200, delay: 0.5 }"
          class="col-span-2 md:p-8 p-5 border border-gray-100 rounded-2xl"
        >
          <form class="mb-0">
            <div class="flex items-center relative mb-8">
              <Icon
                name="humbleicons:user"
                size="2em"
                class="absolute mx-3 my-3"
                style="color: #121728"
              />

              <input
                type="text"
                class="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                placeholder="Name"
              />
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              <div class="flex items-center relative">
                <Icon
                  name="humbleicons:mail"
                  size="2em"
                  class="absolute mx-3 my-3"
                  style="color: #121728"
                />
                <input
                  type="text"
                  class="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                  placeholder="Email Address"
                />
              </div>
              <div class="flex items-center relative">
                <Icon
                  name="humbleicons:phone"
                  size="2em"
                  class="absolute mx-3 my-3"
                  style="color: #121728"
                />
                <input
                  type="text"
                  class="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <textarea
              name=""
              class="w-full h-48 resize-none text-gray-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none shadow-sm pl-4 py-2 mb-8"
              placeholder="Message Here..."
            ></textarea>
            <button
              type="submit"
              v-gsap.visible.animateText.once.slow.delay-500
              class="w-full h-12 text-white text-center text-base font-semibold leading-6 bg-gray-900 rounded-full shadow transition-all duration-200 hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Contact",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with upTWO for expert brand strategy, storytelling, and consulting. Let's build something remarkable together.",
    },
    {
      property: "og:title",
      content: "Contact upTWO | Let’s Create Your Brand Story",
    },
    {
      property: "og:description",
      content:
        "Reach out to upTWO for strategic branding, storytelling, and marketing expertise. Let’s bring your vision to life.",
    },
  ],
});
</script>
