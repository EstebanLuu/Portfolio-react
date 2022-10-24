import React, { useState } from "react";
import styled from "styled-components";

const Qualification = () => {
  const [toggle, seToggle] = useState(1);

  const toggleTab = (index) => {
    seToggle(index);
  };

  return (
    <QualificationContainer className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personar Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle == 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggle == 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle == 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UAI</h3>
                <span className="qualification__subtitle">
                  Business management
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Henry</h3>
                <span className="qualification__subtitle">
                  Bootcamp FullStack
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">English</h3>
                <span className="qualification__subtitle">
                  Argentina - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2015 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                {/* <span className="qualification__line"></span> */}
              </div>
            </div>
            {/* 
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2022
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggle == 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">FullStack Developer</h3>
                <span className="qualification__subtitle">
                  Codemmerce - Grupal proyect
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>

                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">CrESI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Ecommerce - Grupal proyect
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </QualificationContainer>
  );
};

export default Qualification;

const QualificationContainer = styled.section`
  .qualification__container {
    max-width: 768px;
  }

  .qualification__tabs {
    display: flex;
    justify-content: center;
    margin-bottom: var(--mb-2);
  }

  .qualification__button {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    color: var(--title-color);
    margin: 0 var(--mb-1);
    cursor: pointer;
    transition: 0.3s;
    background-color: transparent;
    &:hover {
      color: var(--main-color-hover);
    }
  }

  .qualification__icon {
    font-size: 1.8rem;
    margin-right: var(--mb-0-25);
  }

  .qualification__active {
    color: var(--main-color);
    &:hover {
      color: var(--main-color);
    }
  }

  .qualification__sections {
    display: grid;
    grid-template-columns: 0.5fr;
    justify-content: center;
  }

  .qualification__content {
    display: none;
  }

  .qualification__content-active {
    display: block;
  }

  .qualification__data {
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
  }

  .qualification__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .qualification__subtitle {
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
  }

  .qualification__calender {
    font-size: var(--small-font-size);
  }

  .uil-calendar-alt {
    padding: 0 2px;
  }

  .qualification__rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--text-color);
    border-radius: 50%;
  }

  .qualification__line {
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--text-color);
    transform: translate(6px, -7px);
  }

  @media screen and (max-width: 992px) {
    .qualification__container {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 768px) {
    .qualification__container {
      margin-left: var(--mb-1-5);
      margin-right: var(--mb-1-5);
    }
  }

  @media screen and (max-width: 576px) {
    .qualification__sections {
      grid-template-columns: initial;
      gap: 10px;
    }

    .qualification__tabs {
      gap: 10px;
    }

    .qualification__button {
      margin: 0 var(--mb-75);
    }
  }

  @media screen and (max-width: 350px) {
    .qualification__data {
      gap: 0.5rem;
    }
  }
`;
