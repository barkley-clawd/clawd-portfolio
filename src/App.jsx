import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Workflow from './components/Workflow'
import Projects from './components/Projects'
import Capabilities from './components/Capabilities'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-black">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Workflow />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
