import React, { useEffect, useState } from "react";
import "./WordCounter.css";

const WordCounter = () => {
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState("");

  const setTextEmpty = () => {
    setText("");
    setDisabled(true);
  };

  const handleTextChange = (event) => {
    const updatedText = event.target.value;
    setText(updatedText);
    setDisabled(updatedText === ""); // Update the disabled state based on the input

    // Other actions with the entered text can be performed here
  };

  const countWords = (text) => {
    const wordsArray = text.trim().split(/\s+/);
    return wordsArray.filter((word) => word !== "").length;
  };

  const countCharacters = (text) => {
    return text.length;
  };

  return (
    <main>
      <h1>Word Counter</h1>
      <label>Free online character and word count tool</label>
      <textarea
        value={text}
        onChange={handleTextChange}
        className="text-area"
        placeholder="Type or paste your text"
        type="text"
      />
      <button
        onClick={setTextEmpty}
        type="button"
        className="clear"
        id="clearBtn"
        disabled={disabled}
      >
        Clear
      </button>
      <div className="buttonscharword">
        <button className="charword left">
          Character: {countCharacters(text)}
        </button>
        <button className="charword right">Word: {countWords(text)}</button>
      </div>
    </main>
  );
};

export default WordCounter;
