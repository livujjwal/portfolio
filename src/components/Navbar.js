import { Link } from "react-router-dom";
import { links } from "../utils/constant";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);
  return (
    <div className=" flex justify-between items-center mx-auto w-full h-20 px-4">
      <h1 className="text-6xl ml-2 font-logo max-sm:text-4xl">My Portfolio</h1>
      <ul className="hidden md:flex items-center text-2xl">
        {links.map(({ id, title }) => (
          <li
            key={id}
            className="px-4 border-b-white duration-200 border-b-2 hover-link"
          >
            <Link to="">{title}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 text-[#353535] duration-200"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        {nav && (
          <ul className="flex flex-col justify-between items-center absolute top-20 right-2 w-1/2 h-1/4 bg-white p-2 border-2 shadow-xl rounded-2xl text-[#353535]">
            {links.map(({ id, title }) => (
              <li
                key={id}
                className="px-4 border-b-white duration-200 border-b-2 hover-link"
              >
                <Link to="">{title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Navbar;
