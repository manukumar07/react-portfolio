import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiFirebase,
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiMaterialdesign,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import NextJsLogo from "../assets/nt.png";

const skillsData = [
  { id: 1, name: "HTML5", icon: <SiHtml5 size={30} /> },
  { id: 2, name: "CSS3", icon: <SiCss3 size={30} /> },
  { id: 3, name: "JavaScript", icon: <SiJavascript size={30} /> },
  { id: 4, name: "React", icon: <SiReact size={30} /> },
  { id: 5, name: "Node.js", icon: <FaNodeJs size={30} /> },
  { id: 6, name: "MongoDB", icon: <SiMongodb size={30} /> },
  { id: 7, name: "Express", icon: <SiExpress size={30} /> },
  { id: 8, name: "Git", icon: <SiGit size={40} /> },
  { id: 9, name: "GitHub", icon: <SiGithub size={30} /> },
  { id: 10, name: "Postman", icon: <SiPostman size={20} /> },
  { id: 11, name: "Firebase", icon: <SiFirebase size={30} /> },
  { id: 12, name: "C++", icon: <SiCplusplus size={30} /> },
  { id: 13, name: "Tailwind CSS", icon: <SiTailwindcss size={25} /> },
  { id: 14, name: "Material-UI", icon: <SiMaterialdesign size={25} /> },
  {
    id: 15,
    name: "Next.js",
    icon: <img src={NextJsLogo} alt="Next.js" width={30} height={30} />,
  }, // Local SVG
  { id: 16, name: "TypeScript", icon: <SiTypescript size={30} /> },
  { id: 17, name: "SQL", icon: <SiMysql size={30} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-[#ECF0F1] text-[#2C3E50]">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#E67E22]">Skills</span>
        </h3>
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="bg-[#34495E] text-[#FFFFFF] m-4 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 max-w-xs flex flex-col items-center"
          >
            {skill.icon}
            <h4 className="text-xl font-semibold mt-2">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
