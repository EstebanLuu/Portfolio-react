import React from 'react';
import styled from 'styled-components';
import CV from '../../files/CV2023.pdf';
import PersonalImage from '../../Assets/personalimage.jpeg';
import Info from './Info';


const About = () => {
  return (
    <AboutContainer className='about section' id='about'>
      <h2 className='section__title'>About me</h2>
      <span className='section__subtitle'>My introduction</span>

      <div className='about__container container grid'>
        <img src={PersonalImage} alt='' className='about__img' />
        <div className='about__data'>
          <Info />
          <p className='about__description'>
            Hi, I'm Esteban Luna, a 22-year-old Full Stack developer from
            Argentina. I'm passionate about creating innovative technology
            solutions and constantly seeking to learn new technologies and
            languages. I specialize in Frontend development. I've also developed
            on react, which allows me to deliver high-quality projects. If you
            need a passionate and committed Full Stack developer, don't hesitate
            to get in touch with me.
          </p>
          <a
            target='_blank'
            href={CV}
            className='botoncito button button--flex'
          >
            Download CV <i className='uil uil-file'></i>
          </a>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
  }

  .about__img {
    width: 350px;
    border-radius: 1.5rem;
    justify-self: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .about__info {
    grid-template-columns: repeat(3, 140px);
    gap: 0.5rem;
    margin-bottom: var(--mb-2);
  }

  .about__box {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.75rem;
    text-align: center;
    padding: 1rem 1.25rem;
    top: 0;
  }

  .about__icon {
    font-size: 1.5rem;
    color: var(--title-color);
    margin-bottom: var(--mb-0-5);
  }

  .about__title {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .about__subtitle {
    font-size: var(--tiny-font-size);
  }

  .about__description {
    padding: 0 4rem 0 0;
    margin-bottom: var(--mb-2-5);
  }

  .uil-file {
    transition: 0.5s;
  }

  .botoncito:hover .uil-file {
    animation: salto 0.4s alternate infinite ease-in;
  }

  @keyframes salto {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 992px) {
    .about__container {
      grid-template-columns: 1fr;
      row-gap: 2.5rem;
    }
    .about__img {
      width: 250px;
    }

    .about__box {
      padding: 0.75rem 0.5rem;
    }

    .about__data {
      text-align: center;
    }

    .about__info {
      justify-content: center;
    }

    .about__description {
      padding: 0 5rem;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 576px) {
    .about__info {
      grid-template-columns: repeat(3, 1fr);
    }
    .about__description {
      padding: 0;
    }
  }

  @media screen and (max-width: 350px) {
    .about__info {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
