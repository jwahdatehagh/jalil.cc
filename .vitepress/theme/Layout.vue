<script setup lang="ts">
import { useRoute } from 'vitepress'
import Nav from './Nav.vue'

const route = useRoute()
</script>

<template>
  <Nav />
  <Content class="content" :class="route.data.frontmatter?.class" />
</template>
