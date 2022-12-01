import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
