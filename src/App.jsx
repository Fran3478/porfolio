import Navbar from './components/navbar/NavBar'
import Home from './components/Home'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
