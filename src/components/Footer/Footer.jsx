import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer className="footer ">
      <div className="footer__container container">
        <h1 className="footer__title">Luna</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/EstebanLuu"
            className="footer__social-link "
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/esteban-nicol%C3%A1s-luna--/"
            className="footer__social-link "
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/esteban-nicol%C3%A1s-luna--/"
            className="footer__social-link "
            target="_blank"
          >
            <i className="uil uil-envelope"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Nicolás Luna. All rights reserved
        </span>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: var(--container-color);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  .footer__container {
    padding: 2rem 0 6rem;
  }
  .footer__title,
  .footer__link {
    color: var(--title-color);
    transition: 0.3s;
  }

  .footer__title {
    text-align: center;
    margin-bottom: var(--mb-2);
  }

  .footer__link:hover {
    color: var(--main-color);
  }

  .footer__list {
    display: flex;
    justify-content: center;
    column-gap: 1.5rem;
    margin-bottom: var(--mb-2);
  }

  .footer__social {
    display: flex;
    justify-content: center;
    column-gap: 1.125rem;
  }

  .footer__social-link {
    background-color: var(--title-color);
    color: var(--container-color);
    font-size: 1.1rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
    display: inline-flex;
    transition: 0.3s;
    &:hover {
      background-color: var(--main-color-hover);
    }
  }

  .footer__copy {
    display: block;
    margin-top: 4.5rem;
    color: var(--title-color);
    text-align: center;
    font-size: var(--small-font-size);
  }

  @media screen and (max-width: 992px) {
    .footer__social-link {
      padding: 0.25rem;
      border-radius: 0.25rem;
      font-size: 1rem;
    }
  }
`;
