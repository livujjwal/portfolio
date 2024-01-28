import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { SocialLinks } from "./components/SocialLinks";
// const appRouter = createBrowserRouter([
//   {
//     path: "#about",
//     element: <About />,
//   },
//   {
//     path: "/Skills",
//     element: <Skills />,
//   },
//   {
//     path: "/projects",
//     element: <Projects />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <SocialLinks />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
