import NavBar from "../src/dist/Components/NavBar";
import Home from "../src/dist/Components/Home";
import Contact from "../src/dist/Components/Contact";
import Projects from "../src/dist/Components/Projects";
import BeerBlog from "../src/dist/Components/BeerBlog";
import Skills from "../src/dist/Components/Skills";

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
