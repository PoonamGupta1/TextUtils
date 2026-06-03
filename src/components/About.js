import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(2, 27, 46)" : "white"
  };

  return (
    <div className="p-4 my-3" style={myStyle}>
      <h2 className="my-2 pb-2 text-center">About us</h2>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Powerful Text Manipulation Tools
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Transform your text easily using smart text utilities like
                Uppercase, Lowercase, Capitalize Text, Alternate Case, Sentence
                Case, Reverse Words, Remove Extra Spaces, and Remove Duplicate
                Words. Improve productivity with quick and simple text
                formatting features.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Text Analysis & Reading Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Analyze your text instantly with useful insights such as Word
                Count, Character Count, Reading Time, Preview Mode, and Speed
                Reading support. These features help users understand and
                optimize their content efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Easy Copy, Clear & Download Options
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                {" "}
                Manage your text effortlessly with Copy Text, Clear Text, and
                Download Text features. Save your formatted content into text
                files and reuse it anytime with a clean and user-friendly
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
