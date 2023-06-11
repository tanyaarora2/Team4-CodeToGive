import React from "react";
import BoxWithPhotoAndName from "./tobe";
import "./tobeassigned.css";
function ParentComponent() {
  // Assume you have an array of data objects
  const data = [
    {
      id: 1,
      name: "Aarav Pate",
      textbox1: "Andheri",
      textbox2: 12,
    },
    {
      id: 2,
      name: "Riya Sharma",
      textbox1: "Lonawala",
      textbox2: 23,
    },
    {
      id: 3,
      name: "Arjun Gupta",
      textbox1: "Bangalore",
      textbox2: 27,
    },
    {
      id: 4,
      name: "Nisha Singh",
      textbox1: "Juhu",
      textbox2: 33,
    },
    {
      id: 5,
      name: "Siddharth Desai ",
      textbox1: "Bangalore",
      textbox2: 45,
    },
    {
      id: 6,
      name: "Manya Gupta",
      textbox1: "Mumbai",
      textbox2: 63,
    },
    // Add more data objects as needed
  ];

  const handleTextbox1Change = (id, value) => {
    // Handle the change of Text Box 1 value for the specific item
    // Update the state or perform any other logic
    console.log("Item with ID:", id, "Textbox 1 value:", value);
  };

  const handleTextbox2Change = (id, value) => {
    // Handle the change of Text Box 2 value for the specific item
    // Update the state or perform any other logic
    console.log("Item with ID:", id, "Textbox 2 value:", value);
  };

  return (
    <div>
      <div className="grid-container">
        {data.map((item, index) => (
          <BoxWithPhotoAndName
            key={item.id}
            name={item.name}
            textbox1={item.textbox1}
            textbox2={item.textbox2}
            onTextbox1Change={(value) => handleTextbox1Change(item.id, value)}
            onTextbox2Change={(value) => handleTextbox2Change(item.id, value)}
          />
        ))}
      </div>
    </div>
  );
}

export default ParentComponent;
