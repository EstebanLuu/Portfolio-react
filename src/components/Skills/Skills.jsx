import React from "react";
import styled from "styled-components";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <SkiilsContainer className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </SkiilsContainer>
  );
};

export default Skills;

const SkiilsContainer = styled.section`
  .skills__container {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
    justify-content: center;
  }
  .skills__content {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 4rem;
    border-radius: 1.25rem;
  }
  .skills__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    text-align: center;
    margin-bottom: var(--mb-1-5);
  }

  .skills__box {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
  }

  .skills__group {
    display: grid;
    align-items: center;
    row-gap: 1rem;
  }

  .skills__data {
    display: flex;
    column-gap: 0.5rem;
  }

  .skills .bx-badge-check {
    font-size: 1rem;
    color: var(--title-color);
  }

  .skills__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    line-height: 18px;
  }

  .skills__level {
    font-size: var(--tiny-font-size);
  }

  @media screen and (max-width: 992px) {
    .skills__container {
      grid-template-columns: max-content;
      row-gap: 2rem;
    }
  }

  @media screen and (max-width: 576px) {
    .skills__container {
      grid-template-columns: 1fr;
    }
    .skills__content {
      padding: 1.5rem;
    }
  }

  @media screen and (max-width: 350px) {
    .skills__box {
      column-gap: 1.25rem;
    }
    .skills__name {
      font-size: var(--small-font-size);
    }
  }
`;