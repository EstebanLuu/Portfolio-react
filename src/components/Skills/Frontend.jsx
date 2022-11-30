import React from "react";
import styled from "styled-components";

const Frontend = () => {
  return (
    <SkillFront className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-css3"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-javascript"></i>

            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-vuejs"></i>

            <div>
              <h3 className="skills__name">Vue</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-redux"></i>

            <div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-react"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
      </div>
    </SkillFront>
  );
};

export default Frontend;

const SkillFront = styled.div`
  .bxl-html5,
  .bxl-git {
    color: red;
  }

  .bxl-css3,
  .bxl-react {
    color: #6dc1dd;
  }

  .bxl-javascript {
    color: orange;
  }

  .bxl-vuejs {
    color: #61b656;
  }

  .bxl-redux {
    color: #a200ff;
  }
`;
