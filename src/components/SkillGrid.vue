<script setup lang="ts">
import { computed, ref } from 'vue'
import SectionHeader from './SectionHeader.vue'
import SkillCard from './SkillCard.vue'
import { skills } from '@/data/skills'

const categories = ['All', ...new Set(skills.map((skill) => skill.category))]
const activeCategory = ref('All')
const filteredSkills = computed(() =>
  activeCategory.value === 'All'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory.value),
)
</script>

<template>
  <section id="skill" class="space-y-6" aria-label="Skills">
    <SectionHeader title="02_Compétences" />

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

    <div
      class="border-text grid grid-cols-1 gap-0 border-t border-l @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4"
    >
      <SkillCard
        v-for="(skill, index) in filteredSkills"
        :key="skill.name"
        :skill="skill"
        :index="index"
      />
    </div>
  </section>
</template>
