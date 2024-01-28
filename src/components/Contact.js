import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { links } from "../utils/constant";
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[6%] pb-[2%] max-md:pt-[8rem]">
      <h4 className="text-[#353535] text-base text-center ">Get in Touch</h4>
      <h1 className="text-5xl font-bold pb-[4%] max-md:pb-[4rem]">
        Contact Me
      </h1>
      <div className="flex  items-center justify-center px-8 h-24 gap-4 py-6 border-2 border-neutral-400 rounded-[2rem] max-sm:h-40 max-sm:items-start max-sm:flex-col">
        <div className="flex  items-center justify-center gap-4">
          <AiFillMail className="w-8 h-8 rounded-full" />
          <button className="text-xl">Example@gmail.com</button>
        </div>
        <div className="flex  items-center justify-center gap-4">
          <AiFillLinkedin className="w-8 h-8 rounded-full" />
          <button className="text-xl">Linkedin</button>
        </div>
      </div>
      <ul className="flex items-center text-2xl pt-[4rem] pb-[2rem] max-sm:text-xl max-md:py-[8rem]">
        {links.map(({ id, title }) => (
          <li
            key={id}
            className="px-4 border-b-white duration-200 border-b-2 hover-link"
          >
            <Link to="">{title}</Link>
          </li>
        ))}
      </ul>
      <h4 className="text-[#353535] text-base text-center pt-6 pb-8">
        Copyright © 2023 Ujjwal Singh. All Rights Reserved.
      </h4>
    </div>
  );
};
export default Contact;
