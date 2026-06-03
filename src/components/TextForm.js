import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // this function is responsible for updated the text to uppercase.
  const handleUpCase = () => {
    const upperCase = text.toUpperCase();
    props.showAlert("UpperCase Converted", "success");
    return setText(upperCase);
  };

  // for count the length
  const textLength = (text) => {
      const textSplit = text.split(" ");
      let length = 0;
      for (let i=0;i< textSplit.length;i++){
        if(textSplit[i] !== " ") {
          length += textSplit[i].length;
        }
      }
      return length;
  }

  // this function is used to convert text into lowercase.
  const handleLowerCase = () => {
    const lowercase = text.toLowerCase();
    props.showAlert("LowerCase Converted", "success");
    return setText(lowercase);
  };

  // this function is responsible for updated the current textarea field
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  // this function is used to clear the text
  const clearText = () => {
    setText("");
    props.showAlert("Text Clear", "success");
  };

  // this function is used for the sentence case
  const handleSentenceCase = () => {
    let sentenceCase = text.charAt(0).toUpperCase();
    sentenceCase += text.slice(1);
    setText(sentenceCase);
    props.showAlert("Sentence Case Converted", "success");
  };

  // This function is used to convert the text into capitialize
  const handleCaptialize = () => {
    let split = text.split(" ");
    let word = "";
    let newText = "";
    for (let index = 0; index < split.length; index++) {
      word = split[index].charAt(0).toUpperCase();
      word += split[index].slice(1);
      newText += word;
      newText += " ";
    }
    setText(newText);
    props.showAlert("Captialize Case Converted", "success");
  };

  // this function is used to convert the case into alternating case
  const handleAlternateCase = () => {
    let alternateCase = text.split(" ");
    let word = "";
    for (let i = 0; i < alternateCase.length; i++) {
      for (let j = 0; j < alternateCase[i].length; j++) {
        if (j % 2 === 0) {
          word += alternateCase[i].charAt(j).toUpperCase();
        } else {
          word += alternateCase[i].charAt(j).toLowerCase();
        }
      }
      word += " ";
    }
    setText(word);
    props.showAlert("Alternase Case Converted", "success");
  };

  // this function is used to reverse the text
  const handleReverseCase = () => {
    let textSplit = text.split(" ");
    let reverseText = "";
    for (let i = textSplit.length - 1; i >= 0; i--) {
      if (textSplit[i] !== "") {
        reverseText += textSplit[i];
        reverseText += " ";
      }
    }
    setText(reverseText);
    props.showAlert("Reverse Case Converted", "success");
  };

  // this function is used to remove the extra white spaces
  const handleRemoveSpaces = () => {
    let newText = text.split(" ");
    let removeExtraSpaces = "";
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] !== "") {
        removeExtraSpaces += newText[i];
        removeExtraSpaces += " ";
      }
    }
    setText(removeExtraSpaces);
    props.showAlert("Remove extra space", "success");
  };

  // this function is used to copy text
  const handleCopytext = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied", "success");
  };

  // this function is used to download the generated text
  const handleDownloadtext = () => {
    const blob = new Blob([text], { type: "text/plan" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Generated Text By Textutils";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    props.showAlert("Your Text Downloaded", "success");
  };

  // remove the duplicate words
  const handleDuplicateWords = () => {
    const textSplit = text.split(" ");
    let removeWords = "";
    for (let i = 0; i < textSplit.length; i++) {
      let removeDuplicateWords = "";
      for (let j = i + 1; j < textSplit.length; j++) {
        if (textSplit[i] !== textSplit[j]) {
          removeDuplicateWords = textSplit[i];
        }
      }
      removeWords += removeDuplicateWords;
      removeWords += " ";
    }
    setText(removeWords);
    props.showAlert("Duplicate word removed", "success");
  };

  // this function is used to speak a text
  const handleSpeakText = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is speaking", "success");
  };
  let textWords = 0;

  return (
    <>
      <div className="container">
        <div className="mb-3 mt-5">
          <h3
            htmlFor="textarea"
            className={`form-label text-${props.mode === "light" ? "dark" : "light"}  `}
          >
            {props.heading}
          </h3>
          <textarea
            name=""
            className={`form-control bg-${props.mode === "light" ? "black" : "light"} text-${props.mode === "light" ? "light" : "black"} `}
            rows="8"
            id="myBox"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div className="container-fluid row gap-2 my-4">
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleUpCase}
            >
              Upper case
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleLowerCase}
            >
              Lower case
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleSentenceCase}
            >
              Sentence case
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleCaptialize}
            >
              Captialize case
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleAlternateCase}
            >
              Alternate case
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleReverseCase}
            >
              Reverse words
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleRemoveSpaces}
            >
              Remove spaces
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleDuplicateWords}
            >
              Remove Duplicate Words
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleCopytext}
            >
              Copy text
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleDownloadtext}
            >
              Download text
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={handleSpeakText}
            >
              Speak text
            </button>
            <button disabled={text.length === 0}
              className={`btn btn-outline-${props.mode === "light"   ? "dark" : "light"} col-auto`}
              onClick={clearText}
            >
              Clear Text
            </button>
          </div>

          <div
            className="container"
            className={`text-${props.mode === "light"   ? "dark" : "light"} `}
          >
            <h3>Your Text Summary</h3>
            <p>
              {
                text.split(/\s+/).filter((a1) => {
                  return a1.length !== 0;
                }).length
              }
              {" "}words, {textLength(text)}
              {" "}characters
            </p>
            <p>
              Time to read{" "}
              {text.split(/\s+/).filter((a1) => {
                return a1.length !== 0;
              }).length *
                (1 / 125)}
            </p>
            <h3>Preview</h3>
            <p>{text === "" ? "Enter the text to preview" : text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
