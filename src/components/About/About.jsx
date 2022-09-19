import React from "react";
import styled from "styled-components";

const About = () => {
  return <AboutContainer className="about section" id="about">
    <h2 className="section__title">About me</h2>
    <span className="section__subtitle">My introduction</span>
  </AboutContainer>;
};

export default About;

const AboutContainer = styled.div``;
