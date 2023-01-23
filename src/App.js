import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import BeerBlog from "./Components/BeerBlog";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <a id="home"></a>
      <Home />
      <a id="skills"></a>
      <Skills />
      <a id="projects"></a>
      <Projects />
      <a id="blog"></a>
      <BeerBlog />
      <a id="contact">.</a>
      <Contact />
    </div>
  );
}
