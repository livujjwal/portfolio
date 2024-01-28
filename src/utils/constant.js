import netflix from "../assets/netflix.png";
import gobhukkad from "../assets/goBhukkad.png";
import google from "../assets/googleSheet.png";
import youtube from "../assets/youtube.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
export const projects = [
  {
    title: "Netflix",
    img: netflix,
    git: "https://github.com/livujjwal/netflix-gpt.git",
    demo: "#",
  },
  {
    title: "GoBhukkad",
    img: gobhukkad,
    git: "https://github.com/livujjwal/go-bhukkad",
    demo: "https://go-bhukkad.vercel.app/",
  },
  {
    title: "Youtube",
    img: youtube,
    git: "https://github.com/livujjwal/Youtube-Clone",
    demo: "https://livujjwal.github.io/Youtube-Clone/",
  },
  {
    title: "Goggle Sheet",
    img: google,
    git: "https://github.com/livujjwal/Google-Sheet-Clone.git",
    demo: "https://livujjwal.github.io/Google-Sheet-Clone/",
  },
];

export const links = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const socialLinks = [
  {
    id: 1,
    child: (
      <>
        Linkedin <FaLinkedin size={40} className="px-2" />
      </>
    ),
    href: "https://www.linkedin.com/in/ujjwal-singh-812647128/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        Github <FaGithub size={40} className="px-2" />
      </>
    ),
    href: "https://github.com/livujjwal",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={40} className="px-2" />
      </>
    ),
    href: "mailto:ujjwalbietjhs@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={40} className="px-2" />
      </>
    ),
    href: "/Ujjwal Singh.pdf",
    style: "rounded-br-md",
    download: true,
  },
];
export const about = [
  {
    title: "Education",
    img: "https://tangerine-hummingbird-1479b6.netlify.app/assets/education.png",
    text1: "Btech",
    text2: "Intermediate",
  },
  {
    title: "Certification",
    img: "https://tangerine-hummingbird-1479b6.netlify.app/assets/experience.png",
    text1: "React",
    text2: "JavaScript",
  },
];
export const skills = [
  {
    title: "Programming Skill",
    child: [
      {
        subTitle: "JavaScript",
        rating: "Experienced",
      },
      {
        subTitle: "HTML",
        rating: "Intermediate",
      },
      {
        subTitle: "CSS",
        rating: "Intermediate",
      },
      {
        subTitle: "Java",
        rating: "Beginner",
      },
      {
        subTitle: "SQL",
        rating: "Beginner",
      },
    ],
  },
  {
    title: "Library/Framework",
    child: [
      {
        subTitle: "React",
        rating: "Experienced",
      },
      {
        subTitle: "Tailwind",
        rating: "Intermediate",
      },
      {
        subTitle: "Boostrap",
        rating: "Intermediate",
      },
      {
        subTitle: "Parcel",
        rating: "Beginner",
      },
      {
        subTitle: "Jest",
        rating: "Beginner",
      },
    ],
  },
];
