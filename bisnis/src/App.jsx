import "./App.css";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/heroSection";
import MainContent from "./Component/mainContent";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <MainContent></MainContent>
      <Footer />
    </>
  );
}

export default App;
