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
let pointerFrame: number | undefined

const interactiveDitheringFragmentShader = ditheringFragmentShader
  .replace(
    'uniform float u_type;',
    `uniform float u_type;
uniform vec2 u_pointer;
uniform float u_pointerStrength;`,
  )
  .replace(
    'vec2 shapeUV = normalizedUV;',
    `vec2 shapeUV = normalizedUV;
  vec2 pointerDelta = normalizedUV - u_pointer;
  float pointerDistance = length(pointerDelta);
  float pointerInfluence = (1. - smoothstep(0., .32, pointerDistance)) * u_pointerStrength;
  shapeUV += pointerDelta / max(pointerDistance, .001) * pointerInfluence * .07;`,
  )
  .replace(
    'int type = int(floor(u_type));',
    `shape = clamp(shape + pointerInfluence * .24, 0., 1.);

  int type = int(floor(u_type));`,
  )

const getThemeColor = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim()

const updatePointer = (event: PointerEvent) => {
  if (event.pointerType === 'touch' || reducedMotion?.matches) return

  const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const pointer: [number, number] = [
    (event.clientX - bounds.left) / bounds.width - 0.5,
    0.5 - (event.clientY - bounds.top) / bounds.height,
  ]

  if (pointerFrame !== undefined) cancelAnimationFrame(pointerFrame)
  pointerFrame = requestAnimationFrame(() => {
    shader?.setUniforms({ u_pointer: pointer, u_pointerStrength: 1 })
    pointerFrame = undefined
  })
}

const resetPointer = () => {
  if (pointerFrame !== undefined) cancelAnimationFrame(pointerFrame)
  pointerFrame = undefined
  shader?.setUniforms({ u_pointerStrength: 0 })
}

const updateMotion = () => {
  shader?.setSpeed(reducedMotion?.matches ? 0 : 0.1)
  if (reducedMotion?.matches) resetPointer()
}

onMounted(() => {
  const container = shaderContainer.value
  if (!container) return

  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  try {
    shader = new ShaderMount(
      container,
      interactiveDitheringFragmentShader,
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
        u_pointer: [2, 2],
        u_pointerStrength: 0,
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
  if (pointerFrame !== undefined) cancelAnimationFrame(pointerFrame)
  reducedMotion?.removeEventListener('change', updateMotion)
  shader?.dispose()
})
</script>

<template>
  <section
    class="bg-aside-background relative h-full min-h-full overflow-hidden"
    aria-label="Home"
    @pointermove="updatePointer"
    @pointerleave="resetPointer"
    @pointercancel="resetPointer"
  >
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
