import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NewNavbar from "./components/NewNavbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
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
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer className="footerClass" />
    </div>
  );
}
export default App;
