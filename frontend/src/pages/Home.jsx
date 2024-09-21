import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import the desired icons
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { Typewriter } from "react-simple-typewriter";
import Experience from "./Experience";
import ProjectCardList from "./ProjectCardList";

const Home = () => {
  const socialMediaIcons = [
    { icon: <FaGithub />, link: "https://github.com/manukumar07" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/manu-kumar-pal/",
    },
    { icon: <FaTwitter />, link: "#" },
  ];

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex py-6 md:py-8 md:flex-row flex-col items-center bg-[#ECF0F1]"
      >
        <div className="flex-1 md:mt-0 flex justify-center items-center mt-2">
          <div className="lg:w-80 h-full relative sm:w-8/10 w-10/12 max-w-sm aboutImg">
            <div className="absolute inset-0 bg-[#ECF0F1] rounded-full shadow-lg pt-4"></div>
            {/* <img
              src="./images/cp.png"
              alt="Manu Kumar Pal"
              className="w-full object-cover rounded-full" // Accent color for the image background
              style={{ filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2))" }} // Add a subtle shadow effect
            /> */}
            <img
              src="./images/cp.png"
              alt="Manu Kumar Pal"
              className="w-full object-cover" // Removed rounded-full
              style={{
                filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2))", // Subtle shadow effect
                animation: "fadeIn 1s ease-in-out", // Added animation
              }}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="md:text-left text-center">
            <h1 className="md:text-4xl text-xl md:leading-normal leading-8 text-[#2C3E50] font-bold">
              <span className="text-[#1ABC9C] md:text-3xl text-4xl">
                Hey I'm
                <br />
              </span>
              <span>Manu Kumar Pal</span>
            </h1>
            <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-2 font-bold text-[#2C3E50]">
              <span>I'm </span>
              <p className="p">
                <Typewriter
                  words={[
                    "Software Developer",
                    "Frontend Developer",
                    "React.js Developer",
                    "Full Stack Developer",
                    "Backend Developer",
                  ]}
                  loop={100}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={90}
                  delaySpeed={900}
                />
              </p>
            </h4>
            <button className="btn-primary mt-6 font-bold">Contact Me</button>
            <div className="mt-6 text-2xl flex items-center md:justify-start justify-center gap-4">
              {socialMediaIcons.map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C3E50] hover:text-[#2980B9]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <About />
        <Skills />
        <ProjectCardList />
        <Experience />
        <Contact />
      </section>
    </>
  );
};

export default Home;
