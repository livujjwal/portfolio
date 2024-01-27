import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center mx-auto py-4 w-screen md:max-w-[80%] px-8">
      <h1 className="text-6xl max-md:text-2xl">My Portfolio</h1>
      <ul className="flex items-center gap-10 py-4 text-2x l max-md:text-lg max-md:gap-4">
        <li className="border-b-white border-b-2  hover:border-b-2 cursor-pointer hover:border-[#FC8019] hover:text-[#FC8019]">
          <NavLink to={"/about"} />
          About
        </li>
        <li className="border-b-white border-b-2 hover:border-b-2 cursor-pointer hover:border-[#FC8019] hover:text-[#FC8019]">
          <NavLink to={"/skills"} />
          Skills
        </li>
        <li className="border-b-white border-b-2 hover:border-b-2 cursor-pointer hover:border-[#FC8019] hover:text-[#FC8019]">
          <NavLink to={"/projects"} />
          Projects
        </li>
        <li className="border-b-white border-b-2 hover:border-b-2 cursor-pointer hover:border-[#FC8019] hover:text-[#FC8019]">
          <NavLink to={"/contact"} />
          Contact
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
