import React from "react";
import "./toBe.css";
import swphoto from "../../images/userprofile2.jpeg";
function BoxWithPhotoAndName(props) {
  const { name, textbox1, textbox2 } = props;

  return (
    <div className="box-tobe">
      <div className="photo">
        <img src={swphoto} alt="Profile" />
      </div>
      <h2 className="tobe-heading">{name}</h2>
      <div className="info-box">
        <div className="text-box-tobe">
          <input
            type="text"
            value={textbox1}
            onChange={(e) => props.onTextbox1Change(e.target.value)}
          />
        </div>
        <div className="text-box-tobe">
          <input
            type="text"
            value={textbox2}
            onChange={(e) => props.onTextbox2Change(e.target.value)}
          />
        </div>
      </div>
      <button className="assign-button">Assign</button>
    </div>
  );
}

export default BoxWithPhotoAndName;
