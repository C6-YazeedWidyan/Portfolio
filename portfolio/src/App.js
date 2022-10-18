import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
