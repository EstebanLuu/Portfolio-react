import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <i class="uil uil-mouse-alt"></i>
      </a>

      <span className="home__scroll-name">Scroll Down</span>
      <i class="uil uil-angle-down home__scroll-arrow"></i>
    </div>
  );
};

export default ScrollDown;
