import { Link } from "react-router-dom";
import { projects } from "../utils/constant";

const ProjectCard = () => {
  return (
    <div className="flex flex-wrap gap-14 mx-auto px-10 items-center justify-center py-[2%] max-sm:px-4">
      {projects.map(({ title, img, git, demo }) => (
        <div key={title} className="hover:scale-[.98] cursor-pointer ">
          <div className="flex flex-col items-center justify-center w-[28rem] h-[28rem] py-6 border-2 border-neutral-400 shadow-lg rounded-[4rem] max-md:w-[28rem] max-md:h-[28rem] max-sm:w-[20rem] max-sm:h-[20rem]  max-sm:rounded-lg  max-sm:p-2">
            <img
              className="w-[100%] h-[100%] rounded-[4rem] self-center  px-10 pt-5 object-cover max-sm:p-1  max-sm:rounded-lg"
              src={img}
              alt="Project1"
            />
            <h2 className="font-semibold py-6 text-5xl max-sm:text-xl">
              {title}
            </h2>
            <div className="flex items-center justify-between mx-auto">
              <button className="w-40 max-sm:w-24 max-sm:text-xs rounded-3xl border-2 border-black px-4 py-3 m-2 font-lg hover:bg-[#353535] hover:text-white hover:border-gray-700">
                <Link to={git} target="_blank">
                  Github
                </Link>
              </button>
              <button className="w-40 max-sm:w-24 max-sm:text-xs rounded-3xl border-2 border-black px-4 py-3 m-2 font-lg hover:bg-[#353535] hover:text-white hover:border-gray-700">
                <Link to={demo} target="_blank">
                  Demo{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectCard;
