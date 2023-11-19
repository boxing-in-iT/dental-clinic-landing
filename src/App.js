import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import WelcomePage from "./pages/WelcomePage";
import Team from "./pages/Team";
import Experience from "./pages/Experience";
import Results from "./pages/Results";
import SignUp from "./pages/SignUp";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
import Example from "./components/Carousels/HorizontalScroll/HorizontalScroll";
import Services from "./pages/Services";
import Carousel from "./components/Carousels/Carousel/Carousel";

function App() {
  return (
    <>
      <Nav />
      <WelcomePage />
      <Team />
      <Experience />
      <SignUp />
      <Faq />
      <Services />
      <Results />
      <Footer />
    </>
  );
}

export default App;
