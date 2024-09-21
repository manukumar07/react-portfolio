import { GitHub } from "@mui/icons-material";
import NorthEastIcon from "@mui/icons-material/NorthEast"; // Importing diagonal upward arrow icon

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#ECF0F1] shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 mt-8 max-w-md mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-md font-bold text-[#34495E]">{project.title}</h2>
        <p className="text-gray-600 my-1 text-sm">{project.description}</p>
        <div className="flex justify-between mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#34495E] hover:text-black"
          >
            <GitHub className="mr-2" /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#1ABC9C] hover:text-[#16A085]"
          >
            <NorthEastIcon className="mr-2" /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
