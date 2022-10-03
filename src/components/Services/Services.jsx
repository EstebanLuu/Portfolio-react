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
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <i className="uil uil-times services__modal-close"></i>

            <h3 className="services__modal-title">Product Designer</h3>
            <p className="services__modal-description">
              Service with more than 3 years of experience. Providing quality
              work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Web page development.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I create UX element interactions.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <i className="uil uil-times services__modal-close"></i>

            <h3 className="services__modal-title"></h3>
            <p className="services__modal-description">
              Service with more than 3 years of experience. Providing quality
              work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Web page development.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I create UX element interactions.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              VIsual <br /> Designer
            </h3>
          </div>

          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <i className="uil uil-times services__modal-close"></i>

            <h3 className="services__modal-title">Visual Designer</h3>
            <p className="services__modal-description">
              Service with more than 3 years of experience. Providing quality
              work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Web page development.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I create UX element interactions.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.section`
  .services__container {
    grid-template-columns: repeat(3, 270px);
    justify-content: center;
    column-gap: 1.8rem;
  }

  .services__content {
    position: relative;
    bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--container-color);
    padding: 6rem 0 2rem 2.5rem;
  }

  .services__icon {
    display: block;
    font-size: 2rem;
    color: var(--title-color);
    margin-bottom: var(--mb-1);
  }

  .services__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-1);
    font-weight: var(--font-medium);
  }

  .services__buton {
    color: var(--title-color);
    font-size: var(--small-font-size);
    display: inline-flex;
    align-items: center;
    column-gap: 0.25rem;
    cursor: pointer;
  }

  .services__button-icon {
    
  }

  .services__modal {
    display: none;
  }
`;
