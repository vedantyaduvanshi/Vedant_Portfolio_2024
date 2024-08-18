import React from "react";
import { IconContext } from "react-icons";
import { FaVolumeHigh } from "react-icons/fa6";

export default function Hello() {
  return (
    <div id="HomePage">
      <div id="Introduction">
        <h2>PORTFOLIO <span>Vedant Y, 20</span></h2>
        <div id="Volume">
          <IconContext.Provider
            value={{
              color: "white",
              size: "35",
              className: "global-class-name",
            }}
          >
            <FaVolumeHigh />{" "}
          </IconContext.Provider>
        </div>
      </div>
      <div id="WelcomeSection">
        <h1>NAMASTE</h1>
        <h2>I'm VEDANT YADUVANSHI</h2>
        <h4>You've just landed on my portfolio. Scroll down to explore.</h4>

      </div>
    </div>
  );
}
