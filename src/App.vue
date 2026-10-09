<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'

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
    <aside
      class="border-text flex min-h-0 min-w-0 flex-col gap-4 border-r p-2 md:p-4 lg:gap-8 lg:p-8 [@media(max-height:450px)]:gap-3"
    >
      <header class="space-y-4 [@media(max-height:450px)]:space-y-2">
        <h1
          class="text-[clamp(1rem,4vw,4rem)] leading-none font-black tracking-tighter uppercase [@media(max-height:450px)]:text-[clamp(1rem,3vw,2rem)]"
        >
          <span class="mb-2 block text-[0.45em]">Hi, I’m</span>
          <span class="text-transparent [-webkit-text-stroke:1px_var(--color-text)]">Gabriel</span>
        </h1>
        <p
          class="font-mono text-[clamp(0.625rem,1.1vw,0.875rem)] tracking-wide wrap-anywhere uppercase"
        >
          Game &amp; Web Developer Portfolio
        </p>
        <p
          class="border-text/10 hidden border-t pt-4 font-mono text-sm leading-relaxed italic lg:block [@media(max-height:600px)]:hidden"
        >
          &gt; Étudiant en développement informatique, passionné par la création de projets, autant
          en développement web qu'en jeu vidéo.
        </p>
      </header>
      <Navigation />
    </aside>

    <main
      ref="contentPane"
      class="@container col-span-3 min-h-0 min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain p-3 md:p-6 lg:p-8"
      aria-label="Portfolio content"
    >
      <RouterView />
    </main>
  </div>
</template>
