<script setup lang="ts">
import emailOutlineIcon from '@iconify-icons/mdi/email-outline'
import githubIcon from '@iconify-icons/mdi/github'
import linkedinIcon from '@iconify-icons/mdi/linkedin'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import Navigation from './Navigation.vue'

defineOptions({ name: 'AsideMenu' })

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-laroche-a23b63252/',
    icon: linkedinIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/gablaroche29',
    icon: githubIcon,
  },
  {
    label: 'Email',
    href: 'mailto:glaroche14@gmail.com',
    icon: emailOutlineIcon,
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
          <Icon :icon="social.icon" aria-hidden="true" class="size-4" />
        </a>
      </div>
    </footer>
  </aside>
</template>
