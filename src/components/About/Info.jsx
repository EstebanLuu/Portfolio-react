import React from "react";

const Info = () => {
  return (
    <div className="about__info grid ">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 years</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">30 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bxs-school  about__icon"></i>

        <h3 className="about__title">Henry</h3>
        <span className="about__subtitle">Graduate</span>
      </div>
    </div>
  );
};

export default Info;
