<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AsideMenu from './components/AsideMenu.vue'

const route = useRoute()
const contentPane = useTemplateRef<HTMLElement>('contentPane')

watch(
  () => route.path,
  () => contentPane.value?.scrollTo({ top: 0 }),
  { flush: 'post' },
)
</script>

<template>
  <div class="grid h-dvh grid-cols-4 overflow-hidden">
    <AsideMenu />

    <main
      ref="contentPane"
      class="@container col-span-3 min-h-0 min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain"
      :class="route.name === 'home' ? 'p-0' : 'p-3 md:p-6 lg:p-8'"
      aria-label="Portfolio content"
    >
      <RouterView />
    </main>
  </div>
</template>
