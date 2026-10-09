<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SRGBColorSpace,
  TorusKnotGeometry,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const container = useTemplateRef<HTMLDivElement>('container')
let dispose: (() => void) | undefined

onMounted(() => {
  const element = container.value
  if (!element) return

  const scene = new Scene()
  const camera = new PerspectiveCamera(45, 1, 0.1, 1000)
  camera.position.set(0, 0, 5)

  const renderer = new WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = SRGBColorSpace
  renderer.toneMapping = ACESFilmicToneMapping
  renderer.domElement.style.display = 'block'
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  element.appendChild(renderer.domElement)

  scene.add(new AmbientLight(0xffffff, Math.PI / 2))
  const light = new PointLight(0xffffff, Math.PI)
  light.position.set(10, 10, 10)
  scene.add(light)

  const geometry = new TorusKnotGeometry(1.5, 0.4, 100, 16)
  const material = new MeshStandardMaterial({
    color: 'black',
    wireframe: true,
    transparent: true,
    opacity: 0.8,
  })
  const mesh = new Mesh(geometry, material)
  const floatingGroup = new Group()
  floatingGroup.add(mesh)
  scene.add(floatingGroup)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.enablePan = false
  controls.enableDamping = true

  const resize = () => {
    const { width, height } = element.getBoundingClientRect()
    if (!width || !height) return
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(element)
  resize()

  const offset = Math.random() * 10000
  let previousTime = performance.now()
  let elapsed = 0

  renderer.setAnimationLoop((time) => {
    const delta = Math.max(0, (time - previousTime) / 1000)
    previousTime = time
    elapsed += delta
    mesh.rotation.y += delta * 0.3
    mesh.rotation.x += delta * 0.2

    const phase = ((offset + elapsed) / 4) * 2
    floatingGroup.rotation.set(
      (Math.cos(phase) / 8) * 0.5,
      (Math.sin(phase) / 8) * 0.5,
      (Math.sin(phase) / 20) * 0.5,
    )
    floatingGroup.position.y = (Math.sin(phase) / 10) * 0.5

    controls.update()
    renderer.render(scene, camera)
  })

  dispose = () => {
    renderer.setAnimationLoop(null)
    resizeObserver.disconnect()
    controls.dispose()
    geometry.dispose()
    material.dispose()
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  }
})

onBeforeUnmount(() => dispose?.())
</script>

<template>
  <div ref="container" class="h-full w-full" />
</template>
