import React, { useState } from "react";
import "./ProgressBar.css";
import { NavBtnLink } from "../../components/Navbar/NavbarELements";

const ProgressBar = ({ childClassification }) => {
  let textarray = [];
  let timelineurl = "";
  if (childClassification === "Abandoned") {
    textarray = [
      "Complete Documentation",
      "Submit to DCPU and get NOC",
      "Submit to CWC and get LFA",
      "Get Child Uploaded to Carings"
    ];
    timelineurl = "/AbandonedTimeline";
  }
  else if (childClassification === "Child Admitted By Family") {
    textarray = [
      "Complete Documentation",
      "Submit to DCPU and get NOC",
      "Submit to CWC and get LFA",
      "Get Child Uploaded to Carings"
    ];
    timelineurl = "/AdmittedTimeline";
  }
  else if (childClassification === "Surrendered") {
    textarray = [
      "Verify / Obtain the Surrender Deed",
      "Submit to CWC and get LFA",
      "Get Child Uploaded to Carings"
    ];
    timelineurl = "/SurrenderedTimeline";
  }

  else if (childClassification === "Orphaned") {
    textarray = [
      "Work On and Complete Documentation",
      "Submit to DCPU and get NOC",
      "Submit to CWC and get LFA",
      "Get Child Uploaded to Carings"
    ];
    timelineurl = "/OrphanedTimeline";
  }
  const [activeCircle, setActiveCircle] = useState(0);
  const moveCircle = () => {
    setActiveCircle((activeCircle + 1) % textarray.length);
  };
  return (
    <>
      {/* <button style={{ cursor: "pointer", border: "none", backgroundColor: "white" }}> */}
      <NavBtnLink to={timelineurl}>
        <div className="progress-bar-container">
          <div className="progress-container">
            {textarray.map((text, i) => {
              return (
                <div
                  className={`circle ${i === activeCircle ? "active-progress" : ""
                    }`}
                >
                  <p className="circle-text">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </NavBtnLink>
      {/* <button
              className="move-button"
              onClick={moveCircle}
              >{`MOVE`}</button> */}

      {/* </button> */}
    </>
  );
};

export default ProgressBar;