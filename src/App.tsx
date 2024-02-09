import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import logo from "./assets/AlfaroAutoDetail.png";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <NavBar logoPath={logo} />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
