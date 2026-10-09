export type Project = {
  title: string
  description: string
  subtitle: string
  type: string
  overview: string
  features: string[]
  media?: {
    type: 'video' | 'image'
    src: string
  }
  technical: {
    engine?: string
    framework?: string
    genre?: string
    focus: string
    status: string
  }
  outcome: string
  temporaryImage: {
    src: string
    alt: string
    credit: string
    source: string
  }
}

export const projects: Project[] = [
  {
    title: 'Top-Down Dungeon Prototype',
    description: 'Combat-focused action RPG prototype built in Godot.',
    subtitle:
      'Combat-focused action RPG prototype exploring enemy behavior and system-driven difficulty.',
    type: 'Game Project',
    overview:
      'This project explores responsive top-down combat with a focus on readability, enemy telegraphing, and moment-to-moment feedback.',
    features: [
      'Directional attacks with animation-based timing',
      'Enemy AI using state machines',
      'Modular stats and difficulty scaling',
    ],
    technical: {
      engine: 'Godot 4',
      genre: 'Action RPG',
      focus: 'Combat Systems',
      status: 'Prototype',
    },
    outcome:
      'This project strengthened my understanding of combat feedback loops and reinforced the importance of clarity in enemy behavior.',
    temporaryImage: {
      src: '/images/projects/dungeon.jpg',
      alt: 'A building washed in purple light at night',
      credit: 'the blowup',
      source:
        'https://unsplash.com/photos/purple-and-brown-building-with-lights-turned-on-during-night-time-1mdNAaReCRE',
    },
  },
  {
    title: 'Minimal Portfolio Platform',
    description: 'Monochrome portfolio inspired by Stripe.dev.',
    subtitle: 'High-performance web architecture focusing on typography and whitespace.',
    type: 'Web Project',
    overview:
      'A performance-first portfolio template designed for developers, emphasizing content hierarchy and clean typography inspired by modern documentation sites.',
    features: [
      'Dynamic MDX routing',
      'Custom CSS variable-based theming',
      'Optimized Core Web Vitals',
    ],
    technical: {
      framework: 'Next.js / Tailwind',
      focus: 'Front-end Performance',
      status: 'Live',
    },
    outcome:
      'Achieved a 100/100 Lighthouse score while maintaining a unique, high-contrast aesthetic.',
    temporaryImage: {
      src: '/images/projects/portfolio.jpg',
      alt: 'Computer hardware lit by a purple screen',
      credit: 'Samsung Memory',
      source: 'https://unsplash.com/photos/a-computer-with-a-purple-screen-kdSo_WwGN-0',
    },
  },
  {
    title: 'UI System for Indie Games',
    description: 'Reusable UI rules and layouts for game menus.',
    subtitle: 'A standardized design system for game interfaces across different resolutions.',
    type: 'UI / UX',
    overview:
      'A comprehensive UI kit built to solve common interface problems in indie development, such as inventory management and settings menus.',
    features: [
      'Responsive flexbox layouts for game HUDs',
      'Gamepad-ready navigation logic',
      'Scalable vector-based icons',
    ],
    technical: {
      framework: 'Figma / React-Three-Fiber',
      focus: 'User Experience',
      status: 'In Progress',
    },
    outcome:
      'Successfully created a workflow that bridges the gap between high-fidelity design and in-engine implementation.',
    temporaryImage: {
      src: '/images/projects/ui-system.jpg',
      alt: 'A close view of text on a purple computer screen',
      credit: 'Jonathan Kemper',
      source:
        'https://unsplash.com/photos/a-close-up-of-a-computer-screen-with-a-purple-background-N8AYH8R2rWQ',
    },
  },
]
