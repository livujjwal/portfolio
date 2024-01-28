import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div
      name="projects"
      className="flex flex-col items-center justify-center w-full md:h-full"
    >
      <h6 className="text-[#353535] text-base text-center">Browse My Recent</h6>
      <h1 className="text-5xl font-bold pb-[4%]">Projects</h1>
      <ProjectCard />
    </div>
  );
};
export default Projects;
