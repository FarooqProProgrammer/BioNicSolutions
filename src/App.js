import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Technologies from './pages/Technologies'
import About from './pages/About'
import Services from './pages/Services'
import Industires from './pages/Industries'
import Portfolio from './pages/Portfolio'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/contact' Component={Contact} />
        <Route  path="/technologies" Component={Technologies} />
        <Route  path="/about" Component={About} />
        <Route  path="/service" Component={Services} />
        <Route  path="/industries" Component={Industires} />
        <Route  path="/portfolio" Component={Portfolio} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
