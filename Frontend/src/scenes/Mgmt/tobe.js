import React from "react";
import "./toBe.css";
import swphoto from "../../images/userprofile2.jpeg";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";

function BoxWithPhotoAndName(props) {
  const { name, textbox1, textbox2 } = props;

  // const handleAssignClick = () => {
  //   const incrementedValue = parseInt(textbox2) + 1; // Increment the value by 1
  //   console.log(incrementedValue);
  //   props.onTextbox2Change(incrementedValue.toString()); // Update the value using props.onTextbox2Change
  //   console.log(textbox2);
  // };

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
      <button className="assign-button" onClick={handleAssignClick}>
        <NavBtnLink to="/ManagementTabsPage">Assign</NavBtnLink>
      </button>
    </div>
  );
}

export default BoxWithPhotoAndName;
