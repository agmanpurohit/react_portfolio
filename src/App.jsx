import './App.css'
import About from './components/about/About'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import Works from './components/works/Works'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Works />
      <Blogs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
