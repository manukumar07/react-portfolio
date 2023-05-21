
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route  Exact path="/" element={<home/> } />
       <Route path="/about"  element={<about/>} />
       <Route path="/skills" element={<skills/>} />
       <Route path="/project" element={<projects/> } />
       <Route path="/contact" element={<contact-us />} />
      </Routes>
    </Router>
  );
}

export default App;
