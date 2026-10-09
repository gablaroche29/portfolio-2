<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HeroVisual from './HeroVisual.vue'

defineOptions({ name: 'PortfolioHero' })

const text = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const fullText = 'Gabriel'
let timer: ReturnType<typeof setTimeout> | undefined

function scheduleNextStep() {
  const delay = isDeleting.value
    ? text.value.length > 0
      ? 50
      : 500
    : text.value.length === fullText.length
      ? 3000
      : 150

  timer = setTimeout(() => {
    if (!isDeleting.value && text.value.length < fullText.length) {
      text.value = fullText.slice(0, text.value.length + 1)
    } else if (!isDeleting.value) {
      isDeleting.value = true
    } else if (text.value.length > 0) {
      text.value = fullText.slice(0, text.value.length - 1)
    } else {
      isDeleting.value = false
      loopNum.value += 1
    }
    scheduleNextStep()
  }, delay)
}

onMounted(scheduleNextStep)
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section
    class="max-w-content border-text relative mx-auto flex flex-col items-center gap-12 overflow-hidden border-b px-6 py-20 md:flex-row md:py-32"
  >
    <div class="relative z-10 flex-1 space-y-6">
      <div
        class="border-text mb-4 inline-flex items-center gap-2 border px-3 py-1 text-[10px] tracking-[0.3em] uppercase"
      >
        <span class="bg-text h-2 w-2 animate-pulse" />
        [ System Status: {{ isDeleting ? 'Reloading' : 'Running' }} ]
      </div>

      <h1
        class="flex min-h-[1.2em] flex-col text-6xl leading-none font-black tracking-tighter uppercase md:text-9xl"
      >
        Hi, I’m <br class="md:hidden" />
        <span
          class="text-outline-text transition-all duration-75"
          :style="{ WebkitTextStroke: '2px black', color: isDeleting ? 'black' : 'transparent' }"
        >
          {{ text }}
          <span
            class="bg-text ml-2 inline-block h-10 w-3 align-middle md:h-20 md:w-6"
            :class="isDeleting ? 'animate-none opacity-20' : 'animate-pulse'"
          />
        </span>
      </h1>

      <p
        class="border-text/10 max-w-xl border-t pt-6 font-mono text-lg leading-relaxed italic md:text-xl"
      >
        &gt; Étudiant en développement informatique, passionné par la création de projets, autant en
        développement web qu'en jeu vidéo.
      </p>
    </div>

    <div class="relative flex aspect-square w-full items-center justify-center md:w-100">
      <div class="border-text/20 pointer-events-none absolute inset-0 border">
        <div class="border-text absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2" />
        <div class="border-text absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2" />
        <div class="border-text absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2" />
        <div class="border-text absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2" />
      </div>

      <div class="absolute top-4 left-4 font-mono text-[9px] leading-tight uppercase opacity-40">
        Object: Core_Node_01<br />
        Render: Wireframe_Active<br />
        Cycle: {{ loopNum }}
      </div>

      <div class="h-full w-full opacity-90 contrast-125">
        <HeroVisual />
      </div>
    </div>
  </section>
</template>
