import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Curriculum from './pages/Curriculum';
import Portfolio from './pages/Portfolio';
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route  strict path="/" element={<Curriculum />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
    document.getElementById('root')
)
