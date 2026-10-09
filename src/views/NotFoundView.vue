<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const dots = ref('')
const errorBackground = Array(200)
  .fill('ERROR_404_PAGE_NOT_FOUND_SYSTEM_FAILURE_REBOOT_REQUIRED_')
  .join(' ')
let interval: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  interval = setInterval(() => {
    dots.value = dots.value.length < 3 ? `${dots.value}.` : ''
  }, 500)
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <div
    class="bg-text text-bg flex min-h-screen flex-col items-center justify-center overflow-hidden p-8 font-mono"
  >
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden text-[10px] leading-none break-all opacity-10 select-none"
    >
      {{ errorBackground }}
    </div>

    <div
      class="border-bg relative z-10 w-full max-w-2xl border-2 p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:p-12"
    >
      <div class="mb-8 flex items-center gap-4">
        <div class="bg-bg text-text animate-pulse px-3 py-1 text-xl font-black">FATAL_ERROR</div>
        <span class="text-xs tracking-[0.4em] uppercase">Stop Code: 0x00000404</span>
      </div>

      <h1 class="mb-6 text-4xl leading-none font-black tracking-tighter uppercase md:text-6xl">
        Kernel_Panic: <br />
        Path_Not_Found
      </h1>

      <div class="border-bg/30 space-y-4 border-t pt-6 text-sm md:text-base">
        <p>&gt; A fatal exception has occurred at 0x404:PAGE_MISSING.</p>
        <p>&gt; The requested resource does not exist or has been moved to a secure sector.</p>
        <p>&gt; System check: [FAILED]</p>
      </div>

      <div class="mt-12 flex flex-col items-center gap-6 md:flex-row">
        <RouterLink
          to="/"
          class="bg-bg text-text w-full px-8 py-4 text-center font-bold tracking-widest uppercase transition-opacity hover:opacity-80 md:w-auto"
        >
          Reboot System (Home)
        </RouterLink>
        <span class="text-[10px] uppercase opacity-60">Attempting auto-recovery{{ dots }}</span>
      </div>
    </div>

    <div
      class="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_2px,3px_100%]"
    />
  </div>
</template>
