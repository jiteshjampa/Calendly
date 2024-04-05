import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import "tailwindcss/tailwind.css";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Carousel />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
