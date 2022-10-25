import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const AlertaCorrecta = () => {
    Swal.fire({
      title: "Cool!",
      text: "Your message has been sent successfully!",
      icon: "success",
      confirmButtonText: "Ok!",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xgrf4wd",
      "template_taaexjm",
      form.current,
      "lXAeyoLMc8mPQLFnK"
    );
    e.target.reset();
    AlertaCorrecta();
  };

  const AlertaError = () => {
    Swal.fire({
      title: "Error!",
      text: "Control the data!",
      icon: "error",
      confirmButtonText: "Ok!",
    });
  };

  return (
    <ContactContainer className="contact section" id="contact">
      <h2 className="section__title">On a minute</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact-card-title">Email</h3>
              <span className="contact__card-data">
                estebaanlunaaa@gmail.com
              </span>

              <a
                target="_blank"
                href="mailto:estebaanlunaaa@gmail.com"
                className="contact__button"
              >
                Click here
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx  bxl-linkedin-square contact__card-icon"></i>

              <h3 className="contact-card-title">Linkedln</h3>
              <span className="contact__card-data">Esteban Nicolás Luna</span>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/esteban-nicol%C3%A1s-luna--/"
                className="contact__button"
              >
                Click here
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx bxl-github contact__card-icon"></i>

              <h3 className="contact-card-title">GitHub</h3>
              <span className="contact__card-data">EstebanLuu</span>

              <a
                target="_blank"
                href="https://github.com/EstebanLuu"
                className="contact__button"
              >
                Click here
                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me In this form</h3>
          <form
            ref={form}
            onSubmit={(e) => {
              e.preventDefault();
              e.target.name.value.length === 0 ||
              e.target.email.value.length === 0 ||
              e.target.Message.value.length === 0
                ? AlertaError()
                : sendEmail(e);
            }}
            className="contact__form"
          >
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="Message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write you message"
              ></textarea>
            </div>

            <button type="submit" className="button button--flex">
              Send
              <i className="uil uil-navigator uil-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  .contact__container {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    column-gap: 6rem;
    padding-bottom: 3rem;
  }

  .contact__title {
    text-align: center;
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1-5);
  }

  .contact__info {
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 300px;
  }

  .contact__card {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 0.75rem;
    text-align: center;
  }

  .contact__card-icon {
    font-size: 2rem;
    color: var(--title-color);
    margin-bottom: var(--mb-0-25);
  }

  .contact__card-title,
  .contact__card-data {
    font-size: var(--small-font-size);
  }

  .contact__card-title {
    font-weight: var(--font-medium);
  }

  .contact__card-data {
    display: block;
    margin-bottom: var(--mb-0-75);
  }

  .contact__form {
    width: 360px;
  }

  .contact__form-div {
    position: relative;
    margin-bottom: var(--mb-2);
    height: 4rem;
  }

  .contact__form-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: none;
    color: var(--text-color);
    outline: none;
    border-radius: 0.75rem;
    padding: 1.5rem;
    z-index: 1;
  }
  .contact__form-tag {
    position: absolute;
    top: -0.75rem;
    left: 1.25rem;
    font-size: var(--small-font-size);
    padding: 0.25rem;
    background-color: var(--body-color);
    z-index: 10;
  }

  .contact__form-area {
    height: 11rem;
  }

  .contact__form-area textarea {
    resize: none;
  }

  .contact__button {
    color: var(--main-color);
    font-size: var(--small-font-size);
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1px;
    transition: 0.4s;
  }

  .button:hover .uil-navigator {
    transform: translateX(0.3rem);
  }

  .uil-navigator {
    transition: 0.3s;
  }

  .contact-icon {
    font-size: 1rem;
    transition: 0.4s;
  }

  .contact-button-icon {
    transition: 0.4s;
  }

  .contact__button:hover .contact-button-icon {
    transform: translateX(0.25rem);
    transition: 0.4s;
  }

  @media screen and (max-width: 992px) {
    .contact__container {
      column-gap: 3rem;
    }
  }

  @media screen and (max-width: 768px) {
    .contact__container {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
    .contact__info {
      justify-content: center;
    }

    .contact__form {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 576px) {
    .contact__info {
      grid-template-columns: 1fr;
    }
    .contact__form {
      width: 100%;
    }
  }

  @media screen and (max-width: 350px) {
  }
`;
