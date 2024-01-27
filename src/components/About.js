import pic from "../assets/pic.jpg";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[6%]">
      <h4 className="text-[#353535] text-base text-center">Get To Know More</h4>
      <h1 className="text-5xl font-bold">About Me</h1>
      <div className="flex items-center justify-center py-[4%] mx-auto ">
        <div></div>
        <img
          className="w-96 h-96 rounded-[2rem] self-center p-2 m-2"
          src={pic}
          alt="pic"
        />
        <div className="flex flex-col items-center justify-center w-1/2 gap-7 px-4">
          <div className="flex  items-center justify-center gap-16">
            <div className="flex flex-col items-center justify-center w-72 h-36 py-6 border-2 border-neutral-700 rounded-2xl">
              <h2>Education</h2>
              <p>Btech</p>
              <p>Intermediate</p>
            </div>
            <div className="flex flex-col items-center justify-center w-72 h-36 py-6 border-2 border-neutral-700 rounded-2xl">
              <h2>Certification</h2>
              <p>React</p>
              <p>JavaScript</p>
            </div>
          </div>
          <p className="w-[100%] px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
