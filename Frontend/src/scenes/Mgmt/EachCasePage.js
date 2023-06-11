import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgressBar from "./ProgressBar";
// import imageSrc from "../../images/profile-photo.jpg";
import "./EachCasePage.css";
import imageSrc from "../../images/child-pic.jpg"
import "./ButtonStyles.css";


const EachCasePage = ({ caseNumber }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setData(res.data);

      });
  }, []);
  // const formData = JSON.parse(localStorage.getItem(`${caseNumber}_formData`));
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      const matchingItem = data.find((item) => item.Case_Number === caseNumber);
      if (matchingItem) {
        setFormData(matchingItem);
      }
    }
  }, [data, caseNumber]);
  const problemRaised = () => {
    const Case_Number1 = 'KVB-04';

    axios.post(`http://localhost:8000/case/${Case_Number1}/`, { Assigned_To: "" })
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.error(error);

      });
    document.getElementById("problemtext").value = "";

  };
  if (!formData) {
    return <div>No data found for case number: {caseNumber}</div>;
  }

  return (
    <div>
      <div className="each_case_number">Case_ID: {caseNumber}</div>
      <span className="profile-progress-span">
        <span className="each_case_details">PROFILE</span>
        <span>
          <ProgressBar childClassification={formData.Child_Classification} />
        </span>
      </span>
      <div className="image-container">
        <img src={imageSrc} alt="Your-Profile" className="top-left-image" />
      </div>
      <div className="each_case_formData">
        <span className="labels-span">
          <span className="each_case_textarea_label">Child Name</span>
          <span className="each_case_textarea_label">Gender</span>
          <span className="each_case_textarea_label">Date of Birth</span>
          <span className="each_case_textarea_label">Age</span>
          <span className="each_case_textarea_label">Child Classification</span>
        </span>

        <span className="each_case_textarea">
          <textarea value={formData.Child_Name || ""} readOnly={true} />
          <textarea value={formData.Gender || ""} readOnly={true} />
          <textarea value={formData.DOB || ""} readOnly={true} />
          <textarea value={formData.Age || ""} readOnly={true} />
          <textarea
            value={formData.Child_Classification || ""}
            readOnly={true}
          />
        </span>

        <span className="labels-span">
          <span className="each_case_textarea_label">State</span>
          <span className="each_case_textarea_label">District</span>
          <span className="each_case_textarea_label">Shelter Home</span>
          <span className="each_case_textarea_label">Reason for Admission</span>
          <span className="each_case_textarea_label">Reason for Flagging</span>
        </span>

        <span className="each_case_textarea">
          <textarea value={formData.State || ""} readOnly={true} />
          <textarea value={formData.District || ""} readOnly={true} />
          <textarea value={formData.Shelter_Home || ""} readOnly={true} />
          <textarea value={formData.Reason_Admission || ""} readOnly={true} />
          <textarea value={formData.Reason_Flagging || ""} readOnly={true} />
        </span>

        <span className="labels-span">
          <span className="each_case_textarea_label">Last Visit Since</span>
          <span className="each_case_textarea_label">Last Call Since</span>
          <span className="each_case_textarea_label">Guardian</span>
          <span className="each_case_textarea_label">Sibling Details</span>
          <span className="each_case_textarea_label">
            Total Shelter Home Stay
          </span>
        </span>

        <span className="each_case_textarea">
          <textarea value={formData.Last_Visit || ""} readOnly={true} />
          <textarea value={formData.Last_Call || ""} readOnly={true} />
          <textarea value={formData.Guardian || ""} readOnly={true} />
          <textarea value={formData.Sibling || ""} readOnly={true} />
          <textarea
            value={formData.totalShelterHomeStay || ""}
            readOnly={true}
          />
        </span>

        <span className="labels-span">
          <span className="each_case_textarea_label">CWC Last Review</span>
          <span className="each_case_textarea_label">Last CWC Order</span>
          <span className="each_case_textarea_label">
            Surrender Pending Since
          </span>
          <span className="each_case_textarea_label">
            Newspaper Publication Pending Since
          </span>
          <span className="each_case_textarea_label">
            Final Police Report Pending Since
          </span>
        </span>

        <span className="each_case_textarea">
          <textarea value={formData.CWC_Last_Review || ""} readOnly={true} />
          <textarea value={formData.CWC_Last_Order || ""} readOnly={true} />
          <textarea
            value={formData.Surrender_Date || ""}
            readOnly={true}
          />
          <textarea
            value={formData.Newspaper_Date || ""}
            readOnly={true}
          />
          <textarea
            value={formData.Police_Date || ""}
            readOnly={true}
          />
        </span>

        <span className="labels-span history-doc">
          <span className="each_case_textarea_label">Case History</span>
          <span className="each_case_textarea_label">Documents</span>
        </span>

        <span className="each_case_textarea history-doc">
          <textarea value={formData.Case_History || ""} readOnly={true} />
          <textarea></textarea>
        </span>
        <hr></hr>
        <div className="heading">
          Raise a Query
        </div>
        {/* <div className="action">

          <input type="checkbox"></input>
          <label className="checkbox-label-action">Mark For Action</label>
        </div> */}
        <div className="action-problem">
          <h3>Problem Faced</h3>
          <input id="problemtext" placeholder="   Enter Problem Faced" type="text">
          </input>
          <button className="completed-btn" onClick={problemRaised}>Mark For Action </button>
        </div>
        {/* Display other form fields here */}
      </div>

    </div>
  );
};

export default EachCasePage;

/* Same code, just different structure */

// import React from "react";
// import "./EachCasePage.css"

// const EachCasePage = ({caseNumber}) => {
//   const formData = JSON.parse(localStorage.getItem(`${caseNumber}_formData`));
//   if (!formData) {
//     return <div>No data found for case number: {caseNumber}</div>;
//   }

//   return (
//     <div>
//       <div className="each_case_number">Case_ID: {caseNumber}</div>
//       <div className="each_case_details">PROFILE</div>
//       <div className="each_case_formData">

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Child Name</div><textarea value={formData.childName || ""} readOnly={true} />
//             <div className="each_case_textarea_label">
//                 Gender</div><textarea value={formData.gender || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Date of Birth</div><textarea value={formData.dateOfBirth || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Age</div><textarea value={formData.age || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Child Classification</div><textarea value={formData.childClassification || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 State</div><textarea value={formData.state || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 District</div><textarea value={formData.district || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Shelter Home</div><textarea value={formData.shelterHome || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Reason for Admission</div><textarea value={formData.reasonForAdmission || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Reason for Flagging</div><textarea value={formData.reasonForFlagging || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Last Visit Since</div><textarea value={formData.lastVisitSince || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Last Call Since</div><textarea value={formData.lastCallSince || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Guardian</div><textarea value={formData.guardian || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Sibling Details</div><textarea value={formData.siblingDetails || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Total Shelter Home Stay</div><textarea value={formData.totalShelterHomeStay || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 CWC Last Review</div><textarea value={formData.cwcLastReview || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Last CWC Order</div><textarea value={formData.lastCwcOrder || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Case History</div><textarea value={formData.caseHistory || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Newspaper Publication Pending Since</div><textarea value={formData.newspaperPublicationPendingSince || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Final Police Report Pending Since</div><textarea value={formData.finalPoliceReportPendingSince || ""} readOnly={true}/>
//         </span>

//         <span className="each_case_textarea">
//             <div className="each_case_textarea_label">
//                 Surrender Pending Since</div><textarea value={formData.surrenderPendingSince || ""} readOnly={true}/>
//             <div className="each_case_textarea_label">
//                 Documents</div><textarea value={formData.documents || ""} readOnly={true}/>
//         </span>

//       {/* Display other form fields here */}
//       </div>
//     </div>

//   );
// };

// export default EachCasePage;
