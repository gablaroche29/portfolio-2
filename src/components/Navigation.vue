<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

defineOptions({ name: 'PortfolioNavigation' })

const route = useRoute()
const pathname = computed(() => route.path.replace(/\/$/, '') || '/')
const links = [
  { href: '/', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/events', label: 'Events' },
]
</script>

<template>
  <nav aria-label="Portfolio" class="flex flex-col gap-3 [@media(max-height:450px)]:gap-2">
    <RouterLink
      v-for="{ href, label } in links"
      :key="href"
      :to="href"
      :aria-current="pathname === href ? 'page' : undefined"
      class="border p-[clamp(0.375rem,1vw,0.75rem)] text-left font-mono text-[clamp(0.625rem,1.2vw,0.875rem)] tracking-wider uppercase transition-colors"
      :class="
        pathname === href
          ? 'bg-text text-bg border-text'
          : 'border-text/30 hover:border-text text-text/50 hover:text-text'
      "
    >
      {{ label }}
    </RouterLink>
  </nav>
</template>
