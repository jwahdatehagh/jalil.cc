<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import Nav from './Nav.vue'

const route = useRoute()
const { frontmatter } = useData()
const isNote = computed(() => route.data.relativePath.startsWith('notes/'))
</script>

<template>
  <nav class="breadcrumbs" v-if="isNote">
    <a href="/">Home</a>
    <span class="sep">/</span>
    <span>{{ frontmatter.title }}</span>
  </nav>
  <Nav v-else />
  <Content class="content" :class="route.data.frontmatter?.class" />
</template>

<style>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: var(--width);
  margin: 0 auto 2rem;
  font-size: var(--font-sm);

  a {
    color: black;
    &:visited { color: black; }
  }

  .sep {
    color: lightgrey;
  }
}
</style>
