import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jalil",
  description: "consensus experiments on the world computer",
  head: [
    ['link', { rel: 'icon', href: 'https://ipfs.vv.xyz/ipfs/QmaetPt9Yd2XKXYq4VyqUc7YaWrnVWaV1uAoBHxbzPcwzR' }],
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
  cleanUrls: false, // we can't do this as it breaks direct links on IPFS.
  transformPageData(pageData) {
    const canonicalUrl = `https://jalil.cc/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },
})
