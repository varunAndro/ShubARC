import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { About } from './components/About'
import { ConsultProvider } from './components/ConsultDialog'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { theme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConsultProvider>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Process />
          <Testimonials />
          <CtaBanner />
        </main>
        <Footer />
      </ConsultProvider>
    </ThemeProvider>
  )
}
