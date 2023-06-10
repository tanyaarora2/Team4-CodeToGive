import React, { useState, useEffect } from 'react';
import './DetailedTimeline.css';

const SurrenderedTimeline = () => {
  const caseID = "BAD_05_2018";  /*To be fetched from DB*/
  const Name = "ABC";  /*To be fetched from DB*/
   
  const [step_one, setStepOne] = useState(() => {
    const storedStepOne = localStorage.getItem(`${caseID}_surrendered_step_one`);
    return storedStepOne ? JSON.parse(storedStepOne) : [
    { id: 1, text: "Surrender Deed Already Done", completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 2, text: "Original Deed in Child's File", completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 3, text: "Surrender Deed Signed by Parents", completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 4, text: "Mark Surrender Deed as Incomplete", completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    ];
  });

  const [step_two, setStepTwo] = useState(() => {
    const storedStepTwo = localStorage.getItem(`${caseID}_surrendered_step_two`);
    return storedStepTwo ? JSON.parse(storedStepTwo) : [
    { id: 1, text: 'Follow-up with CCI/SAA to submit case to CWC', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 2, text: 'LFA issued to the CCI/SAA by CWC', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 3, text: 'Submit letter to DCPU to link child to relevant SAA', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    ];
  });

  const [step_three, setStepThree] = useState(() => {
    const storedStepThree = localStorage.getItem(`${caseID}_surrendered_step_three`);
    return storedStepThree ? JSON.parse(storedStepThree) : [
    { id: 1, text: "Submit child’s file to the SAA", completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 2, text: 'Work with SAA and CCI to complete medical tests, MER, CSR', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 3, text: 'Follow-up with SAA to upload child into Carings', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    ];
  });
  




  /*Depends on step*/
  const [step_one_Completed, set_step_one_Completed] = useState(false);
  const [step_two_Completed, set_step_two_Completed] = useState(false);
  const [step_three_Completed, set_step_three_Completed] = useState(false);



  /*Depends on step*/
  useEffect(() => {
  const step_one_allRowsCompleted = step_one.every((stage) =>
    stage.checkboxes.some((checkbox) => checkbox.checked)
  );

  set_step_one_Completed(step_one_allRowsCompleted);
}, [step_one]);

  useEffect(() => {
  const step_two_allRowsCompleted = step_two.every((stage) =>
    stage.checkboxes.some((checkbox) => checkbox.checked)
  );

  set_step_two_Completed(step_two_allRowsCompleted);
}, [step_two]);
  
  useEffect(() => {
  const step_three_allRowsCompleted = step_three.every((stage) =>
    stage.checkboxes.some((checkbox) => checkbox.checked)
  );

  set_step_three_Completed(step_three_allRowsCompleted);
}, [step_three]);
  





  /*Depends on step*/
  useEffect(() => {
    const storedStepOne = localStorage.getItem(`${caseID}_surrendered_step_one`);
    if (storedStepOne) {
      setStepOne(JSON.parse(storedStepOne));
    }

    const storedStepTwo = localStorage.getItem(`${caseID}_surrendered_step_two`);
    if (storedStepTwo) {
      setStepTwo(JSON.parse(storedStepTwo));
    }
    
    const storedStepThree = localStorage.getItem(`${caseID}_surrendered_step_three`);
    if (storedStepThree) {
      setStepThree(JSON.parse(storedStepThree));
    }
  }, []);




  
  /*Depends on step*/
  useEffect(() => {
    localStorage.setItem(`${caseID}_surrendered_step_one`, JSON.stringify(step_one));
  }, [step_one]);


  useEffect(() => {
    localStorage.setItem(`${caseID}_surrendered_step_two`, JSON.stringify(step_two));
  }, [step_two]);
  
  useEffect(() => {
    localStorage.setItem(`${caseID}_surrendered_step_three`, JSON.stringify(step_three));
  }, [step_three]);





  const handleCheckboxChange = (step, stageId, checkboxId) => {
    const updatedStages = step.map((stage) => {
      if (stage.id === stageId) {
        const updatedCheckboxes = stage.checkboxes.map((checkbox) => {
          if (checkbox.id === checkboxId) {
            return {
              ...checkbox,
              checked: !checkbox.checked
            };
          } else {
            return {
              ...checkbox,
              checked: false
            };
          }
        });

        return {
          ...stage,
          checkboxes: updatedCheckboxes,
          completed: updatedCheckboxes.some((checkbox) => checkbox.checked)
        };
      } else {
        return stage;
      }
    });




    /*Depends on step*/
    if (step === step_one) {
      setStepOne(updatedStages);
    } else if (step === step_two) {
      setStepTwo(updatedStages);
    } else if (step === step_three) {
      setStepThree(updatedStages);
    }
  };
    
  


  return (
    <>
      <div className='case-id-timeline'>Case Id {caseID}: {Name}</div>
      {/* Step One */}
      <div className='all-details-timeline'>
      <div>
      <span>
        <span className='step-name'>Verify / Obtain the Surrender Deed</span>  {/*Depends on step*/}
        <span className='all-completed'>
          <label>
            <input
              readOnly={true}   
              className='all-completed-checkbox'
              type="checkbox"
              checked={step_one_Completed} /*Depends on step*/
            />
          </label>
        </span>
      </span>
        <table className='grid-table-timeline'>
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Not Required</th>
          </tr>
        </thead>
          <tbody>
            {step_one.map((stage) => ( /*Depends on step*/
              <tr key={stage.id}>
                <td>{stage.text}</td>
                {stage.checkboxes.map((checkbox) => (
                  <td key={checkbox.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(step_one, stage.id, checkbox.id)}  /*Depends on step*/
                      />
                    </label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

<hr></hr>


      {/* Step Two */}
      <div>
      <span>
        <span className='step-name'>Submit to CWC and get LFA</span>  {/*Depends on step*/}
        <span className='all-completed'>
          <label>
            <input
              readOnly
              className='all-completed-checkbox'
              type="checkbox"
              checked={step_two_Completed}  /*Depends on step*/
            />
          </label>
        </span>
        </span>
        <table className='grid-table-timeline'>
          <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Not Required</th>
          </tr>
          </thead>
          <tbody>
            {step_two.map((stage) => (  /*Depends on step*/
              <tr key={stage.id}>
                <td>{stage.text}</td>
                {stage.checkboxes.map((checkbox) => (
                  <td key={checkbox.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(step_two, stage.id, checkbox.id)}  /*Depends on step*/
                      />
                    </label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    <hr></hr>

      {/* Step Three */}
      <div>
      <span> 
        <span className='step-name'>Get Child Uploaded to Carings</span> {/*Depends on step*/}  
        <span className='all-completed'>
          <label>
            <input
              readOnly
              className='all-completed-checkbox'
              type="checkbox"
              checked={step_three_Completed}  /*Depends on step*/
            />
          </label>
        </span>
        </span>
        <table className='grid-table-timeline'>
          <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Not Required</th>
          </tr>
          </thead>
          <tbody>
            {step_three.map((stage) => (  /*Depends on step*/
              <tr key={stage.id}>
                <td>{stage.text}</td>
                {stage.checkboxes.map((checkbox) => (
                  <td key={checkbox.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(step_three, stage.id, checkbox.id)}  /*Depends on step*/
                      />
                    </label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default SurrenderedTimeline;




