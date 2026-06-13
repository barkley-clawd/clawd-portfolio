import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Workflow from './components/Workflow'
import Projects from './components/Projects'
import Capabilities from './components/Capabilities'
import Now from './components/Now'
import Activity from './components/Activity'
import Architecture from './components/Architecture'
import Roadmap from './components/Roadmap'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Workflow />
        <Projects />
        <Capabilities />
        <Now />
        <Activity />
        <Architecture />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
