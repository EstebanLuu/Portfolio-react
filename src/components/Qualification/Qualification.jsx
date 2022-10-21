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
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
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
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2021
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
            </div>
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
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">
                  Henry - Bootcamp
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
                <h3 className="qualification__title">
                  business management degree
                </h3>
                <span className="qualification__subtitle">3° - UAI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  Argetnina - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2021
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
    &:hover {
      color: var(--title-color-dark);
    }
  }

  .qualification__icon {
    font-size: 1.8rem;
    margin-right: var(--mb-0-25);
  }

  .qualification__active {
    color: var(--title-color-dark);
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
