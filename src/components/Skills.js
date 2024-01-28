import { FaCertificate } from "react-icons/fa6";
import { skills } from "../utils/constant";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[4%]">
      <h6 className="text-[#353535] text-base text-center">Explore My</h6>
      <h1 className="text-5xl font-bold pb-[2%]">Skills</h1>
      <div className="flex items-center justify-center mx-auto gap-10 max-md:flex-col">
        {skills.map(({ title, child }) => (
          <div
            key={title}
            className="flex items-center justify-center py-[4%] "
          >
            <div className="flex flex-col items-center justify-center w-[40rem] h-1/2 py-6 border-2 border-text-[rbg(163,163,163)] rounded-2xl max-md:w-[80%] max-sm:w-[80%]">
              <h2 className="text-4xl font-semibold text-[rgb(85,85,85)] max-sm:text-2xl">
                {title}
              </h2>
              <div className="flex container flex-wrap gap-4">
                {child.map(({ subTitle, rating }) => (
                  <div className="py-4 px-6 flex flex-col items-center justify-center max-md:p-2 ">
                    <p className="w-40  text-2xl font-semibold p-1 max-md:text-xl max-sm:w-28">
                      <FaCertificate className="inline-block self-center" />{" "}
                      {subTitle}
                    </p>
                    <p className="text-[rgb(53,53,53)] pl-4 text-xl text-center">
                      {rating}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
