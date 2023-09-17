import React from "react";
import About from "./About";
import Skills from './Skills';
import Project from './Project';
import Contact from "../Contact";
import Blogs from "./Blogs";
import Bot from "./Bot";
import { Typewriter } from 'react-simple-typewriter'
import "./Home.css"


const Home = () => {
  const social_media = [
    "logo-instagram",
    "logo-github",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <>
    <section
      id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      {/* <div className="flex-1 flex items-center justify-center h-full">
        <img src="./images/manu.jpg" alt="" className="md:w-11/12 h-full object-cover w-full object-cover bg-cyan-600 rounded-xl" />
      </div> */}
      <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center mt-4">
            <div className="lg:w-80 h-full relative sm:w-8/10 w-10/12 max-w-sm aboutImg">
              <img src="./images/manu.jpg" alt="" className="w-full object-cover bg-cyan-600 rounded-xl" />
            </div>
          </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-3xl text-5xl">
              Hello!
              <br />
            </span>
            <span>Manu Kumar Pal</span>
          </h1>
          <h4 className="  md:text-3xl text-lg md:leading-normal leading-5 mt-3 font-bold text-gray-100 " >
          <span>I'm </span><p className="p">
          <Typewriter 
            words={['Frontend Developer', 'Full Stack Developer', 'Java Developer', 'Reactjs.Developer']}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={90}
            delaySpeed={900}
            // onLoopDone={handleDone}
            // onType={handleType} 
            />
          </p>       
          
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <helment>
    <About />
    <Skills />
    <Project />
    <Contact />
    <Blogs /> 
    <Bot />
    </helment>
    </>
    
  );
};
    
export default Home;
