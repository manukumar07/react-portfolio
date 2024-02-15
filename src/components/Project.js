import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import project3 from "../assets/images/project-3.png"
import project4 from "../assets/images/project-4.png"
import project1 from "../assets/images/project-1.png"
import project2 from "../assets/images/project-2.png"
import project5 from "../assets/images/project-5.png"
import project6 from "../assets/images/project-6.png"


const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Quiz-Website",
      github_link: "https://github.com/manukumar07/Quizz-Website",
      // live_link: "",
    },
    {
      img: project2,
      name: "NSS-JMIETI Website",
      github_link: "https://github.com/manukumar07/NSS",
      live_link: "nssjmieti.netlify.app",
    },
    {
      img: project3,
      name: "Sorting-Visualizer",
      github_link: "https://github.com/manukumar07/Sorting---Visualizer..",
      live_link: "https://sortingvisualizer-pal.netlify.app/",
    },
    {
      img: project4,
      name: "Code_Editor",
      github_link:"https://github.com/manukumar07/Basic-_Code--Editor",
      live_link: "https://mcode-editor.netlify.app/",
    },
    {
      img: project5,
      name: "To-do List",
      github_link: "https://github.com/manukumar07/To-do-List",
      live_link: "",
    },
    {
      img: project6,
      name: "Tic-Toe_Game",
      github_link: "https://github.com/manukumar07/Tic-Toe-Game",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-200 mt-3 text-lg">My awesome Project</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative flex items-center justify-center min-h-screen">
        <div className="lg:w-2/3 w-full">
          <Swiper 
            slidesPerview={1.2}
            spaceBetween={45}
            breakpoints={{
              768: {
                slidesPerView: 1, },
            }}
            loop={true}
            centeredSlides={true}  // Set to true to center the active slide
            centeredSlidesBounds={true} 
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl ">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a href="project_info.github_link" target="_blank" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Github </a>
                    <a href="project_info.live_link" target="_blank" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
                  </div>
                  </div>
                  {/*  */}
               
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;

