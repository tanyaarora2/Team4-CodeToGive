import React, { useState } from "react";
import axios from 'axios';
import "./SocialWorkerForm.css";

const Form = ({ settShowForm }) => {
  const [formData, setFormData] = useState({
    Case_Number: "",
    State: "",
    District: "",
    Shelter_Home: "",
    Child_Name: "",
    Gender: "",
    DOB: "",
    Age: "",
    Child_Classification: "",
    Reason_Admission: "",
    Reason_Flagging: "",
    Last_Visit: "",
    Last_Call: "",
    Guardian: "",
    Sibling: "",
    Shelter_Stay: "",
    CWC_Last_Review: "",
    CWC_Last_Order: "",
    Case_History: "",
    Newspaper_Date: "",
    Police_Date: "",
    Surrender_Date: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Age" && parseInt(value) <= 0) {
      // Show an error message or handle the validation error as needed
      console.error("Age must be greater than 0");
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value !== "" ? value : ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Access the form data using the formData state object
    try {
      const response = await axios.post('http://localhost:8000', formData);

      // Handle the response here
    } catch (error) {
      console.log(error.response.data);
      console.log(error.config);

      console.error(error);
    }



    // Clear form values
    setFormData({
      Case_Number: "",
      State: "",
      District: "",
      Shelter_Home: "",
      Child_Name: "",
      Gender: "",
      DOB: "",
      Age: "",
      Child_Classification: "",
      Reason_Admission: "",
      Reason_Flagging: "",
      Last_Visit: "",
      Last_Call: "",
      Guardian: "",
      Sibling: "",
      Shelter_Stay: "",
      CWC_Last_Review: "",
      CWC_Last_Order: "",
      Case_History: "",
      Newspaper_Date: "",
      Police_Date: "",
      Surrender_Date: "",
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
            name="Case_Number"
            value={formData.Case_Number}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Child Name:
          <input
            type="text"
            name="Child_Name"
            value={formData.Child_Name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            className="select-feature"
            name="Gender"
            value={formData.Genderender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Child Classification:
          <select
            className="select-feature"
            name="Child_Classification"
            value={formData.Child_Classification}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Classification</option>
            <option value="Abandoned">Abandoned</option>
            <option value="Surrendered">Surrendered</option>
            <option value="Orphaned">Orphaned</option>
            <option value="Child Admitted By Family">Child Admitted By Family</option>
          </select>
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            name="State"
            value={formData.State}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          District:
          <input
            type="text"
            name="District"
            value={formData.District}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Shelter Home:
          <input
            type="text"
            name="Shelter_Home"
            value={formData.Shelter_Home}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Reason for Admission:
          <input
            type="text"
            name="Reason_Admission"
            value={formData.Reason_Admission}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Reason for Flagging:
          <input
            type="text"
            name="Reason_Flagging"
            value={formData.Reason_Flagging}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Visit Since:
          <input
            type="date"
            name="Last_Visit"
            value={formData.Last_Visit}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Call Since:
          <input
            type="date"
            name="Last_Call"
            value={formData.Last_Call}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Guardian:
          <input
            type="text"
            name="Guardian"
            value={formData.Guardian}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Sibling Details:
          <input
            type="text"
            name="Sibling"
            value={formData.Sibling}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Total Shelter Home Stay:
          <input
            type="text"
            name="Shelter_Stay"
            value={formData.Shelter_Stay}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          CWC Last Review:
          <input
            type="date"
            name="CWC_Last_Review"
            value={formData.CWC_Last_Review}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last CWC Order:
          <input
            type="text"
            name="CWC_Last_Order"
            value={formData.CWC_Last_Order}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Case History:
          <input
            type="text"
            name="Case_History"
            value={formData.Case_History}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Newspaper Publication Pending Since:
          <input
            type="text"
            name="Newspaper_Date"
            value={formData.Newspaper_Date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Final Police Report Pending Since:
          <input
            type="text"
            name="Police_Date"
            value={formData.Police_Date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Surrender Pending Since:
          <input
            type="text"
            name="Surrender_Date"
            value={formData.Surrender_Date}
            onChange={handleInputChange}
          />
        </label>
        {/* <br />
        <label>
          Add a drive link to all the documents:
          <input
            type="text"
            name="documents"
            value={formData.documents}
            onChange={handleInputChange}
          />
        </label>
        <br /> */}
        <button className="socialFormSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
