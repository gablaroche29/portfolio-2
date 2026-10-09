<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<Project>()
</script>

<template>
  <article
    class="group border-text bg-bg relative flex min-h-56.25 flex-col border transition-all duration-200 hover:shadow-[4px_4px_0px_0px_rgba(var(--text-rgb),1)]"
  >
    <div
      class="border-text bg-text text-bg group-hover:bg-bg group-hover:text-text flex h-9 shrink-0 items-center justify-between border-b px-3 transition-colors"
    >
      <div class="flex items-center gap-2">
        <div
          class="border-bg group-hover:border-text flex h-3 w-3 items-center justify-center border"
        >
          <div class="bg-bg group-hover:bg-text h-1 w-1" />
        </div>
        <span class="font-mono text-[10px] font-bold tracking-widest uppercase"
          >{{ type }}.exe</span
        >
      </div>
      <div class="border-bg group-hover:border-text h-2.5 w-2.5 rounded-full border" />
    </div>

    <div class="flex flex-1 flex-col p-5">
      <div class="space-y-4">
        <div class="space-y-1">
          <h3 class="text-xl leading-none font-bold tracking-tighter uppercase">{{ title }}</h3>
          <div class="bg-text h-0.5 w-8 transition-all duration-500 group-hover:w-full" />
        </div>
        <p class="text-text/80 line-clamp-3 font-mono text-sm leading-snug italic">
          // {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>
