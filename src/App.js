
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';



function App() {
  return (
   <>
     <Router>
     <Navbar/>
      <Routes>
        <Route  path="/" elements={Home}/>
        <Route  path="/about" elements={<about/>} />
        <Route  path="/skills" elements={<Skills/>} />
      </Routes>
     </Router>
   </>
  );
}

export default App;
