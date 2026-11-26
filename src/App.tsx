import { useState } from 'react'

import Header from './components/home/Header'
import Hero from './components/home/Hero'
import SystemSnapshot from './components/home/SystemSnapshot'
import ProjectArchive from './components/projects/ProjectArchive'
import AutoIntelArchitecture from './components/home/AutoIntelArchitecture'
import CareerPaths from './components/home/CareerPaths'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'
import VideoModal from './components/home/VideoModal'

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" />

      <Header />

      <main id="top">
        <Hero onWatchVideo={() => setVideoOpen(true)} />

        <SystemSnapshot />

        <ProjectArchive />

        <AutoIntelArchitecture />

        <CareerPaths />

        <About />

        <Contact />
      </main>

      <Footer />

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </div>
  )
}
