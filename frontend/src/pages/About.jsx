// // import React from "react";

// const About = () => {
//   const info = [
//     { text: "Years Experience", count: "0-1" },
//     { text: "Completed Projects", count: "08" },
//     { text: "Companies Worked", count: "00" },
//   ];

//   return (
//     <section id="about" className="py-10 text-[#ECF0F1] bg-[#2C3E50]">
//       <div className="text-center mt-2">
//         <h3 className="text-4xl font-semibold">
//           About <span className="text-[#1ABC9C]">Me</span>
//         </h3>
//         <p className="text-[#BDC3C7] my-3 text-lg">My Introduction</p>
//         <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
//           <div className="p-2">
//             <div className="text-[#BDC3C7] my-2">
//               <p className="text-justify leading-7 w-11/13 mx-auto">
//                 Hi, I'm Manu Kumar Pal, a passionate developer with expertise in
//                 various technologies. My journey in the world of programming
//                 began with a passion for creating impactful web applications.
//                 With expertise in the MERN (MongoDB, Express.js, React, Node.js)
//                 stack, I've successfully developed and deployed scalable and
//                 efficient web solutions. From crafting responsive and intuitive
//                 frontends using React to building robust and RESTful APIs with
//                 Node.js and Express. In addition to my proficiency in the MERN
//                 stack, I'm well-versed in C++ and C. I believe in the power of
//                 clean code, continuous learning, and collaborative
//                 problem-solving. Whether it's working on challenging projects,
//                 exploring new technologies, or contributing to open-source
//                 initiatives, I'm always eager to expand my skill set and stay
//                 ahead in the dynamic world of software development. I enjoy
//                 creating web applications and exploring new technologies to
//                 enhance my skills.
//               </p>
//               <div className="flex mt-10 items-center gap-7">
//                 {info.map((content) => (
//                   <div key={content.text}>
//                     <h3 className="md:text-4xl text-2xl font-semibold text-[#1ABC9C]">
//                       {content.count}
//                       <span className="text-[#1ABC9C]">+</span>
//                     </h3>
//                     <span className="md:text-base text-xs">{content.text}</span>
//                   </div>
//                 ))}
//               </div>

//               <a href="./pdf/resume (4).pdf" download>
//                 <div className="flex justify-start mt-6">
//                   <button className="btn-primary bg-[#1ABC9C] text-white hover:bg-[#16a085] transition duration-300 ease-in-out px-4 py-2 rounded">
//                     Download CV
//                   </button>
//                 </div>
//               </a>
//             </div>
//           </div>
//           <div className="flex-1 md:mt-0 pb-36 flex justify-center items-center">
//             <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
//               <img
//                 src="./images/mmm.png"
//                 alt="Manu Kumar Pal"
//                 className="w-full object-cover rounded-full "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";

const About = () => {
  const info = [
    { text: "Years Experience", count: "0-1" },
    { text: "Completed Projects", count: "08" },
    { text: "Companies Worked", count: "00" },
  ];

  return (
    <section id="about" className="py-10 text-[#ECF0F1] bg-[#2C3E50]">
      <div className="text-center mt-2">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#1ABC9C]">Me</span>
        </h3>
        <p className="text-[#BDC3C7] my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-6 px-4 md:px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-[#BDC3C7] my-2">
              <p className="text-justify leading-7 w-full md:w-11/13 mx-auto">
                Hi, I'm Manu Kumar Pal, a passionate developer with expertise in
                various technologies. My journey in the world of programming
                began with a passion for creating impactful web applications.
                With expertise in the MERN (MongoDB, Express.js, React, Node.js)
                stack, I've successfully developed and deployed scalable and
                efficient web solutions. From crafting responsive and intuitive
                frontends using React to building robust and RESTful APIs with
                Node.js and Express. In addition to my proficiency in the MERN
                stack, I'm well-versed in C++ and C. I believe in the power of
                clean code, continuous learning, and collaborative
                problem-solving. Whether it's working on challenging projects,
                exploring new technologies, or contributing to open-source
                initiatives, I'm always eager to expand my skill set and stay
                ahead in the dynamic world of software development. I enjoy
                creating web applications and exploring new technologies to
                enhance my skills.
              </p>
              <div className="flex mt-8 md:mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-[#1ABC9C]">
                      {content.count}
                      <span className="text-[#1ABC9C]">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>

              <a href="./pdf/resume (4).pdf" download>
                <div className="flex justify-start mt-6">
                  <button className="btn-primary bg-[#1ABC9C] text-white hover:bg-[#16a085] transition duration-300 ease-in-out px-4 py-2 rounded">
                    Download CV
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 pb-16 md:pb-0 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src="./images/mmm.png"
                alt="Manu Kumar Pal"
                className="w-full rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
