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
      <div className='bg-slate-950 text-slate-200 min-h-screen selection:bg-teal-500 selection:text-white'>
        <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.3),rgba(255,255,255,0))]"></div>
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
