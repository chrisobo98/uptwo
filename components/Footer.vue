<template>
  <footer class="p-4 sm:p-6 bg-black">
    <div class="mx-auto max-w-screen-xl my-12">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <NuxtLink to="/" class="flex items-center">
            <NuxtImg
              provider="cloudinary"
              width="100%"
              height="100%"
              src="v1740940906/uptwo_n62bjt.webp"
              class="h-20 w-20"
              alt="UpTwo Logo"
            />
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
            >
              Resources
            </h2>
            <ul class="text-white dark:text-white">
              <li class="mb-4">
                <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:underline"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-white sm:text-center dark:text-white"
          >© 2025
          <a href="https://flowbite.com" class="hover:underline">UpTwo</a>. All
          Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <!-- Facebook -->
          <NuxtLink to="https://www.facebook.com/uptwoink" target="_blank">
            <Icon
              name="simple-icons:facebook"
              size="2em"
              style="color: white"
            />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/beuptwo" target="_blank">
            <!-- Instagram -->
            <Icon
              name="simple-icons:instagram"
              size="2em"
              style="color: white"
            />
          </NuxtLink>

          <NuxtLink to="https://www.youtube.com/@uptwoink" target="_blank">
            <!-- youtube -->
            <Icon name="simple-icons:youtube" size="2em" style="color: white" />
          </NuxtLink>

          <NuxtLink to="https://www.linkedin.com/in/t-w-alexander-mba-24969a122">
            <!-- Linkedin -->
            <Icon
              name="simple-icons:linkedin"
              size="2em"
              style="color: white"
            />
          </NuxtLink>

          <NuxtLink to="https://maps.app.goo.gl/cJdcHPF41DFV8k7F8" target="_blank">
            <!-- Google -->
            <Icon name="simple-icons:google" size="2em" style="color: white" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
