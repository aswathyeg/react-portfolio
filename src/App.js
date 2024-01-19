import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NewNavbar from "./components/NewNavbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Writings from "./components/Writings";
import Footer from "./components/Footer";
import AnimatedCard from "./components/AnimatedCard";
import Projects from "./components/Projects";


// import "./App.css";
function App() {
  return (
    <div className="App">
      <NewNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="works" element={<Works />} />
        <Route path="writings" element={<AnimatedCard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer className="footerClass" />
    </div>
  );
}
export default App;
