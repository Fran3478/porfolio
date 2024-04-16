import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import { LanguageProvider } from './context/language'


function App() {

  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </LanguageProvider>
    </>
  )
}

export default App
