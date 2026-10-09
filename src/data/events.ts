export type PortfolioEvent = {
  date: string
  title: string
  role: string
  result: string
}

export const events: PortfolioEvent[] = [
  { date: '2025.10', title: 'Global Game Jam', role: 'Lead Programmer', result: 'Top 3 Finalist' },
  {
    date: '2025.06',
    title: 'React Summit',
    role: 'Attendee',
    result: 'Workshop: Advanced Patterns',
  },
  { date: '2024.12', title: 'Internal Hackathon', role: 'Fullstack Dev', result: 'First Place' },
]
