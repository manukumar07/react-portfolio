

import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
     <Router>
     <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
      </Routes>
      <Footer />
     </Router>
   </>
  );
}

export default App;