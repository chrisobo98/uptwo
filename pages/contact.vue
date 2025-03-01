<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2
        v-gsap.visible.from="{ opacity: 0, y: 50, stagger: 0.4 }"
        class="text-white text-center font-manrope text-6xl font-bold leading-10 mb-4"
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.56636 5.05771L3.3574 4.93833L3.35732 4.93783L2.56636 5.05771ZM15.7966 18.2737L15.6263 19.0553L15.6268 19.0554L15.7966 18.2737ZM16.2599 13.7333L16.5447 12.9857H16.5447L16.2599 13.7333ZM7.22847 4.71562L6.47965 4.99715V4.99715L7.22847 4.71562ZM7.77827 6.93605L6.99182 6.78942L7.77827 6.93605ZM7.69133 5.94673L8.44016 5.66519L8.44016 5.66519L7.69133 5.94673ZM7.50947 10.0275L8.22992 9.6797L7.50947 10.0275ZM7.39174 9.00921L8.17819 9.15584L7.39174 9.00921ZM12.0495 13.5547L11.8973 12.7693L12.0495 13.5547ZM10.8746 13.3806L10.4858 14.0798L10.8746 13.3806ZM14.0123 13.1744L14.1645 13.9597L14.0123 13.1744ZM15.0221 13.2617L14.7372 14.0093L15.0221 13.2617ZM12.6309 1.60033C12.1923 1.54724 11.7936 1.85978 11.7406 2.2984C11.6875 2.73703 12 3.13565 12.4386 3.18874L12.6309 1.60033ZM17.437 8.10964C17.4969 8.54738 17.9004 8.85366 18.3381 8.79373C18.7758 8.7338 19.0821 8.33035 19.0222 7.89261L17.437 8.10964ZM12.4153 4.66728C11.9766 4.61499 11.5785 4.92825 11.5262 5.36697C11.4739 5.8057 11.7872 6.20374 12.2259 6.25604L12.4153 4.66728ZM14.372 8.36884C14.4311 8.80669 14.834 9.11371 15.2719 9.05457C15.7097 8.99543 16.0167 8.59254 15.9576 8.15469L14.372 8.36884ZM13.8601 12.389L11.8973 12.7693L12.2017 14.3401L14.1645 13.9597L13.8601 12.389ZM11.2634 12.6815C9.77612 11.8544 8.83849 10.9404 8.22992 9.6797L6.78902 10.3753C7.57402 12.0014 8.78472 13.1338 10.4858 14.0798L11.2634 12.6815ZM8.17819 9.15584L8.56471 7.08268L6.99182 6.78942L6.6053 8.86259L8.17819 9.15584ZM8.44016 5.66519L7.9773 4.43408L6.47965 4.99715L6.94251 6.22826L8.44016 5.66519ZM5.49821 2.71763H3.95597V4.31763H5.49821V2.71763ZM3.95597 2.71763C2.67168 2.71763 1.56701 3.80277 1.77539 5.1776L3.35732 4.93783C3.31141 4.63489 3.54293 4.31763 3.95597 4.31763V2.71763ZM1.77532 5.1771C2.09946 7.32491 3.06648 11.3313 5.97539 14.2402L7.10676 13.1088C4.56407 10.5661 3.66524 6.97816 3.3574 4.93833L1.77532 5.1771ZM5.97539 14.2402C9.00538 17.2702 13.3176 18.5524 15.6263 19.0553L15.9669 17.492C13.7373 17.0063 9.80222 15.8043 7.10676 13.1088L5.97539 14.2402ZM15.6268 19.0554C17.0475 19.364 18.2503 18.2434 18.2503 16.8833H16.6503C16.6503 17.3183 16.2987 17.5641 15.9664 17.4919L15.6268 19.0554ZM18.2503 16.8833V15.4607H16.6503V16.8833H18.2503ZM16.5447 12.9857L15.3069 12.5141L14.7372 14.0093L15.9751 14.4809L16.5447 12.9857ZM18.2503 15.4607C18.2503 15.1704 18.2514 14.8874 18.225 14.6494C18.1964 14.3915 18.1293 14.1116 17.9458 13.8454L16.6283 14.7533C16.6081 14.7238 16.6226 14.7165 16.6348 14.826C16.6491 14.9554 16.6503 15.1347 16.6503 15.4607H18.2503ZM15.9751 14.4809C16.2797 14.597 16.4469 14.6619 16.5627 14.7214C16.6607 14.7717 16.6486 14.7827 16.6283 14.7533L17.9458 13.8454C17.7623 13.5791 17.5247 13.4168 17.2939 13.2982C17.0809 13.1888 16.816 13.0891 16.5447 12.9857L15.9751 14.4809ZM7.9773 4.43408C7.87466 4.16108 7.77573 3.89469 7.66674 3.68043C7.54866 3.44829 7.3866 3.20908 7.11966 3.02426L6.20887 4.33973C6.17933 4.31928 6.19043 4.30713 6.24063 4.40583C6.29993 4.52241 6.36441 4.69065 6.47965 4.99715L7.9773 4.43408ZM5.49821 4.31763C5.82567 4.31763 6.00583 4.31878 6.13582 4.33326C6.24588 4.34552 6.23842 4.36019 6.20887 4.33973L7.11966 3.02426C6.85273 2.83945 6.57179 2.77193 6.31295 2.7431C6.07404 2.71649 5.78987 2.71763 5.49821 2.71763V4.31763ZM8.56471 7.08268C8.60382 6.87292 8.6574 6.62237 8.63455 6.36233L7.04069 6.50238C7.03944 6.48823 7.04226 6.4891 7.03653 6.53267C7.02961 6.5853 7.01678 6.65553 6.99182 6.78942L8.56471 7.08268ZM6.94251 6.22826C6.99044 6.35575 7.01532 6.42267 7.03131 6.47328C7.04456 6.51518 7.04193 6.51653 7.04069 6.50238L8.63455 6.36233C8.6117 6.10228 8.51525 5.86492 8.44016 5.66519L6.94251 6.22826ZM8.22992 9.6797C8.20345 9.62488 8.18387 9.58426 8.1674 9.54876C8.15121 9.51385 8.14177 9.49183 8.13578 9.4766C8.13023 9.46251 8.12882 9.45716 8.1288 9.45709C8.12876 9.45693 8.12883 9.45717 8.12889 9.45748C8.12895 9.45778 8.12883 9.45727 8.12861 9.45559L6.54267 9.66729C6.58224 9.96372 6.6988 10.1884 6.78902 10.3753L8.22992 9.6797ZM6.6053 8.86259C6.56274 9.09085 6.50257 9.36686 6.54267 9.66729L8.12861 9.45559C8.13008 9.46666 8.12713 9.46622 8.13191 9.42583C8.13824 9.37232 8.15117 9.30078 8.17819 9.15584L6.6053 8.86259ZM11.8973 12.7693C11.7306 12.8016 11.6452 12.8177 11.5814 12.8255C11.5309 12.8316 11.5304 12.8274 11.5456 12.8298L11.2938 14.4099C11.6255 14.4628 11.9406 14.3907 12.2017 14.3401L11.8973 12.7693ZM10.4858 14.0798C10.7032 14.2007 10.9642 14.3574 11.2938 14.4099L11.5456 12.8298C11.5551 12.8313 11.554 12.8343 11.5177 12.8175C11.4672 12.7942 11.401 12.758 11.2634 12.6815L10.4858 14.0798ZM14.1645 13.9597C14.3011 13.9333 14.3728 13.9197 14.4266 13.9123C14.4711 13.9061 14.472 13.9091 14.4575 13.9078L14.5954 12.3138C14.3298 12.2908 14.0741 12.3475 13.8601 12.389L14.1645 13.9597ZM15.3069 12.5141C15.1032 12.4365 14.8611 12.3368 14.5954 12.3138L14.4575 13.9078C14.443 13.9066 14.4444 13.9038 14.4872 13.9175C14.5389 13.934 14.6072 13.9598 14.7372 14.0093L15.3069 12.5141ZM12.4386 3.18874C15.1145 3.5126 17.0714 5.43918 17.437 8.10964L19.0222 7.89261C18.5579 4.50156 16.0288 2.01159 12.6309 1.60033L12.4386 3.18874ZM12.2259 6.25604C13.3789 6.39347 14.2166 7.21811 14.372 8.36884L15.9576 8.15469C15.7045 6.28104 14.2927 4.89105 12.4153 4.66728L12.2259 6.25604Z"
                    fill="#4F46E5"
                  ></path>
                </svg>
              </div>
              <h4 class="text-white text-base font-medium leading-6">
                Call Us Directly At
              </h4>
            </div>
            <h3
              v-gsap.visible.animateText.once
              class="text-white font-manrope 2xl:text-3xl lg:text-2xl text-3xl font-bold leading-10 mb-12"
            >
              470 - 601 - 1911
            </h3>
            <button
              class="w-full h-11 text-white text-center text-sm font-semibold leading-5 rounded-full bg-yellow-500 transition-all duration-700 hover:bg-yellow-700"
            >
              Contact Us
            </button>
          </div>
          <div
            v-gsap.visible.from="{ opacity: 0, x: -200, delay: 0.5 }"
            class="p-6 bg-gray-100 rounded-2xl"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66615 8.96733C1.66617 6.66367 1.66618 5.51184 2.12631 4.63739C2.50297 3.92153 3.08774 3.33678 3.80359 2.96012C4.67805 2.5 5.82979 2.5 8.13326 2.5C9.32843 2.5 10.5299 2.5 11.6676 2.5C14.1591 2.50001 15.4048 2.50001 16.3331 3.03602C16.941 3.38705 17.4458 3.89188 17.7969 4.4998C18.3329 5.42807 18.3329 6.67436 18.3329 9.16695C18.3329 9.8613 18.3329 10.5557 18.3329 11.25C18.3329 11.7919 18.3329 12.0629 18.3066 12.2908C18.094 14.1375 16.637 15.5945 14.7903 15.8071C14.5624 15.8333 14.2914 15.8333 13.7493 15.8333V15.8333C13.0954 15.8333 12.8426 15.9752 12.5462 16.0929C11.6956 16.4308 10.944 18.0211 9.99949 18.0211C9.05492 18.0211 8.30333 16.4308 7.45273 16.0929C6.65819 15.7773 5.83898 15.8333 4.99949 15.8333V15.8333C3.20149 15.8333 1.66618 14.4362 1.66615 12.6382C1.66613 11.4146 1.66614 10.191 1.66615 8.96733Z"
                    stroke="#111827"
                    stroke-width="1.6"
                  ></path>
                </svg>
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
            <button
              class="w-full h-11 text-black text-center text-sm font-semibold leading-5 rounded-full bg-gray-300 group-hover:bg-yellow-500 transition-all duration-700 hover:bg-gray-400"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div
          v-gsap.visible.from="{ opacity: 0, y: 200, delay: 0.5 }"
          class="col-span-2 md:p-8 p-5 border border-gray-100 rounded-2xl"
        >
          <form class="mb-0">
            <div class="flex items-center relative mb-8">
              <svg
                width="24"
                height="24"
                class="absolute top-3 mr-2 ml-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21C20 18.1716 20 16.7574 19.1213 15.8787C18.2426 15 16.8284 15 14 15H10C7.17157 15 5.75736 15 4.87868 15.8787C4 16.7574 4 18.1716 4 21M12.1441 11C12.0541 10.991 11.9459 10.991 11.8468 11C9.7027 10.9278 8 9.16911 8 7.00451C8 4.79481 9.78378 3 12 3C14.2072 3 16 4.79481 16 7.00451C15.991 9.16911 14.2883 10.9278 12.1441 11Z"
                  stroke="#111827"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <input
                type="text"
                class="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                placeholder="Name"
              />
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mb-8">
              <div class="flex items-center relative">
                <svg
                  width="24"
                  height="24"
                  class="absolute top-3 mr-2 ml-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z"
                    stroke="#111827"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <input
                  type="text"
                  class="w-full h-12 text-gray-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none shadow-sm pl-12"
                  placeholder="Email Address"
                />
              </div>
              <div class="flex items-center relative">
                <svg
                  width="24"
                  height="24"
                  class="absolute top-3 mr-2 ml-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9655 14.6929C17.672 14.5811 17.5252 14.5251 17.3708 14.5118C17.2164 14.4984 17.0622 14.5283 16.7538 14.5881L14.3984 15.0445C14.0235 15.1172 13.836 15.1535 13.6427 15.1227C13.4493 15.0918 13.2957 15.0064 12.9886 14.8356C11.0756 13.7718 9.78657 12.5439 8.95042 10.8118C8.827 10.5561 8.76529 10.4283 8.74183 10.2526C8.71837 10.0768 8.74863 9.91452 8.80915 9.5899L9.27298 7.1021C9.32932 6.79993 9.35749 6.64884 9.3442 6.49766C9.33092 6.34649 9.27683 6.20263 9.16866 5.91491L8.61323 4.43758C8.35178 3.74217 8.22105 3.39447 7.93618 3.19723C7.65132 3 7.27985 3 6.53692 3H4.68622C3.66783 3 2.86611 3.84144 3.01869 4.8481C3.39788 7.36068 4.51739 11.9173 7.78835 15.1882C11.2236 18.6235 16.172 20.1141 18.895 20.7072C19.9468 20.9357 20.8794 20.1159 20.8794 19.0388V17.3317C20.8794 16.592 20.8794 16.2222 20.6836 15.938C20.4877 15.6538 20.1421 15.5222 19.4509 15.2588L17.9655 14.6929Z"
                    stroke="#111827"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
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
