import React from "react";
import "./Scrollup.scss";

const Scrollup = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classlist.remove("show-scroll");
  });
  return (
    <a className="scrollup" href="#">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
