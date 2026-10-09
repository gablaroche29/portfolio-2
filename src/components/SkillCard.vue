<script setup lang="ts">
import type { Skill } from '@/data/skills'

defineProps<{ skill: Skill; index: number }>()
</script>

<template>
  <div
    class="group border-text hover:bg-text hover:text-bg flex min-h-56.25 cursor-crosshair flex-col justify-between border-r border-b p-6 transition-colors duration-300"
  >
    <div class="space-y-8">
      <div class="flex items-start justify-between">
        <span class="border-text group-hover:border-bg border px-2 py-1 font-mono text-xs">
          {{ index < 9 ? `0${index + 1}` : index + 1 }}
        </span>
        <div class="bg-text group-hover:bg-bg h-2 w-2 transition-colors" />
      </div>

      <div>
        <h3 class="mb-2 text-2xl leading-tight font-black tracking-tighter uppercase">
          {{ skill.name }}
        </h3>
        <p class="font-mono text-xs leading-relaxed uppercase opacity-70">
          // {{ skill.description }}
        </p>
      </div>
    </div>

    <div
      class="border-text/10 group-hover:border-bg/20 flex items-end justify-between border-t pt-4"
    >
      <span class="font-mono text-[10px] tracking-widest uppercase">Lvl: {{ skill.level }}</span>
      <span class="font-mono text-[10px] tracking-widest uppercase opacity-50">
        {{ skill.category }}
      </span>
    </div>
  </div>
</template>
