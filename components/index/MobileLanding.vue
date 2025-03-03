<template>
  <section class="hero-section">
    <!-- Video Background -->
    <div class="hero-video opacity-40">
      <video autoplay loop muted playsinline preload="auto">
        <source
          src="https://cdn.prod.website-files.com/66b1e669bf6b613debec2857/66c059230ce17596b9a93ac0_Hero_Video-comp-transcode.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  // Add GSAP animations for text lines
  const textLines = document.querySelectorAll(".hero-text h1 span");
  textLines.forEach((line, index) => {
    gsap.from(line, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: parseFloat(line.style.getPropertyValue("--delay")),
      ease: "power3.out",
    });
  });
});
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
