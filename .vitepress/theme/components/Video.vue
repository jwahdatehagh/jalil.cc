<template>
  <video autoplay loop muted playsinline :poster="poster">
    <source :src="src" :type="type">
  </video>
  <em v-if="caption"><a :href="caption.link">{{ caption.text }}</a></em>
</template>

<script setup>
defineProps({
  src: String,
  type: {
    type: String,
    default: 'video/mp4'
  },
  poster: String,
  caption: Object,
})
</script>

<style>
video {
  width: 100%;
  max-width: var(--width);
}
</style>
