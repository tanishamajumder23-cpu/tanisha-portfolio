import Background from './components/Background'
import CursorGlow from './components/CursorGlow'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="grain relative min-h-screen">
      <Background />
      <CursorGlow />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Connect />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
