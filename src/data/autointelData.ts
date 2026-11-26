import { CarFront, ShieldCheck, RadioTower, Database } from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

export type ProjectStatus =
  'Operational foundation' | 'Connected' | 'Planned' | 'In Progress'

export type ArchitectureLayer = {
  number: string
  name: string
  icon: LucideIcon
  status: ProjectStatus
  description: string
  technologies: string[]
}

export type AnalyticsItem = {
  number: string
  title: string
  text: string
}

export type ContentItem = {
  title: string
  text: string
}

export const architecture: ArchitectureLayer[] = [
  {
    number: '01',
    name: 'Vehicle edge',
    icon: CarFront,
    status: 'Operational foundation',
    description:
      'An Android Automotive application provides the vehicle-side telemetry source, collecting application activity and supported vehicle-related events for downstream fleet analytics.',
    technologies: [
      'Android Automotive OS',
      'Kotlin',
      'Vehicle APIs',
      'Application events',
    ],
  },
  {
    number: '02',
    name: 'Secure ingestion',
    icon: ShieldCheck,
    status: 'Connected',
    description:
      'The service publishes telemetry using MQTT to AWS IoT Core. Device authentication uses X.509 certificates to establish a trusted connection.',
    technologies: [
      'MQTT',
      'AWS IoT Core',
      'X.509 certificates',
      'IoT policies and rules',
    ],
  },
  {
    number: '03',
    name: 'Cloud data pipeline',
    icon: RadioTower,
    status: 'Connected',
    description:
      'The cloud pipeline connects Amazon Kinesis, Amazon S3, and AWS Lambda to ingest, store, and process telemetry for centralized fleet analytics.',
    technologies: ['Amazon Kinesis', 'Amazon S3', 'AWS Lambda'],
  },
  {
    number: '04',
    name: 'Analytics & Visualization',
    icon: Database,
    status: 'Connected',
    description:
      'Amazon Athena provides query access to telemetry stored in S3, while Amazon QuickSight turns that data into dashboards for exploring AutoIntel vehicle telemetry and fleet analytics.',
    technologies: [
      'Amazon Athena',
      'Amazon QuickSight',
      'Analytics dashboards',
    ],
  },
]

export const fleetAnalytics: AnalyticsItem[] = [
  {
    number: '01',
    title: 'Vehicle activity',
    text: 'Explore vehicle activity and usage patterns through telemetry collected from connected vehicles.',
  },
  {
    number: '02',
    title: 'HVAC usage',
    text: 'Analyze climate-control activity and HVAC usage patterns across individual vehicles and the fleet.',
  },
  {
    number: '03',
    title: 'Application activity',
    text: 'Understand infotainment application usage and interaction patterns through application event telemetry.',
  },
  {
    number: '04',
    title: 'Fleet-wide event trends',
    text: 'Visualize aggregated telemetry events across the fleet to identify broader activity patterns and operational trends.',
  },
]

export const contributions: ContentItem[] = [
  {
    title: 'Android Automotive application',
    text: 'Explored the existing application and its vehicle-facing functionality, including its use of Android Car APIs and vehicle property managers.',
  },
  {
    title: 'Platform and dependency modernization',
    text: 'Worked through dependency updates, including upgrading ExoPlayer and moving Room and Glide compiler processing to KAPT.',
  },
  {
    title: 'Automotive emulator validation',
    text: 'Set up and validated the application in an Android Automotive OS emulator, including privileged-app installation and car-service availability checks.',
  },
  {
    title: 'Cloud telemetry integration',
    text: 'Worked with the MQTT-to-AWS IoT Core flow and the connected Kinesis, S3, Lambda and Athena components.',
  },
]

export const roadmap: ContentItem[] = [
  {
    title: 'Expand fleet analytics coverage',
    text: 'Add more telemetry dimensions, event categories, and dashboard views for automotive and fleet stakeholders.',
  },
  {
    title: 'Advanced fleet intelligence',
    text: 'Explore machine-learning workflows for predictive analytics, anomaly detection, and deeper fleet insights.',
  },
  {
    title: 'Extend the platform',
    text: 'Evaluate additional services for application-level data management, machine-learning workloads, and event notifications.',
  },
]
