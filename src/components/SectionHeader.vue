<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="flex shrink-0 items-center gap-4">
    <span class="text-xs tracking-wide uppercase">/ {{ title }}</span>
    <div class="bg-text h-px flex-1" />
  </div>
</template>
