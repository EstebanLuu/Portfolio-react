import React from "react";
import styled from "styled-components";

const Qualification = () => {
  return (
    <QualificationContainer className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personar Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>

          <div className="qualification__sections">
            <div className="qualification__content qualification__content-active ">
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

                  <span className="qualification__line"></span>
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

            <div className="qualification__content">
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

                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </QualificationContainer>
  );
};

export default Qualification;

const QualificationContainer = styled.section``;
