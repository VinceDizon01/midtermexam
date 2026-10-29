import React, { useState } from "react";
import "./App.css";


// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}


// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}


export default function App() {
  // Requirement B: Display default text when the app starts
  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");


  // Requirement C: Logic to handle button clicks and change display
  const handleButtonClick = (label) => {
    switch (label) {
      case "1": setDisplayText("Being On Time"); break;
      case "2": setDisplayText("Making An Effort"); break;
      case "3": setDisplayText("Being High Energy"); break;
      case "4": setDisplayText("Having A Positive Attitude"); break;
      case "5": setDisplayText("Being Passionate"); break;
      case "6": setDisplayText("Using Good Body Language"); break;
      case "7": setDisplayText("Being Coachable"); break;
      case "8": setDisplayText("Doing A Little Extra"); break;
      case "9": setDisplayText("Being Prepared"); break;
      case "0": setDisplayText("Having A Strong Work Ethic"); break;
      case "NAME": setDisplayText("VINCE CARLO P. DIZON"); break; 
      case "SUBJ": setDisplayText("C-PCIT9"); break;
      default: break;
    }
  };


  return (
    <div className="container">
      <div className="calculator">
        {/* Requirement A: Display full name and section at the top */}
        <h1 className="header" style={{ fontSize: "1.2em", textAlign: "center", marginBottom: "15px" }}>
          VINCE CARLO P. DIZON BSIT - DA3A
        </h1>
        
        <Display value={displayText} />
        
        <div className="buttons">
          <Button label="7" onClick={() => handleButtonClick("7")} />
          <Button label="8" onClick={() => handleButtonClick("8")} />
          <Button label="9" onClick={() => handleButtonClick("9")} />


          <Button label="4" onClick={() => handleButtonClick("4")} />
          <Button label="5" onClick={() => handleButtonClick("5")} />
          <Button label="6" onClick={() => handleButtonClick("6")} />


          <Button label="1" onClick={() => handleButtonClick("1")} />
          <Button label="2" onClick={() => handleButtonClick("2")} />
          <Button label="3" onClick={() => handleButtonClick("3")} />


          <Button label="NAME" onClick={() => handleButtonClick("NAME")} />
          <Button label="0" onClick={() => handleButtonClick("0")} />
          <Button label="SUBJ" onClick={() => handleButtonClick("SUBJ")} />
        </div>
      </div>
    </div>
  );
}