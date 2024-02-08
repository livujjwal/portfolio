import pic from "../assets/pic.jpg";
import { about } from "../utils/constant";
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      name="about"
    >
      <h4 className="text-[#353535] text-base text-center ">
        Get To Know More
      </h4>
      <h1 className="text-5xl font-bold pb-6">About Me</h1>
      <div className="flex items-center justify-center py-[4%] mx-auto max-md:mx-0 max-lg:flex-col ">
        <img
          className="w-[28rem] h-[28rem] rounded-[2rem] mx-auto p-2 m-2 max-md:w-[20rem] max-md:h-[20rem]  "
          src={pic}
          alt="pic"
        />
        <div className="flex flex-col items-center justify-center w-1/2 gap-7 px-4 max-md:w-full">
          <div className="flex  items-center justify-center gap-16 max-md:flex-col">
            {about.map(({ title, img, text1, text2 }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center w-72 h-36 py-6 border-2 border-neutral-400 rounded-2xl"
              >
                <img className="w-8 h-8" src={img} alt="certification" />
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-neutral-600 font-medium">{text1}</p>
                <p className="text-neutral-600 font-medium">{text2}</p>
              </div>
            ))}
          </div>
          <p className="w-[100%] px-12 ">
            Ujjwal Singh holds a Bachelor's degree in Electronics and
            Communication Engineering and excels in frontend development,
            leveraging React, Tailwind CSS, HTML, CSS, and Redux to create
            dynamic user interfaces. With a strong foundation in JavaScript,
            Java, and SQL, I always ensures smooth application logic and
            database management. Committed to delivering intuitive web
            experiences, I am continuously explores new avenues in frontend
            development. Dive into my portfolio to discover a showcase of
            projects and contributions exemplifying their dedication and skill.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
