import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jalil",
  description: "consensus experiments on the world computer",
  head: [
    ['link', { rel: 'icon', href: '/builder.jpg' }],
  ],
  themeConfig: {
    nav: [
      {
        text: '← Home',
        link: '/',
      },
    ],
  },
  vite: {
    base: '/',
  },
  cleanUrls: true,
})
