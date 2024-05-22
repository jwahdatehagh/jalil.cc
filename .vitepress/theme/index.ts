// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import Video from './components/Video.vue'
import './styles/index.css'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Video', Video)
  }
} satisfies Theme

