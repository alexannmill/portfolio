import NavBar from "../dist/src/Components/NavBar";
import Home from "../dist/src/Components/Home";
import Contact from "../dist/src/Components/Contact";
import Projects from "../dist/src/Components/Projects";
import BeerBlog from "../dist/src/Components/BeerBlog";
import Skills from "../dist/src/Components/Skills";

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
