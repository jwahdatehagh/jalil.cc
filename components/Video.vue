<template>
  <video autoplay loop muted :poster="poster">
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
  max-width: var(--width);
}
</style>
