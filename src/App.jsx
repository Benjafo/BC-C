import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import References from './pages/References'

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/references" element={<References />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
