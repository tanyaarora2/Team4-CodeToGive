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
    documents: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "age" && parseInt(value) <= 0) {
      // Show an error message or handle the validation error as needed
      console.error("Age must be greater than 0");
      return;
    }
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
      documents: "",
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
          <select
            className="select-feature"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Child Classification:
          <select
            className="select-feature"
            name="childClassification"
            value={formData.childClassification}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Classification</option>
            <option value="abandoned">Abandoned</option>
            <option value="surrendered">Surrendered</option>
            <option value="admitGuardians">Admitted by Guardians</option>
            <option value="orphaned">Orphaned</option>
          </select>
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
          />
        </label>
        <br />
        <label>
          Last Visit Since:
          <input
            type="date"
            name="lastVisitSince"
            value={formData.lastVisitSince}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Call Since:
          <input
            type="date"
            name="lastCallSince"
            value={formData.lastCallSince}
            onChange={handleInputChange}
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
            type="date"
            name="cwcLastReview"
            value={formData.cwcLastReview}
            onChange={handleInputChange}
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
          />
        </label>
        <br />
        <label>
          Add a drive link to all the documents:
          <input
            type="text"
            name="documents"
            value={formData.documents}
            onChange={handleInputChange}
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
