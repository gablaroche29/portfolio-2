<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import {
  DitheringShapes,
  DitheringTypes,
  ShaderFitOptions,
  ShaderMount,
  ditheringFragmentShader,
  getShaderColorFromString,
} from '@paper-design/shaders'

defineOptions({ name: 'DitheredHome' })

const shaderContainer = useTemplateRef<HTMLDivElement>('shaderContainer')
const shaderUnavailable = ref(false)
let shader: ShaderMount | undefined
let reducedMotion: MediaQueryList | undefined

const updateMotion = () => shader?.setSpeed(reducedMotion?.matches ? 0 : 0.1)
const getThemeColor = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

onMounted(() => {
  const container = shaderContainer.value
  if (!container) return

  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  try {
    shader = new ShaderMount(
      container,
      ditheringFragmentShader,
      {
        u_colorBack: getShaderColorFromString(getThemeColor('--color-aside-background')),
        u_colorFront: getShaderColorFromString(getThemeColor('--color-home-shader')),
        u_shape: DitheringShapes.simplex,
        u_type: DitheringTypes['4x4'],
        u_pxSize: 3,
        u_fit: ShaderFitOptions.cover,
        u_scale: 0.8,
        u_rotation: 0,
        u_originX: 0.5,
        u_originY: 0.5,
        u_offsetX: 0,
        u_offsetY: 0,
        u_worldWidth: 0,
        u_worldHeight: 0,
      },
      undefined,
      reducedMotion.matches ? 0 : 0.1,
      0,
      1,
      2_073_600,
    )
    reducedMotion.addEventListener('change', updateMotion)
  } catch (error) {
    shaderUnavailable.value = true
    console.error('Unable to initialize the home shader.', error)
  }
})

onBeforeUnmount(() => {
  reducedMotion?.removeEventListener('change', updateMotion)
  shader?.dispose()
})
</script>

<template>
  <section class="bg-aside-background relative h-full min-h-full overflow-hidden" aria-label="Home">
    <div
      ref="shaderContainer"
      class="absolute inset-0 [&>canvas]:block [&>canvas]:size-full"
      :class="{ 'home-shader-fallback': shaderUnavailable }"
      aria-hidden="true"
    />
    <div aria-hidden="true" class="home-shader-vignette pointer-events-none absolute inset-0" />
    <div
      aria-hidden="true"
      class="home-shader-scanlines pointer-events-none absolute inset-0 opacity-20"
    />
    <p class="sr-only">Gabriel Laroche — Game and Web Developer.</p>
  </section>
</template>
