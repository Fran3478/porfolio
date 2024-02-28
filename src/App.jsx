import Navbar from './components/navBar/NavBar'
import Home from './components/Home'
import AboutMe from './components/about/AboutMe'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
      </div>
    </>
  )
}

export default App
