import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesContainer className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil services__icon"></i>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.section``;
