import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "./App.css";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
