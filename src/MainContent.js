import React from "react";
import email_logo from "./email_logo.png";
import linkedin_logo from "./linkedin_logo.png";

export default function MainContent() {
  return (
    <div className="container">
      <h1 className="author-name">Hamza El-Zant</h1>
      <h3 className="work">Frontend Developer</h3>
      <h4 className="university-name">Tripoli University</h4>

      <div className="button">
        <div className="email-button">
          <img src={email_logo} alt="Email logo" />
          <p>Email</p>
        </div>

        <div className="linkedin-button">
          <img src={linkedin_logo} alt="LinkedIn logo" />
          <p>LinkedIn</p>
        </div>
      </div>

      <div className="about">
        <h3>About</h3>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer
        </p>
      </div>

      <div className="interest">
        <h3>Interest</h3>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer
        </p>
      </div>
    </div>
  );
}
