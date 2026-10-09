<script setup lang="ts">
import { computed, ref } from 'vue'
import SectionHeader from '../SectionHeader.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/projects'

defineOptions({ name: 'PortfolioProjects' })

const categories = ['All', ...new Set(projects.map((project) => project.type))]
const activeCategory = ref('All')
const filteredProjects = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter((project) => project.type === activeCategory.value),
)
</script>

<template>
  <section id="work" class="space-y-6" aria-label="Projects">
    <SectionHeader title="01_Projets" />

    <div class="flex flex-wrap gap-4">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        :aria-pressed="activeCategory === category"
        class="cursor-pointer border px-4 py-2 font-mono text-sm tracking-wider uppercase transition-all duration-300"
        :class="
          activeCategory === category
            ? 'bg-text text-bg border-text'
            : 'border-text/30 hover:border-text text-text/50 hover:text-text'
        "
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="grid grid-cols-1 gap-6 @lg:grid-cols-2 @4xl:grid-cols-3">
      <ProjectCard v-for="project in filteredProjects" :key="project.title" v-bind="project" />
    </div>
  </section>
</template>
