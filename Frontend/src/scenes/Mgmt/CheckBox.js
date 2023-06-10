import React, { useState } from 'react';

const CheckBox = ({input_label}) => {
  const [milestones, setMilestones] = useState([
    // { id: 1, label: 'Event 1', date: '2023-01-01', completed: false },
    { id: 1, completed: false},
  ]);

  const handleCheckboxChange = (id) => {
    // Update the milestone completion status based on the checkbox change
    const updatedMilestones = milestones.map((milestone) =>
      milestone.id === id ? { ...milestone, completed: !milestone.completed } : milestone
    );
    console.log(id)
    // Update the milestones state with the updated milestone data
    setMilestones(updatedMilestones);
  };

  return (
    <div>
      {milestones.map((milestone) => (
        <div key={milestone.id}>
          <input
            type="checkbox"
            checked={milestone.completed}
            onChange={() => handleCheckboxChange(milestone.id)}
          />
          <label>{input_label}</label>
          {/* <span>{milestone.date}</span> */}
          {/* {milestone.completed && <span>&#10003;</span>} */}
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
