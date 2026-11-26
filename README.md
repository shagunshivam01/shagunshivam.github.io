# Shagun Shivam — Personal Portfolio

> Engineering intelligent systems through AI, connected vehicles, cloud infrastructure, and product-oriented thinking.

<p align="center">
  <a href="https://shagunshivam01.github.io/shagunshivam.github.io/">
    <strong>Explore the Live Portfolio ↗</strong>
  </a>
</p>

---

## Overview

This repository contains the source code for my personal portfolio website — a space to showcase my engineering projects, technical explorations, professional interests, and ongoing learning.

The portfolio is designed to communicate more than technical skills. It highlights how I approach engineering problems, design systems, explore emerging technologies, and connect technical implementation with practical outcomes.

Its visual identity, **The Ashen Automaton**, draws subtle inspiration from the worlds of *Dark Souls* and *Lies of P*. It combines dark-fantasy atmosphere, mechanical aesthetics, muted brass accents, ambient effects, and technical interface elements with a clean, professional browsing experience.

### Portfolio Objectives

- Showcase selected engineering projects and technical experiments.
- Explain system architectures, engineering decisions, and implementation challenges.
- Demonstrate practical experience across AI/ML, agentic systems, connected vehicles, and cloud infrastructure.
- Communicate technical capabilities alongside product and problem-solving perspectives.
- Provide an accessible platform for recruiters, collaborators, and fellow engineers.

## Live Website

<badge>Live portfolio</badge>

**Website:** [shagunshivam01.github.io/shagunshivam.github.io](https://shagunshivam01.github.io/shagunshivam.github.io/)

The portfolio currently includes:

| Section | Description |
|---|---|
| Home | Introduction, professional positioning, and portfolio overview. |
| About | Background, interests, and engineering approach. |
| AutoIntel Architecture | Interactive overview of the connected-vehicle data pipeline. |
| Project Archive | Selected projects and technical explorations. |
| AutoIntel Case Study | Dedicated engineering case study documenting the project. |
| Career Paths | Professional interests and career directions. |
| Introduction Video | Personal video introduction. |
| Contact | Professional contact and collaboration information. |

## Featured Projects

### 1. AutoIntel — Connected Vehicle Data Platform

AutoIntel explores a connected-vehicle telemetry and analytics platform designed to collect vehicle-side events, transport them through a cloud data pipeline, and make structured information available for analysis.

**Core architecture**

Vehicle Edge → MQTT → AWS IoT Core → Kinesis → S3 → Lambda → Athena

**Implemented components and integrations**

- Android-based vehicle-side event collection.
- MQTT-based telemetry publishing.
- AWS IoT Core device connectivity.
- X.509 certificate-based device authentication.
- Amazon Kinesis data ingestion.
- Amazon S3 data storage.
- AWS Lambda processing.
- Amazon Athena querying.

**Planned extensions**

- Operational analytics dashboards.
- Amazon QuickSight visualizations.
- Further data services and workflows involving SageMaker, DynamoDB, and SNS.

**Portfolio documentation**

- Interactive architecture overview on the homepage.
- Dedicated AutoIntel engineering case study.
- Engineering challenges, implementation details, delivery status, and future roadmap.

AutoIntel is presented as a B2B connected-vehicle data infrastructure initiative rather than a consumer application.

The portfolio documents the high-level architecture and engineering work without exposing proprietary source code, credentials, private endpoints, or confidential company information.

### 2. AgentForge — Agentic AI

An exploration of agentic AI systems, focusing on the design and implementation of AI agents and their supporting infrastructure.

**Repository:** [AgentForge](https://github.com/shagunshivam01/agentforge)

Refer to the project repository for implementation details and the latest capabilities.

### 3. ML Starter Pack

A machine-learning repository containing learning material, experiments, and starter implementations.

**Repository:** [ML Starter Pack](https://github.com/shagunshivam01/ml-starter-pack)

### 4. Quantum ML

A previous area of exploration involving quantum machine learning. Detailed project documentation and results will be added once the original implementation details can be recovered and verified.

## Technology Stack

| Category | Technology |
|---|---|
| Frontend | React 18 |
| Programming Language | TypeScript |
| Build Tool | Vite 6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Styling | CSS |
| Package Management | npm |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## Application Architecture

The application follows a component-oriented structure, separating page composition, reusable UI components, project-specific components, structured content, and static assets.

### Main Application

The portfolio contains two primary entry points:

- `index.html` — Main portfolio website.
- `autointel.html` — Dedicated AutoIntel entry document.

The frontend entry point is `src/main.tsx`, which initializes the React application.

### Component Organization

The source code is organized into three primary component groups.

**Home components — `src/components/home/`**

Responsible for the homepage experience.

| Component | Responsibility |
|---|---|
| Header.tsx | Main navigation. |
| Hero.tsx | Homepage introduction and primary visual section. |
| About.tsx | Personal and professional background. |
| AutoIntelArchitecture.tsx | Connected-vehicle architecture overview. |
| SystemSnapshot.tsx | Technical system summary. |
| CareerPaths.tsx | Career interests and professional directions. |
| Contact.tsx | Contact section. |
| VideoModal.tsx | Introduction video presentation. |
| Footer.tsx | Website footer. |

**AutoIntel components — `src/components/autointel/`**

Responsible for the dedicated AutoIntel case study.

| Component | Responsibility |
|---|---|
| CaseHeader.tsx | Case study navigation and header. |
| CaseHero.tsx | Project introduction. |
| ProblemSection.tsx | Problem statement and background. |
| ArchitectureSection.tsx | System architecture. |
| EngineeringWorkSection.tsx | Engineering implementation and contributions. |
| EngineeringChallengeSection.tsx | Technical challenges and solutions. |
| DeliveryStatusSection.tsx | Implementation and delivery status. |
| FleetIntelligenceSection.tsx | Fleet analytics and intelligence use cases. |
| RoadmapSection.tsx | Future development direction. |
| TakeawaySection.tsx | Key learnings and outcomes. |
| CaseFooter.tsx | Case study footer. |

**Project components — `src/components/projects/`**

- `ProjectArchive.tsx` — Project archive and project discovery experience.

### Pages and Data

| Path | Responsibility |
|---|---|
| `src/App.tsx` | Main application composition. |
| `src/autointel.tsx` | AutoIntel application composition. |
| `src/pages/case-studies/AutoIntel.tsx` | AutoIntel case study page. |
| `src/data/homeData.ts` | Homepage content data. |
| `src/data/autointelData.ts` | AutoIntel case study data. |
| `src/data/projects.ts` | Project archive data. |
| `src/styles.css` | Global styles. |
| `src/case-study.css` | Case study styling. |

## Repository Structure

```text
.
├── README.md
├── autointel.html
├── index.html
├── package.json
├── package-lock.json
│
├── public/
│   └── assets/
│       ├── images/
│       │   ├── intro-poster.jpg
│       │   └── profile.jpg
│       ├── resumes/
│       │   ├── ai-ml-engineer.pdf
│       │   ├── fde-solutions.pdf
│       │   ├── product-management.pdf
│       │   └── software-engineer.pdf
│       └── video/
│           └── intro.mp4
│
├── src/
│   ├── App.tsx
│   ├── autointel.tsx
│   ├── case-study.css
│   │
│   ├── components/
│   │   ├── autointel/
│   │   ├── home/
│   │   └── projects/
│   │
│   ├── data/
│   │   ├── autointelData.ts
│   │   ├── homeData.ts
│   │   └── projects.ts
│   │
│   ├── main.tsx
│   ├── pages/
│   │   └── case-studies/
│   │       └── AutoIntel.tsx
│   ├── styles.css
│   └── vite-env.d.ts
│
├── tsconfig.app.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 20 or later.
- npm.

### 1. Clone the repository

```bash
git clone https://github.com/shagunshivam01/shagunshivam.github.io.git

cd shagunshivam.github.io
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Start the development server

```bash
npm run dev
```

Vite will display the local development URL in your terminal.

### 4. Build the application

```bash
npm run build
```

This executes the TypeScript build checks and generates the production output in `dist/`.

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server. |
| `npm run build` | Run TypeScript checks and build production assets. |
| `npm run preview` | Preview the production build locally. |

## Static Assets

Personal assets are maintained under `public/assets/`.

| Asset | Path |
|---|---|
| Profile image | `public/assets/images/profile.jpg` |
| Video poster | `public/assets/images/intro-poster.jpg` |
| Introduction video | `public/assets/video/intro.mp4` |
| AI/ML resume | `public/assets/resumes/ai-ml-engineer.pdf` |
| FDE/Solutions resume | `public/assets/resumes/fde-solutions.pdf` |
| Product resume | `public/assets/resumes/product-management.pdf` |
| Software engineering resume | `public/assets/resumes/software-engineer.pdf` |

When updating assets, preserve the filenames expected by the application or update their references in the source code.

## Deployment

The portfolio is hosted through GitHub Pages.

**Live URL:**

https://shagunshivam01.github.io/shagunshivam.github.io/

### Vite Configuration

The repository uses the following base path:

```ts
base: '/shagunshivam.github.io/'
```

This matches the current GitHub Pages project-site URL.

### Deployment Workflow

The repository uses GitHub Actions for deployment.

The deployment process is:

1. Push changes to the `main` branch.
2. GitHub Actions checks out the repository.
3. Node.js 20 is configured.
4. Dependencies are installed.
5. `npm run build` generates the production build.
6. The `dist/` directory is uploaded as a Pages artifact.
7. GitHub Pages deploys the generated website.

### GitHub Pages Setup

1. Navigate to repository Settings.
2. Open Pages.
3. Select GitHub Actions as the deployment source.
4. Check the Actions tab to monitor deployment status.

## Design Philosophy

The visual direction follows **The Ashen Automaton** identity.

Its core principles are:

- **Atmosphere:** Dark-fantasy-inspired environments with subtle visual effects.
- **Mechanical elegance:** Structured layouts, technical details, and brass-inspired accents.
- **Clarity:** Professional typography, readable content, and accessible navigation.
- **Interaction:** Purposeful animations and interactive technical elements.
- **Progression:** RPG-inspired career exploration and project discovery.
- **Restraint:** A distinctive visual identity without compromising professional usability.

## Future Development

The portfolio will continue evolving alongside my technical and professional journey.

Areas of future development include:

- More detailed engineering case studies.
- Expanded AgentForge project documentation.
- Improved interactive project exploration.
- Additional technical experiments and project showcases.
- Accessibility and performance improvements.
- Further refinement of the portfolio's interactive visual identity.

## Contributing

This is a personal portfolio, but suggestions and feedback are welcome.

For code changes:

1. Fork or create a branch from the repository.
2. Implement the proposed changes.
3. Run `npm run build`.
4. Submit a pull request with a clear description.

## Contact

For professional opportunities, technical collaboration, or discussions about the projects showcased here, visit the [live portfolio](https://shagunshivam01.github.io/shagunshivam.github.io/).

---

<p align="center">
  <strong>Built with curiosity. Engineered with intent.</strong>
</p>
