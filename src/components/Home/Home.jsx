import styled from 'styled-components';
import personalimage from '../../Assets/personalimage.jpeg';
import React from 'react';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <HomeContainer>
      <section className='home section' id='home'>
        <div className='home__container container grid'>
          <div className='home__content grid'>
            <Social />

            <div className='home__img'>
              <img src={personalimage} alt='' />
            </div>

            <Data />
          </div>

          <ScrollDown />
        </div>
      </section>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  .home__container {
    row-gap: 3rem;
  }
  .home__content {
    grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;
  }

  .home__social {
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
  }

  .home__social-icon {
    font-size: 1.25rem;
    color: var(--title-color);
    transition: 0.5s;
    &:hover {
      color: var(--main-color);
    }
  }

  .home__title {
    color: var(--title-color);
    font-size: var(--big-font-size);
    margin-bottom: var(--mb-0-25);
  }

  @keyframes rotateAnimation {
    33% {
      transform: rotate(20deg);
    }
    66% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .home__hand {
    width: 38px;
    height: 38px;
    margin-left: 0.4rem;
    animation: rotateAnimation 3s linear infinite;
  }

  .home__subtitle {
    position: relative;
    font-size: var(--h3-font-size);
    padding-left: 5.4rem;
    font-weight: var(--font-normal);
    margin-bottom: var(--mb-1);
    &::before {
      content: '';
      position: absolute;
      width: 70px;
      height: 1px;
      background-color: var(--text-color);
      left: 0;
      top: 1rem;
    }
  }

  .home__description {
    max-width: 400px;
    margin-bottom: var(--mb-3);
  }

  .home__img {
    overflow: hidden;
    img {
      object-fit: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    border: 5px solid rgba(0, 0, 0, 0.1);
    order: 1;
    justify-self: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    box-shadow: inset 0 0 0 9px rgba(0, 0, 0, 0.123);
    animation: profile__animate 8s ease-in-out infinite 1s;
  }

  .uil-navigator {
    transition: 0.5s;
  }

  .button:hover .uil-navigator {
    transform: translateX(0.3rem);
  }

  @keyframes profile__animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  .uil-mouse-alt {
    font-size: 1.25rem;
    color: var(--title-color);
    background-color: #fff;
  }

  .wheel {
    animation: scroll 2s ease infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }

    30% {
      transform: translateY(3.7rem);
    }
  }

  .home__scroll {
    margin-left: 9.25rem;
    display: flex;
    align-items: center;
  }

  .home__scroll-name {
    color: var(--title-color);
    font-weight: var(--font-normal);
    margin-right: var(--mb-0-25);
    margin-left: 2px;
  }

  .home__scroll-arrow {
    font-size: 1.25rem;
    color: var(--title-color);
  }

  @media screen and (max-width: 992px) {
    .home__content {
      grid-template-columns: 100px repeat(2, 1fr);
      column-gap: 1.25rem;
    }

    .home__hand {
      width: 26px;
      height: 26px;
    }

    .home__title {
      font-size: var(--mb-1-5);
    }

    .home__subtitle {
      padding-left: 3.75rem;
      margin-bottom: var(--mb-1);
      &::before {
        width: 42px;
        top: 0.8rem;
      }
    }

    .home__description {
      max-width: initial;
      margin-bottom: var(--mb-1);
    }

    .home__img {
      width: 250px;
      height: 250px;
      box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
    }

    .home__scroll {
      margin-left: 7.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .home__content {
      grid-template-columns: 0fr 3fr;
      column-gap: 0;
      padding-top: 1rem;
      text-align: center;
    }
    .home__img {
      order: initial;
      justify-self: center;
    }

    .home__data {
      grid-column: 1/3;
    }

    .home__img {
      box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
      width: 200px;
      height: 200px;
    }

    .home__scroll {
      display: none;
    }
    .home__subtitle {
      padding-left: 0;
      &::before {
        display: none;
      }
    }
  }

  @media screen and (max-width: 350px) {
    .home__img {
      width: 180px;
      height: 180px;
    }

    .home__hand {
      width: 15px;
      height: 15px;
    }
    .home__data {
      text-align: center;
    }
    .home__subtitle {
      padding-left: 0;
      margin-bottom: var(--mb-1);
      &::before {
        width: 35px;
        top: 0.8rem;
      }
    }
  }
`;
