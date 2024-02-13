import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import logo from "./assets/AlfaroAutoDetail.png";
import About from "./pages/About";
import Services from "./pages/Services";

import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavBar logoPath={logo} />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
