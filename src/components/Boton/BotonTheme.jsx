import React from "react";
import styled from "styled-components";

const BotonTheme = ({ handleDark, theme }) => {
  return (
    <BottonTheme className="botton__dark" onClick={handleDark}>
      <span className={`${theme ? "noActive" : "active"}`}>
        <i className="uil uil-moon"></i>
      </span>

      <span className={` ${theme ? "active" : "noActive"}`}>
        <i className="uil uil-sun"></i>
      </span>
    </BottonTheme>
  );
};

export default BotonTheme;

const BottonTheme = styled.button`
  position: absolute;
  right: 0;
  top: 80px;
  color: white;
  padding: 5px;
  background: transparent;
  border-radius: 5px;
  border: 0.5px solid transparent;
  margin-right: 20px;

  .active {
    display: initial;
    .uil-sun {
      color: white;
    }
    .uil-moon {
      color: black;
    }
  }

  .noActive {
    display: none;
  }

  @media screen and (max-width: 576px) {
    top: 20px;
    margin: 20px;
  }

  @media screen and (max-width: 350px) {
    top: 20px;
    margin: auto;
  }
`;
