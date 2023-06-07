import React from "react";
import "./DataSocial.css";
function DataSocial() {
  const data = [
    {
      column1: "1",
      column2: "BAL/6",
      column3: "ABC",
      column4: "10 years and 2 months",
      column5: "Abandoned",
    },
    {
      column1: "1",
      column2: "BAL/6",
      column3: "EFG",
      column4: "13 years and 6 months",
      column5: "Abandoned",
    },
  ];
  return (
    <table className="social-table">
      <thead className="head-social">
        <tr>
          <th>S.NO.</th>
          <th>CASE NUMBER</th>
          <th>CHILD NAME</th>
          <th>AGE</th>
          <th>CHILD CLASSIFICATION</th>
          <th></th>
          {/* Add more table header columns as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
            <td>
              <button className="details-button">Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataSocial;
