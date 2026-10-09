<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { projects } from '@/data/projects'

defineOptions({ name: 'PortfolioProjects' })

const activeIndex = ref<number | null>(null)
const visibleIndex = ref<number | null>(null)

const visibleProject = computed(() =>
  visibleIndex.value === null ? null : projects[visibleIndex.value]!,
)

const projectStack = (project: (typeof projects)[number]) =>
  project.technical.engine ?? project.technical.framework ?? 'Interface systems'

const activateProject = (index: number) => {
  activeIndex.value = index

  if (visibleIndex.value === index) return

  visibleIndex.value = index
}

const clearActiveProject = () => {
  activeIndex.value = null
}

onMounted(() => {
  projects.forEach(({ temporaryImage }) => {
    const image = new Image()
    image.src = temporaryImage.src
  })
})
</script>

<template>
  <section
    class="projects-scene bg-project-background text-project-foreground relative isolate flex min-h-full flex-col overflow-hidden"
    aria-labelledby="projects-title"
    @mouseleave="clearActiveProject"
  >
    <figure class="project-neutral absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <img
        v-if="visibleProject"
        :key="visibleProject.title"
        :src="visibleProject.temporaryImage.src"
        alt=""
        class="project-photo absolute inset-0 h-full w-full object-cover"
        :class="activeIndex !== null ? 'project-photo--active' : 'project-photo--neutral'"
      />
      <div class="bg-project-background/35 absolute inset-0" />
      <div class="bg-project-tone absolute inset-0 opacity-75 mix-blend-color" />
      <div class="project-vignette absolute inset-0" />
      <div class="project-grain absolute inset-0 opacity-35" />
    </figure>

    <header
      class="border-project-foreground/35 relative z-10 flex items-start justify-between border-b px-4 py-4 font-mono text-[0.62rem] tracking-[0.22em] uppercase sm:px-6 lg:px-10"
    >
      <div>
        <p class="text-project-foreground/65">Index / Selected work</p>
        <h2 id="projects-title" class="text-project-highlight mt-1 text-xs font-medium sm:text-sm">
          Projects
        </h2>
      </div>
      <p class="text-project-foreground/65 text-right">
        {{ String(projects.length).padStart(2, '0') }} entries<br />2026
      </p>
    </header>

    <div class="relative z-10 my-auto w-full px-4 py-14 sm:px-6 lg:px-10">
      <div
        class="border-project-foreground/50 text-project-foreground/65 hidden grid-cols-[minmax(0,2.2fr)_minmax(7rem,.9fr)_minmax(9rem,1fr)_minmax(6.5rem,.65fr)] border-b px-3 pb-3 font-mono text-[0.58rem] tracking-[0.2em] uppercase md:grid"
        aria-hidden="true"
      >
        <span>Project</span>
        <span>Type</span>
        <span>Stack</span>
        <span class="text-right">Status</span>
      </div>

      <ol class="border-project-foreground/50 border-b">
        <li v-for="(project, index) in projects" :key="project.title">
          <button
            type="button"
            class="project-row border-project-foreground/35 focus-visible:outline-project-highlight group grid w-full cursor-pointer grid-cols-[2.25rem_minmax(0,1fr)] items-center border-t px-3 py-4 text-left transition-[color,background-color,opacity,padding] duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] md:grid-cols-[minmax(0,2.2fr)_minmax(7rem,.9fr)_minmax(9rem,1fr)_minmax(6.5rem,.65fr)] md:py-5"
            :class="[
              activeIndex === index
                ? 'bg-project-foreground text-project-background md:px-5'
                : 'text-project-highlight hover:bg-project-foreground/10',
              activeIndex !== null && activeIndex !== index ? 'opacity-35' : 'opacity-100',
            ]"
            :aria-pressed="activeIndex === index"
            @mouseenter="activateProject(index)"
            @focus="activateProject(index)"
            @click="activateProject(index)"
            @blur="clearActiveProject"
          >
            <span class="contents md:block">
              <span
                class="font-mono text-[0.6rem] tracking-[0.12em] opacity-60 md:mr-4 md:inline-block"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span
                class="text-[clamp(1rem,1.75vw,1.55rem)] leading-none font-semibold tracking-[-0.035em] uppercase"
              >
                {{ project.title }}
              </span>
            </span>

            <span class="hidden font-mono text-xs tracking-[0.06em] uppercase md:block">
              {{ project.type }}
            </span>
            <span class="hidden font-mono text-xs tracking-[0.06em] uppercase md:block">
              {{ projectStack(project) }}
            </span>
            <span class="hidden text-right font-mono text-xs tracking-[0.06em] uppercase md:block">
              {{ project.technical.status }}
            </span>

            <span
              class="col-start-2 mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.6rem] tracking-[0.08em] uppercase opacity-70 md:hidden"
            >
              <span>{{ project.type }}</span>
              <span aria-hidden="true">/</span>
              <span>{{ projectStack(project) }}</span>
              <span aria-hidden="true">/</span>
              <span>{{ project.technical.status }}</span>
            </span>
          </button>
        </li>
      </ol>
    </div>

    <footer
      class="border-project-foreground/35 relative z-10 flex flex-col items-start justify-between gap-3 border-t px-4 py-4 font-mono text-[0.58rem] tracking-[0.12em] uppercase sm:flex-row sm:items-end sm:gap-6 sm:px-6 lg:px-10"
    >
      <p class="text-project-highlight/75 max-w-xl leading-relaxed">
        {{
          visibleProject?.description ??
          'Move across the index to preview the atmosphere of each project.'
        }}
      </p>
      <a
        v-if="visibleProject"
        :href="visibleProject.temporaryImage.source"
        target="_blank"
        rel="noreferrer"
        class="text-project-foreground/60 decoration-project-foreground/35 hover:text-project-highlight focus-visible:outline-project-highlight shrink-0 text-right underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        Temporary image<br />{{ visibleProject.temporaryImage.credit }}
      </a>
    </footer>
  </section>
</template>

<style scoped>
.project-photo {
  opacity: 1;
  filter: grayscale(1) contrast(1.42) brightness(0.72);
  transform: scale(1.18);
}

.project-photo--active {
  transform: scale(1);
  animation: project-photo-zoom-out 2s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.project-photo--neutral {
  opacity: 0;
  transform: scale(1.18);
  transition:
    opacity 1.2s ease,
    transform 2s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-neutral {
  background:
    radial-gradient(
      circle at 62% 42%,
      color-mix(in srgb, var(--color-project-tone) 24%, transparent),
      transparent 42%
    ),
    linear-gradient(
      135deg,
      var(--color-project-background),
      color-mix(in srgb, var(--color-project-tone) 12%, var(--color-project-background))
    );
}

.project-grain {
  background-image:
    radial-gradient(
      color-mix(in srgb, var(--color-project-highlight) 32%, transparent) 0.65px,
      transparent 0.75px
    ),
    radial-gradient(
      color-mix(in srgb, var(--color-project-background) 55%, transparent) 0.7px,
      transparent 0.85px
    );
  background-position:
    0 0,
    3px 3px;
  background-size: 6px 6px;
  mix-blend-mode: soft-light;
}

.project-vignette {
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-project-background) 88%, transparent) 0%,
    color-mix(in srgb, var(--color-project-background) 30%, transparent) 44%,
    color-mix(in srgb, var(--color-project-background) 68%, transparent) 100%
  );
}

@keyframes project-photo-zoom-out {
  from {
    transform: scale(1.18);
  }

  to {
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-photo,
  .project-row {
    transition-duration: 0.01ms;
  }

  .project-photo--active {
    animation-duration: 0.01ms;
  }
}
</style>
