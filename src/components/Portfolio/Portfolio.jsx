import React from "react";
import styled from "styled-components";
import Works from "./Works";

const Portfolio = () => {
  return (
    <PortfolioContainer className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <Works />
    </PortfolioContainer>
  );
};

export default Portfolio;

const PortfolioContainer = styled.section`
  .work__container {
    grid-template-columns: repeat(2, max-content);
    gap: 3rem;
    justify-content: center;
  }

  .work__card {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.25rem;
    border-radius: 1rem;
  }

  .work__img {
    width: 295px;
    border-radius: 1rem;
    margin-bottom: var(--mb-1);
  }

  .work__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-5);
  }

  .work__button {
    color: var(--text-color);
    font-size: var(--small-font-size);
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
  }

  .work__button-icon {
    font-size: 1rem;
    transition: 0.4s;
  }

  .work__button:hover .work__button-icon {
    transform: translateX(0.25rem);
  }
`;
