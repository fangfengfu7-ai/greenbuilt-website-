import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Technology from './components/Technology'
import Products from './components/Products'
import Projects from './components/Projects'
import Videos from './components/Videos'
import Faq from './components/Faq'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
