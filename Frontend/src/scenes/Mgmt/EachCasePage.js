import React from "react";
import "./EachCasePage.css";
import ProgressBar from "./ProgressBar";
import imageSrc from "../../images/profile-photo.jpg";
const EachCasePage = ({ caseNumber }) => {
  const formData = JSON.parse(localStorage.getItem(`${caseNumber}_formData`));
  if (!formData) {
    return <div>No data found for case number: {caseNumber}</div>;
  }

  return (
    <div>
      <div className="each_case_number">Case_ID: {caseNumber}</div>
      <span className="profile-progress-span">
        <span className="each_case_details">PROFILE</span>
        <span>
          <ProgressBar textarray={["A", "B", "C"]} />
        </span>
      </span>
      <div className="image-container">
        <img src={imageSrc} alt="Your Image" className="top-left-image" />
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
          <textarea value={formData.childName || ""} readOnly={true} />
          <textarea value={formData.gender || ""} readOnly={true} />
          <textarea value={formData.dateOfBirth || ""} readOnly={true} />
          <textarea value={formData.age || ""} readOnly={true} />
          <textarea
            value={formData.childClassification || ""}
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
          <textarea value={formData.state || ""} readOnly={true} />
          <textarea value={formData.district || ""} readOnly={true} />
          <textarea value={formData.shelterHome || ""} readOnly={true} />
          <textarea value={formData.reasonForAdmission || ""} readOnly={true} />
          <textarea value={formData.reasonForFlagging || ""} readOnly={true} />
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
          <textarea value={formData.lastVisitSince || ""} readOnly={true} />
          <textarea value={formData.lastCallSince || ""} readOnly={true} />
          <textarea value={formData.guardian || ""} readOnly={true} />
          <textarea value={formData.siblingDetails || ""} readOnly={true} />
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
          <textarea value={formData.cwcLastReview || ""} readOnly={true} />
          <textarea value={formData.lastCwcOrder || ""} readOnly={true} />
          <textarea
            value={formData.surrenderPendingSince || ""}
            readOnly={true}
          />
          <textarea
            value={formData.newspaperPublicationPendingSince || ""}
            readOnly={true}
          />
          <textarea
            value={formData.finalPoliceReportPendingSince || ""}
            readOnly={true}
          />
        </span>

        <span className="labels-span history-doc">
          <span className="each_case_textarea_label">Case History</span>
          <span className="each_case_textarea_label">Documents</span>
        </span>

        <span className="each_case_textarea history-doc">
          <textarea value={formData.caseHistory || ""} readOnly={true} />
          <textarea value={formData.documents || ""} readOnly={true} />
        </span>

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
