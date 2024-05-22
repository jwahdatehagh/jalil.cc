<template>
  <nav v-if="navLinks.length">
    <a v-for="link of navLinks" :href="link.link">{{ link.text }}</a>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter, theme } = useData()
const route = useRoute()

const navLinks = computed(() => [
  ...(theme.value.nav || []),
  ...(frontmatter.value.nav || [])
].filter(navItem => navItem.link !== route.path))
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
  max-width: var(--width);
  margin: 0 auto 2rem;

  a {
    color: black;

    &:visited {
      color: black;
    }
  }
}
</style>
