import { defineConfig } from 'vitepress'

const SITE_URL = 'https://jalil.cc'
const AUTHOR = 'Jalil Sebastian Wahdatehagh'
const PROFILE_IMAGE = 'https://ipfs.vv.xyz/ipfs/Qmaj7GtVsadwDZxj17DnXXHCpZqadPU3XaqGMLjzizMsF9'

export default defineConfig({
  title: "jalil",
  description: "consensus experiments on the world computer",
  head: [
    ['link', { rel: 'icon', href: 'https://ipfs.vv.xyz/ipfs/QmaetPt9Yd2XKXYq4VyqUc7YaWrnVWaV1uAoBHxbzPcwzR' }],
  ],
  sitemap: {
    hostname: SITE_URL,
  },
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
    const canonicalUrl = `${SITE_URL}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')

    const title = pageData.frontmatter.title || pageData.title || 'jalil'
    const description = pageData.frontmatter.description || 'consensus experiments on the world computer'

    pageData.frontmatter.head ??= []

    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:image', content: PROFILE_IMAGE }],
      ['meta', { property: 'og:type', content: pageData.relativePath === 'index.md' ? 'website' : 'article' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:site', content: '@jalilwahdat' }],
    )

    if (pageData.relativePath === 'index.md') {
      pageData.frontmatter.head.push(
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: AUTHOR,
          url: SITE_URL,
          image: PROFILE_IMAGE,
          jobTitle: 'Gardener',
          worksFor: [
            { '@type': 'Organization', name: '1001.digital', url: 'https://1001.digital' },
            { '@type': 'Organization', name: 'Visualize Value', url: 'https://visualizevalue.com' },
            { '@type': 'Organization', name: 'EthID', url: 'https://ethid.org' },
          ],
          sameAs: [
            'https://x.com/jalilwahdat',
            'https://warpcast.com/jalil',
            'https://telegram.me/jwahdatehagh',
            'https://github.com/jwahdatehagh',
          ],
        })],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'jalil',
          url: SITE_URL,
          description: 'consensus experiments on the world computer',
          author: { '@type': 'Person', name: AUTHOR, url: SITE_URL },
        })],
      )
    }

    if (pageData.relativePath.startsWith('notes/')) {
      pageData.frontmatter.head.push(
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          datePublished: pageData.frontmatter.date || '',
          url: canonicalUrl,
          author: { '@type': 'Person', name: AUTHOR, url: SITE_URL },
        })],
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: title, item: canonicalUrl },
          ],
        })],
      )
    }
  },
})
