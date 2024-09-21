import ProjectCard from "./projects/ProjectCard";
import projectImage from "../assets/project2.png";
import projectImage2 from "../assets/project8.png";
import projectImage9 from "../assets/project9.png";

const projectData = [
  {
    title: "Nss Website",
    description:
      "The NSS website enables volunteers to post activities, showcase community service projects, and engage with fellow members, fostering collaboration and promoting social responsibility within JMIETI.",
    image: projectImage, // Replace with actual project image URL
    github: "https://github.com/manukumar07/NSS", // Replace with GitHub link
    live: "https://nssjmieti.netlify.app/", // Replace with live project link
  },
  {
    title: "NextHire",
    description:
      "NextHire is a job portal that connects employers with job seekers.It allows companies to post job openings and candidates to apply easily, simplifying the hiring process.",
    image: projectImage2, // Replace with actual project image URL
    github: "https://github.com/manukumar07/NextHire_Job-Portal", // Replace with GitHub link
    live: "https://private-user-images.githubusercontent.com/102711650/368725248-9b22835b-58c3-43ee-82d9-c6a926d3429e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY4OTE4MDIsIm5iZiI6MTcyNjg5MTUwMiwicGF0aCI6Ii8xMDI3MTE2NTAvMzY4NzI1MjQ4LTliMjI4MzViLTU4YzMtNDNlZS04MmQ5LWM2YTkyNmQzNDI5ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyMVQwNDA1MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xOTMyZDhiY2NkNzgyYTczMTE2M2UwYzBkOGYyY2Q0ZjRiOTc3YWM4ODM2ZDRkOWI0Y2EyNWYyYTVmNDVhODlhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.g83tcGd8fVOUIz-bG3DmE-jsX2wuBHQHYNvxLhZQC9E", // Replace with live project link
  },
  {
    title: "Blogify",
    description:
      "Blogify is a MERN stack application that allows users to create, edit, and share blogs, featuring user authentication, rich text editing, and a responsive design for seamless navigation.",
    image: projectImage9, // Replace with actual project image URL
    github: "https://github.com/manukumar07/Blogify_mern", // Replace with GitHub link
    live: "https://github.com/manukumar07/Blogify_mern", // Replace with live project link
  },
  // {
  //   title: "Yet Another Project",
  //   description:
  //     "A well-architected and optimized project for handling complex workflows.",
  //   image: "https://via.placeholder.com/400x300", // Replace with actual project image URL
  //   github: "https://github.com/username/project3", // Replace with GitHub link
  //   live: "https://yourproject.live3", // Replace with live project link
  // },
  // {
  //   title: "Yet Another Project",
  //   description:
  //     "A well-architected and optimized project for handling complex workflows.",
  //   image: "https://via.placeholder.com/400x300", // Replace with actual project image URL
  //   github: "https://github.com/username/project3", // Replace with GitHub link
  //   live: "https://yourproject.live3", // Replace with live project link
  // },
  // {
  //   title: "Yet Another Project",
  //   description:
  //     "A well-architected and optimized project for handling complex workflows.",
  //   image: "https://via.placeholder.com/400x300", // Replace with actual project image URL
  //   github: "https://github.com/username/project3", // Replace with GitHub link
  //   live: "https://yourproject.live3", // Replace with live project link
  // },
];

const ProjectCardList = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 mt-0">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Projects</span>
          </h3>
          <p className="text-[#1ABC9C] mt-3 text-lg font-bold">
            My awesome Project
          </p>
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCardList;
