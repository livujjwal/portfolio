import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
    </BrowserRouter>
  );
}

export default App;
