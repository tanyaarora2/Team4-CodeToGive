import React, { useState } from "react";
import "./SocialWorkerForm.css";

const Form = ({ settShowForm }) => {
  const [formData, setFormData] = useState({
    caseNumber: "",
    state: "",
    district: "",
    shelterHome: "",
    childName: "",
    gender: "",
    dateOfBirth: "",
    age: "",
    childClassification: "",
    reasonForAdmission: "",
    reasonForFlagging: "",
    lastVisitSince: "",
    lastCallSince: "",
    guardian: "",
    siblingDetails: "",
    totalShelterHomeStay: "",
    cwcLastReview: "",
    lastCwcOrder: "",
    caseHistory: "",

    newspaperPublicationPendingSince: "",
    finalPoliceReportPendingSince: "",
    surrenderPendingSince: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Access the form data using the formData state object

    // Clear form values
    setFormData({
      state: "",
      district: "",
      shelterHome: "",
      childName: "",
      caseNumber: "",
      gender: "",
      dateOfBirth: "",
      age: "",
      childClassification: "",
      reasonForAdmission: "",
      reasonForFlagging: "",
      lastVisitSince: "",
      lastCallSince: "",
      guardian: "",
      siblingDetails: "",
      totalShelterHomeStay: "",
      cwcLastReview: "",
      lastCwcOrder: "",
      caseHistory: "",
      documentsCompleted: "",
      documentsPending: "",
      newspaperPublicationPendingSince: "",
      finalPoliceReportPendingSince: "",
      surrenderPendingSince: "",
    });

    // Close the form
    settShowForm(false);

    // Show alert message
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-bg">
      <form className="AddCaseForm" onSubmit={handleSubmit}>
        <h1>Fill the details required</h1>
        <label>
          Case Number:
          <input
            type="text"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          District:
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Shelter Home:
          <input
            type="text"
            name="shelterHome"
            value={formData.shelterHome}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Child Name:
          <input
            type="text"
            name="childName"
            value={formData.childName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Child Classification:
          <input
            type="text"
            name="childClassification"
            value={formData.childClassification}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Reason for Admission:
          <input
            type="text"
            name="reasonForAdmission"
            value={formData.reasonForAdmission}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Reason for Flagging:
          <input
            type="text"
            name="reasonForFlagging"
            value={formData.reasonForFlagging}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Last Visit Since:
          <input
            type="text"
            name="lastVisitSince"
            value={formData.lastVisitSince}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Last Call Since:
          <input
            type="text"
            name="lastCallSince"
            value={formData.lastCallSince}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Guardian:
          <input
            type="text"
            name="guardian"
            value={formData.guardian}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Sibling Details:
          <input
            type="text"
            name="siblingDetails"
            value={formData.siblingDetails}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Total Shelter Home Stay:
          <input
            type="text"
            name="totalShelterHomeStay"
            value={formData.totalShelterHomeStay}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          CWC Last Review:
          <input
            type="text"
            name="cwcLastReview"
            value={formData.cwcLastReview}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Last CWC Order:
          <input
            type="text"
            name="lastCwcOrder"
            value={formData.lastCwcOrder}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Case History:
          <input
            type="text"
            name="caseHistory"
            value={formData.caseHistory}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Newspaper Publication Pending Since:
          <input
            type="text"
            name="newspaperPublicationPendingSince"
            value={formData.newspaperPublicationPendingSince}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Final Police Report Pending Since:
          <input
            type="text"
            name="finalPoliceReportPendingSince"
            value={formData.finalPoliceReportPendingSince}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Surrender Pending Since:
          <input
            type="text"
            name="surrenderPendingSince"
            value={formData.surrenderPendingSince}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button className="socialFormSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
