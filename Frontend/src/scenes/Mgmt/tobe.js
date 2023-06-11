import React from "react";
import "./toBe.css";
import swphoto from "../../images/userprofile2.jpeg";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";
import axios from 'axios';
function BoxWithPhotoAndName(props) {
  const { name, textbox1, textbox2 } = props;

  const handleAssignClick = () => {
    const Case_Number1 = 'KVB-09';
    const Case_Number2 = 'KVB-11'

    axios.post(`http://localhost:8000/case/${Case_Number1}/`, { Assigned_To: "" })
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.error(error);

      });

    axios.post(`http://localhost:8000/case/${Case_Number2}/`, { Assigned_To: "" })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });

    window.location.reload()
  };

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
        {/* <div className="text-box-tobe">
          <input
            type="text"
            value={textbox2}
            onChange={(e) => props.onTextbox2Change(e.target.value)}
          />
        </div> */}
      </div>
      <button className="assign-button" onClick={handleAssignClick}>
        <NavBtnLink to="/ManagementTabsPage">Assign</NavBtnLink>
      </button>
    </div>
  );
}

export default BoxWithPhotoAndName;
