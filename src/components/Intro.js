import React from "react";
import Socials from "./Socials";
import ViewResume from "./ViewResume";
import './Intro.css';

function Intro() {
  return (
    <div className="intro">
      <h4>Hello, <em id="greetings">Welcome</em></h4>
      <h3>I'm James Orjiene</h3>
      <p>A UI/UX Designer and Web Developer</p>
      <small>Focused on crafting intuitive, user-centered digital experiences</small>

      <ViewResume />

      <Socials />
    </div>
  );
}

export default Intro;
