import React from "react";
import "./about.css";
import Photo from "../../assets/Zain.jpg";
import github from "../../assets/github_mark.png";
import facebook from "../../assets/facebook_icon.png";
const About = () => {
  return (
    <div className="about__section">
      <div className="about_section_image">
        <img src={Photo} alt="Zain" />
      </div>
      <div className="about__section__description">
        <h3>About Me</h3>
        <h1>Zain Hashmi</h1>
        <p>
          I have been working as a freelancer for the past 2 years. I have
          worked with clients on different projects. I have worked on different
          technologies like MERN stack, Python, Java, and many more. I am also
          working on my personal project{" "}
          <a href="https://github.com/Z9dot/E-REM">E-REM</a>.
        </p>
        <div className="my__skills">
          <h2>My Skills</h2>
          <div className="programming">
            <button>Python</button>
            <button>Java</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
          </div>
          <div className="mern__stack">
            <button>MongoDB</button>
            <button>Express</button>
            <button>React</button>
            <button>Node</button>
          </div>
        </div>
        <div className="social__media__accounts">
          <h2>Connect with me</h2>
          <div className="social__media__icons">
            <div>
              <a href="githu">
                <i src="{github}" alt="Github"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
