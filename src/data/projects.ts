export type Project = {
  number: string
  title: string
  type: string
  status: string
  description: string
  tags: string[]
  href: string
  featured: boolean
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'AutoIntel',
    type: 'Connected-vehicle data platform',
    status: 'Core pipeline operational',
    description:
      'A B2B connected-vehicle intelligence and fleet analytics platform. Processes vehicle telemetry through an AWS data pipeline and delivers vehicle-level and fleet-wide insights through Amazon Athena and QuickSight.',
    tags: [
      'Android Automotive',
      'MQTT',
      'AWS IoT Core',
      'Amazon Kinesis',
      'Amazon S3',
      'AWS Lambda',
      'Amazon Athena',
      'AWS QuickSight',
    ],
    href: 'autointel.html',
    featured: true,
  },
  {
    number: '02',
    title: 'AgentForge',
    type: 'LLM agent framework',
    status: 'Core framework implemented',
    description:
      'A modular framework for building tool-using AI agents, with agent abstractions, model integration, memory, tool registration and ReAct-based execution.',
    tags: [
      'Python',
      'LLMs',
      'Groq',
      'Agent Architecture',
      'Memory Systems',
      'Tool Calling',
      'ReAct',
    ],
    href: 'https://github.com/shagunshivam01/agentforge',
    featured: true,
  },
  {
    number: '03',
    title: 'ML Starter Pack',
    type: 'Machine learning projects',
    status: 'Independently developed',
    description:
      'A collection of practical machine-learning projects, including an end-to-end sentiment analysis application and a food image classification workflow.',
    tags: [
      'Python',
      'Scikit-learn',
      'NLP',
      'Computer Vision',
      'Flask',
      'Model Fine-tuning',
    ],
    href: 'https://github.com/shagunshivam01/ml-starter-pack',
    featured: false,
  },
]
