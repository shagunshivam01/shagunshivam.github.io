import { BriefcaseBusiness, Network, Bot, Code2 } from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

export type Path = {
  id: string
  name: string
  role: string
  desc: string
  icon: LucideIcon
  skills: string
  resume: string
}

export type Layer = {
  id: string
  label: string
  title: string
  text: string
  components: string[]
}

export const paths: Path[] = [
  {
    id: '01',
    name: 'The Strategist',
    role: 'Product Management',
    desc: 'Turning technical capability into useful products, clear priorities and measurable outcomes.',
    icon: BriefcaseBusiness,
    skills: 'Discovery · Roadmaps · Product thinking',
    resume: 'product-management.pdf',
  },
  {
    id: '02',
    name: 'The Pathfinder',
    role: 'Forward Deployed & Solutions',
    desc: 'Working at the boundary of customer problems, systems architecture and implementation.',
    icon: Network,
    skills: 'Solution design · Integrations · Cloud',
    resume: 'fde-solutions.pdf',
  },
  {
    id: '03',
    name: 'The Arcanist',
    role: 'AI / ML Engineering',
    desc: 'Building practical intelligence with machine learning, LLM applications and agentic systems.',
    icon: Bot,
    skills: 'ML · LLMs · AI agents',
    resume: 'ai-ml-engineer.pdf',
  },
  {
    id: '04',
    name: 'The Craftsman',
    role: 'Software Engineering',
    desc: 'Engineering reliable software across backend services, mobile systems and connected devices.',
    icon: Code2,
    skills: 'Python · Kotlin · APIs · Systems',
    resume: 'software-engineer.pdf',
  },
]

export const layers: Layer[] = [
  {
    id: 'edge',
    label: '01 / Vehicle edge',
    title: 'Collect at the source',
    text: 'An Android Automotive application runs on the infotainment head unit and gathers vehicle-side and application interaction data. Local configuration and connectivity support the collection workflow.',
    components: [
      'Infotainment head unit',
      'AutoIntel Android app',
      'Vehicle / app telemetry',
      'Wi-Fi network connection',
    ],
  },
  {
    id: 'secure',
    label: '02 / Secure ingestion',
    title: 'Transmit securely',
    text: 'The vehicle-side service publishes telemetry over MQTT to AWS IoT Core, using X.509 certificate authentication for device identity and secure communication.',
    components: ['MQTT', 'AWS IoT Core', 'X.509 certificates', 'IoT Rules'],
  },
  {
    id: 'cloud',
    label: '03 / Cloud data',
    title: 'Store and process',
    text: 'The cloud pipeline connects Amazon Kinesis with Amazon S3 for data ingestion and storage. AWS Lambda supports processing functions in the system.',
    components: ['Amazon Kinesis', 'Amazon S3', 'AWS Lambda'],
  },
  {
    id: 'insight',
    label: '04 / Analytics',
    title: 'Make telemetry queryable',
    text: 'Amazon Athena is connected for querying stored data. Dashboarding and visual reporting are planned next steps; dashboards are not yet live.',
    components: ['Amazon Athena', 'Amazon QuickSight', 'Analytics dashboards'],
  },
  {
    id: 'future',
    label: '05 / Future extensions',
    title: 'Expand the platform',
    text: 'These capabilities were identified as planned extensions, not part of the currently implemented inventory.',
    components: [
      'Amazon SageMaker — ML integration',
      'Amazon DynamoDB — application data',
      'Amazon SNS — notifications',
    ],
  },
]
