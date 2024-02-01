import React from "react";
import "./header.css";
import Photo from "../../assets/Zain.jpg";
const Header = () => {
  return (
    <div className="header__section">
      <div className="description">
        <p>Hi! I am Zain Hashmi</p>
        <h1>I'm Mern Stack Developer.</h1>
        <p>
          Currently, I am pursuing a degree in Software Engineering from Comsats
          University Islamabad. With a strong skill set and the urge to learn
          new things, I want to be a part of the industry where I can utiize my
          skill and energy to solve real life problems and learn new things.
          This is my portfolio site to introduce myself.
        </p>
        <div className="projects__button">
          <button>My Projects</button>
        </div>
      </div>
      <div className="photo">
        <img src={Photo} alt="Zain" />
      </div>
    </div>
  );
};

export default Header;
