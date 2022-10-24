import "./App.scss";
import React, { useState } from "react";
import styled from "styled-components";
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
import BotonTheme from "./components/Boton/BotonTheme";

function App() {
  const [theme, setTheme] = useState(false);

  const handleDark = () => {
    setTheme(!theme);
  };

  return (
    <AppContainer className={`${theme ? "dark" : "darkDN"}`}>
      <Header />
      <main className="main">
        <BotonTheme handleDark={handleDark} theme={theme}>
          BOTTON
        </BotonTheme>
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
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
