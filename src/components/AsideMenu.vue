<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Navigation from './Navigation.vue'

defineOptions({ name: 'AsideMenu' })

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-laroche-a23b63252/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/gablaroche29',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:glaroche14@gmail.com',
    icon: 'email',
  },
] as const
</script>

<template>
  <aside
    class="border-aside-border bg-aside-background text-aside-foreground relative isolate flex min-h-0 min-w-0 flex-col overflow-hidden border-r px-3 py-4 md:px-5 md:py-6 lg:px-8 lg:py-8"
  >
    <div
      aria-hidden="true"
      class="portfolio-aside-grain pointer-events-none absolute inset-0 -z-10 opacity-25"
    />

    <header class="relative shrink-0">
      <p
        class="text-aside-muted mb-4 text-[0.55rem] leading-none tracking-[0.28em] uppercase md:mb-6 md:text-[0.65rem]"
      >
        Portfolio / 26
      </p>

      <RouterLink to="/" class="group block w-fit" aria-label="Gabriel Laroche — home">
        <h1
          class="text-[clamp(1.35rem,3.2vw,3.25rem)] leading-[0.82] font-black tracking-[-0.075em] uppercase"
        >
          <span class="block transition-transform duration-150 group-hover:translate-x-0.5"
            >Gabriel</span
          >
          <span
            class="block text-transparent transition-transform duration-150 [-webkit-text-stroke:1px_var(--color-aside-foreground)] group-hover:-translate-x-0.5"
            >Laroche</span
          >
        </h1>
      </RouterLink>

      <div class="mt-4 flex items-start gap-3 md:mt-6">
        <span class="bg-aside-accent mt-[0.45em] block h-1.5 w-1.5 shrink-0" />
        <p
          class="text-[clamp(0.55rem,1vw,0.8rem)] leading-[1.35] font-medium tracking-[0.12em] uppercase"
        >
          Game &amp; Web Developer
        </p>
      </div>
    </header>

    <div class="flex min-h-0 flex-1 items-center py-4 md:py-6">
      <Navigation />
    </div>

    <footer class="border-aside-border shrink-0 border-t pt-3 md:pt-4">
      <p class="text-aside-muted mb-3 hidden text-[0.55rem] tracking-[0.24em] uppercase sm:block">
        Elsewhere
      </p>
      <div class="flex flex-wrap items-center gap-2 md:gap-3">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          :target="social.href.startsWith('http') ? '_blank' : undefined"
          :rel="social.href.startsWith('http') ? 'noreferrer' : undefined"
          :aria-label="social.label"
          :title="social.label"
          class="border-aside-border text-aside-foreground hover:border-aside-accent hover:bg-aside-accent hover:text-aside-background focus-visible:outline-aside-accent group flex size-8 items-center justify-center border transition-[color,background-color,border-color,transform] duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-9"
        >
          <svg
            v-if="social.icon === 'linkedin'"
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="size-4 fill-current"
          >
            <path
              d="M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.3 13.8c0-4.3-2.3-6.3-5.4-6.3a4.7 4.7 0 0 0-4.3 2.4V7.8H9V22h3.6v-7c0-1.9.4-3.7 2.7-3.7 2.3 0 2.3 2.1 2.3 3.8V22h3.7l1-8.2Z"
            />
          </svg>
          <svg
            v-else-if="social.icon === 'github'"
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="size-4 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.2-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.8 8.5c-.1-.3-.5-1.3.1-2.8 0 0 .8-.3 2.8 1.1a9.6 9.6 0 0 1 5 0c2-1.4 2.8-1.1 2.8-1.1.6 1.5.2 2.5.1 2.8a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.8-4.6 5 .4.4.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="size-4 fill-none stroke-current"
            stroke-width="1.8"
          >
            <rect x="3" y="5" width="18" height="14" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </a>
      </div>
    </footer>
  </aside>
</template>
