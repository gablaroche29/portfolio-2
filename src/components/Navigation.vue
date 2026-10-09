<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineOptions({ name: 'PortfolioNavigation' })

const route = useRoute()
const pathname = computed(() => route.path.replace(/\/$/, '') || '/')
const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/events', label: 'Events' },
]
</script>

<template>
  <nav aria-label="Portfolio" class="border-aside-border w-full border-y">
    <RouterLink
      v-for="{ href, label } in links"
      :key="href"
      :to="href"
      :aria-current="pathname === href ? 'page' : undefined"
      class="border-aside-border focus-visible:outline-aside-accent group relative flex min-w-0 items-center justify-between gap-2 border-b px-1 py-[clamp(0.65rem,1.5vh,1rem)] text-left text-[clamp(0.65rem,1.25vw,0.95rem)] font-semibold tracking-[0.14em] uppercase transition-colors last:border-b-0 focus-visible:z-10 focus-visible:outline-2"
      :class="
        pathname === href
          ? 'bg-aside-accent text-aside-background px-3'
          : 'text-aside-muted hover:text-aside-foreground hover:px-3'
      "
    >
      <span class="truncate">{{ label }}</span>
    </RouterLink>
  </nav>
</template>
