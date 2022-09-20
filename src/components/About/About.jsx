import React from "react";
import styled from "styled-components";
import CV from "../../assets/CV2022.pdf";
import Nicolás from "../../assets/fotoNico.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <AboutContainer className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={Nicolás} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV <i class="uil uil-file"></i>
          </a>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 4rem;

  .about__img {
    width: 350px;
    border: 1.5rem;
    justify-self: center;
  }

  .about__info {
    grid-template-columns: repeat(3, 140px);
    gap: 0.5rem;
    margin-bottom: var(--mb-2);
  }

  .about__box {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.75rem;
    text-align: center;
    padding: 1rem 1.25rem;
  }
`;
