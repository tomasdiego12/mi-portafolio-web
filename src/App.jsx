import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Resume from './components/Resume/Resume.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {

  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App
