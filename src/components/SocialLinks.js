import { Link } from "react-router-dom";
import { socialLinks } from "../utils/constant";

export const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed rounded-md ">
      <ul>
        {socialLinks.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex items-center hover:shadow-2xl justify-between w-44 h-14 px-4 ml-[-100px] hover:ml-[0px] hover:rounded-md duration-200 " +
              style
            }
          >
            <Link
              to={href}
              className="flex items-center justify-between w-full"
              target="_blank"
              download={download}
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
