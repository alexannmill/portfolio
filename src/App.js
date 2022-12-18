import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

