<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import { events } from '@/data/events'
</script>

<template>
  <section id="events" class="space-y-6" aria-label="Events">
    <SectionHeader title="03_Évènements" />

    <div class="border-text/20 ml-4 space-y-0 border-l">
      <div
        v-for="event in events"
        :key="`${event.date}-${event.title}`"
        class="group relative pb-12 pl-8"
      >
        <div
          class="border-text bg-bg group-hover:bg-text absolute top-1 -left-1.25 h-2 w-2 border transition-colors"
        />
        <div class="flex flex-col gap-2 @lg:flex-row @lg:items-baseline @lg:gap-8">
          <span class="font-mono text-xs tracking-tighter opacity-50">{{ event.date }}</span>
          <div class="space-y-1">
            <h3
              class="text-xl font-bold tracking-tight uppercase transition-all group-hover:italic"
            >
              {{ event.title }}
            </h3>
            <p class="font-mono text-sm opacity-70">
              &gt; ROLE: {{ event.role }} // RESULT: {{ event.result }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
