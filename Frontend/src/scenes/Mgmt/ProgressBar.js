import React, { useState } from "react";
import "./ProgressBar.css";
const ProgressBar = ({ textarray }) => {
  const [activeCircle, setActiveCircle] = useState(0);
  const moveCircle = () => {
    setActiveCircle((activeCircle + 1) % textarray.length);
  };
  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-container">
          {textarray.map((text, i) => {
            return (
              <div className={`circle ${i === activeCircle ? "active" : ""}`}>
                <p
                  className="circle-text"
                  style={{ top:"-50px" }}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <button className="move-button" onClick={moveCircle}>{`NEXT >>>>`}</button>
      </div>
    </>
  );
};

export default ProgressBar;
