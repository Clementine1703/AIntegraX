import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      meta: {
        title: 'AI IntegraX',
        metaTags: [
          { name: 'description', content: 'Page description' },
          { property: 'og:title', content: 'AI IntegraX' },
          { property: 'og:description', content: 'Page description' },
          { property: 'og:image', content: 'https://www.mywebsite.com/image.jpg' },
          { property: 'og:image:alt', content: 'Image description' },
          { property: 'og:locale', content: 'en_GB' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { property: 'og:url', content: 'https://www.mywebsite.com/page' },
          { rel: 'canonical', href: 'https://www.mywebsite.com/page' },
          { rel: 'icon', href: '/favicon.ico' },
          { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
          { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
          { rel: 'manifest', href: '/my.webmanifest' },
          { name: 'theme-color', content: '#FF00FF' }
        ]
      }
    },
  ]
})

export default router
