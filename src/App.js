

import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
     <Router>
     <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>} />
        <Route  path="/skills" element={<Skills/>} />
      </Routes>
      <Footer />
     </Router>
   </>
  );
}

export default App;