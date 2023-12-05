import React, { useState } from "react";
import styled from "styled-components";

const Services = () => {
  const [toggle, seToggle] = useState(0);

  const toggleTab = (index) => {
    seToggle(index);
  };
  return (
    <ServicesContainer className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-brackets-curly services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title"> Frontend Developer</h3>
              <p className="services__modal-description">
                More than 1 year of experience. Providing quality work with
                optimized code.
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
                    Styled Components / Sass.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Development based on UI/UX design.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Experience with asynchronous request.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title"> Backend Developer</h3>
              <p className="services__modal-description">
                I build and maintain the mechanisms that process data and
                perform actions on websites.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Assess efficiency and speed.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Troubleshoot and debug.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Accessibility and security clearance.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Providing data structure.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              VIsual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle == 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

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
        </div> */}
      </div>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.section`
  .services__container {
    grid-template-columns: repeat(2, 270px);
    justify-content: center;
    column-gap: 1.8rem;
  }

  .services__content {
    position: relative;
    bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--container-color);
    padding: 6rem 0 2rem 2.5rem;
    transition: 0.5s;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    &:hover {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
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

  .services__button {
    color: var(--main-color);
    font-size: var(--small-font-size);
    display: inline-flex;
    align-items: center;
    column-gap: 0.25rem;
    cursor: pointer;
  }

  .services__button-icon {
    font-size: 1rem;
    transition: 0.3s;
  }

  .services__button:hover .services__button-icon {
    transform: translateX(00.25rem);
  }

  .services__modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  .services__modal-content {
    width: 500px;
    position: relative;
    background-color: var(--container-color);
    padding: 4.5rem 2.5rem 2.5rem;
    border-radius: 1.5rem;
  }

  .services__modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
    color: var(--title-color);
    cursor: pointer;
  }

  .services__modal-title,
  .services__modal-description {
    text-align: center;
  }

  .services__modal-title {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1);
  }

  .services__modal-description {
    font-size: var(--small-font-size);
    padding: 0 3.5rem;
    margin-bottom: var(--mb-2);
  }

  .services__modal-services {
    row-gap: 0.75rem;
  }

  .services__modal-service {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .services__modal-icon {
    color: var(--title-color);
    font-size: 1.1rem;
  }

  .services__modal-info {
    font-size: var(--small-font-size);
  }

  /* Active modal */

  .active-modal {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 992px) {
    .services__container {
      grid-template-columns: repeat(2, 218px);
    }
  }

  @media screen and (max-width: 768px) {
    .services__container {
      grid-template-columns: repeat(2, 1fr);
    }
    .services__content {
      padding: 3.5rem 0.5rem 1.25rem 1.5rem;
    }
    .services__icon {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 576px) {
    .services__modal-content {
      padding: 4.5rem 1.5rem 2.5rem;
    }

    .services__modal-description {
      padding: 0;
    }
  }

  @media screen and (max-width: 350px) {
    .services__container {
      grid-template-columns: max-content;
    }

    .services__content {
      padding-right: 6rem;
    }
  }
`;
