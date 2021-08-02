import React from "react";
import Typewriter from "typewriter-effect";
import "./hero.css";

export default function hero() {
  return (
    <div className="herosec">
      <div className="conthero">
        {" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to our Covid tracking application.")
              .pauseFor(3000)
              .deleteAll()

              .typeString("Stay Safe !! Stay Healthy !!")
              .start();
          }}
        />
      </div>
    </div>
  );
}
