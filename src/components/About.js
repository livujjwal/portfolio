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
      <div className="flex max-md:flex-col items-center justify-center md:w-[80%] gap-10 px-4 w-full">
        <div className="flex flex-col  items-center justify-center gap-8 max-md:flex-col">
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
        <p className=" w-[80%] md:w-[100%] md:text-pretty">
          Ujjwal Singh holds a Bachelor's degree in Electronics and
          Communication Engineering and excels in frontend development,
          leveraging React, Tailwind CSS, HTML, Redux, Firebase, Git, and Github
          to create dynamic user interfaces. With a strong foundation in
          JavaScript, Java, and SQL, I always ensures smooth application logic
          and database management. Committed to delivering intuitive web
          experiences, I am continuously explores new avenues in frontend
          development. Dive into my portfolio to discover a showcase of projects
          and contributions exemplifying their dedication and skill.
        </p>
      </div>
    </div>
  );
};
export default About;
