import "../../../App.css";
import Navbar from "../../Navbar.jsx";
import HeroSection from "../../heroSection.jsx";
import MainContent from "../../mainContent.jsx";
import Footer from "../../Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <MainContent></MainContent>
      <Footer />
    </>
  );
};

export default Home;
