import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Services from "./components/Services/Services.jsx";
import Qualification from "./components/Qualification/Qualification.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Scrollup from "./components/Scrollup/Scrollup.jsx";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;

const Buton = styled.button`
  height: 100px;
  width: 100px;
  background-color: red;
`;
