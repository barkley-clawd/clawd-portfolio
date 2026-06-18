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
      <Navbar />
      <main>
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
