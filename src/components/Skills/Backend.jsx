import React from "react";
import styled from "styled-components";

const Backend = () => {
  return (
    <SkillBack className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-postgresql"></i>

            <div>
              <h3 className="skills__name">PostgresSQL</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-nodejs"></i>

            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Sequelite</h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-firebase"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Sequelize</h3>
              <span className="skills__level"></span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-mongodb"></i>

            <div>
              <h3 className="skills__name">MongoDV</h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
      </div>
    </SkillBack>
  );
};

export default Backend;

const SkillBack = styled.div`
  .bxl-postgresql {
    color: #3838b8;
  }

  .bxl-nodejs,
  .bxl-mongodb {
    color: #3f9c3f;
  }

  .bx-badge-check {
    color: #3636ac;
  }

  .bxl-firebase {
    color: orange;
  }
`;
