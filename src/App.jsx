import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Skill from './components/Skill'
import Achievement from './components/Achievement'


function App() {

  return (
    <>
      <div  className='bg-black'>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Achievement />
        <Footer />
      </div>
    </>
  )
}

export default App
