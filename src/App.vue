<script setup lang="ts">
import { computed, useTemplateRef, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AsideMenu from './components/AsideMenu.vue'

const route = useRoute()
const contentPane = useTemplateRef<HTMLElement>('contentPane')
const isHome = computed(() => route.name === 'home')

watch(
  () => route.path,
  () => contentPane.value?.scrollTo({ top: 0 }),
  { flush: 'post' },
)
</script>

<template>
  <div
    class="grid h-dvh overflow-hidden transition-[grid-template-columns] duration-500 ease-in-out motion-reduce:transition-none"
    :class="isHome ? 'grid-cols-[50%_50%]' : 'grid-cols-[25%_75%]'"
  >
    <AsideMenu />

    <main
      ref="contentPane"
      class="@container min-h-0 min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain"
      :class="['home', 'projects'].includes(String(route.name)) ? 'p-0' : 'p-3 md:p-6 lg:p-8'"
      aria-label="Portfolio content"
    >
      <RouterView />
    </main>
  </div>
</template>
