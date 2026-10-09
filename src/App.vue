<template>
  <div>
    <Navbar />
    <div class="max-w-7xl p-8 mx-auto flex flex-col justify-center">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>