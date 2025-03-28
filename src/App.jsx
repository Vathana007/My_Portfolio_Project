import './App.css'
import About from './components/About'
import Footer from './components/Footer'
// import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div  className='bg-black'>
        <Navbar />
        {/* <Home /> */}
        <About />

        <Footer />
      </div>
    </>
  )
}

export default App
