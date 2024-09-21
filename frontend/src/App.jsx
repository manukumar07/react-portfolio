import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
import ProjectCardList from "./pages/ProjectCardList";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ScrollUpButton from "./pages/ScrollUpButton";
// import ProjectCardList from "./pages/ProjectCardList";
// import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<ProjectCardList />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        {/* <ScrollToTop /> */}
        <ScrollUpButton />
      </div>
    </Router>
  );
};

export default App;
