<template>
  <footer class="p-4 sm:p-6 bg-black">
    <div class="mx-auto max-w-screen-xl my-12">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://flowbite.com" class="flex items-center">
            <NuxtImg
              provider="cloudinary"
              src="v1740940906/uptwo_n62bjt.webp"
              class="h-auto w-auto"
              alt="FlowBite Logo"
            />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
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
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
            >
              Legal
            </h2>
            <ul class="text-white dark:text-white">
              <li class="mb-4">
                <a href="#" class="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
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
          <Icon name="simple-icons:facebook" size="2em" style="color: white" />
          <!-- Instagram -->
          <Icon name="simple-icons:instagram" size="2em" style="color: white" />
          <!-- youtube -->
          <Icon name="simple-icons:youtube" size="2em" style="color: white" />
          <!-- Linkedin -->
          <Icon name="simple-icons:linkedin" size="2em" style="color: white" />
          <!-- Google -->
          <Icon name="simple-icons:google" size="2em" style="color: white" />
        </div>
      </div>
    </div>
  </footer>
</template>
