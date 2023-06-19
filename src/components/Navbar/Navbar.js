
// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Navbar.css"
// // import { useState } from 'react'


// const Navbar = () => {

//   return (
//     <>
//       <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//           <h1>Portfolio..</h1>
//         </div>
//         <div className='nav-elements'>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/skills">Skills</Link>
//             </li>
//             <li>
//               <Link to="/project">Projects</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact-us</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blogs</Link>
//             </li>
//           </ul>
          
//         </div>
//       </div>
//     </nav>
    
//   )
// };

// export default Navbar;



import React, { useEffect, useState } from "react";
import Switcher from "../Mode/Switcher";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#Contact" },
    { name: "BLOGS", link: "#Blogs" },

  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            <span className="text-cyan-500">Portfolio...</span>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden m-5`}>
          <ion-icon name="menu"></ion-icon>
          </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${ open ? "right-0" : "right-[-100%]"}`}>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;