import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
