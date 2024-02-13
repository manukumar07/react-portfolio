import React from "react";

const About = () => {
  const info = [
    { text: "Years experience", count: "0-1" },
    { text: "Completed Projects", count: "08" },
    { text: "Companies Work", count: "00" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-200 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi, I'm Manu Kumar Pal, a passionate developer with expertise in
                various technologies. My journey in the world of programming
                began with a passion for creating impactful web applications.
                With expertise in the MERN (MongoDB, Express.js, React, Node.js)
                stack, I've successfully developed and deployed scalable and
                efficient web solutions. From crafting responsive and intuitive
                frontends using React to building robust and RESTful APIs with
                Node.js and Express, I enjoy the entire spectrum of Full Stack
                development. In addition to my proficiency in the MERN stack,
                I'm well-versed in Java and C. These languages have been
                instrumental in my journey, allowing me to develop versatile and
                performant applications. I believe in the power of clean code,
                continuous learning, and collaborative problem-solving. Whether
                it's working on challenging projects, exploring new
                technologies, or contributing to open-source initiatives, I'm
                always eager to expand my skill set and stay ahead in the
                dynamic world of software development. I enjoy creating web
                applications and exploring new technologies to enhance my
                skills.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:tex6-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./pdf/resume.pdf" download>
                <button className="btn-primary bg-0ef">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src="./images/manu (1) (1).jpg"
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
