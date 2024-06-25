import React, { useState } from "react";

export default function Textform(prop) {
  const [text, setText] = useState("");
  const [italic, setItalic] = useState("Convert to italic");
  const [style, setStyle] = useState("normal");
  const handleUpClick = () => {
    console.log("Button is clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    prop.showAlert("Converted to Upper Case ", "success");
  };
  const handleLowClick = () => {
    console.log("Button is clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    prop.showAlert("Converted to Lower Case ", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    prop.showAlert("Copied to clipboard!", "success");
  };
  const handleItalicClick = () => {
    if (italic === "Convert to italic") {
      setStyle("italic");
      setItalic("Convert to normal");
      prop.showAlert("Converted to Italic ", "success");
    } else {
      setStyle("normal");
      setItalic("Convert to italic");
      prop.showAlert("Converted to Normal ", "success");
    }
  };
  const handleClrClick = () => {
    setText("");
    prop.showAlert("Text cleared ", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div style={{ color: prop.mode === "light" ? "black" : "white" }}>
        <h1>{prop.heading}</h1>
        <div className="mb-3 ">
          <textarea
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleChange}
            style={{
              fontStyle: `${style}`,
              backgroundColor: prop.mode === "light" ? "white" : "#213654",
              color: prop.mode === "light" ? "black" : "white",
              borderColor: prop.mode === "light" ? "black" : "white",
              borderWidth: 0.5,
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleItalicClick}>
          {italic}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClrClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: prop.mode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>
          Text has{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {" "}
          Time required to read the text is{" "}
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h2>Preview of Text</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
//handlechange function will allow to change the content of the text area and update the value of the state variable "text"
// handleClick will do the alloted tasks
