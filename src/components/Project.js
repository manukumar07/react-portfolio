import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      // img: project1,
      name: "Quiz-Website",
      github_link: "https://github.com/manukumar07/Quizz-Website",
      // live_link: "",
    },
    {
      // img: project2,
      name: "NSS-JMIETI Website",
      github_link: "https://github.com/manukumar07/NSS",
      live_link: "nssjmieti.netlify.app",
    },
    {
      // img: project3,
      name: "Sorting-Visualizer",
      github_link: "https://github.com/manukumar07/Sorting---Visualizer..",
      live_link: "",
    },
    // {
    //   // img: project4,
    //   name: "React Nav",
    //   github_link:
    //     "",
    //   live_link: "",
    // },
    // {
    // //   img: project5,
    //   name: "Vue Country",
    //   github_link: "",
    //   live_link: "",
    // },
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
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={40}
            breakpoints={{
              768: {
                slidesPerView: 2, },
            }}
            loop={true}
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
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a href="./images/manu.jpg" target="_blank" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Github </a>
                    <a href="./images/manu.jpg" target="_blank" className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">Live Demo</a>
                  </div>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      

        {/* <div className="lg:block hidden">
          <img src="./images/manu.jpg" alt="" className="w-full object-cover bg-cyan-600 rounded-xl"/>
        </div> */}
      </div>
    </section>
  );
};

export default Project;
