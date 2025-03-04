<template>
  <section class="hero-section">
    <!-- Video Background -->
    <client-only>
      <div class="hero-video opacity-40">
        <video
          ref="heroVideo"
          class="w-full h-full object-cover"
          autoplay
          loop
          muted
          playsinline
          loading="lazy"
        >
          <source :src="getOptimizedVideoUrl('auto:good')" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </client-only>
  </section>
</template>

<script setup>
const cloudinaryBaseUrl = "https://res.cloudinary.com/dkgpny3ca/video/upload/";

const videoPath = "v1741039053/66c059230ce17596b9a93ac0_Hero_Video-comp-transcode_c0gqkw.mp4";

const getOptimizedVideoUrl = (quality = "auto") => {
  return `${cloudinaryBaseUrl}q_${quality},f_auto,vc_auto/${videoPath}`;
};
</script>

<style scoped>
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
