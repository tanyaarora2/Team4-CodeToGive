import React, { useState, useEffect } from 'react';
import './DetailedTimeline.css';

const OrphanedTimeline = () => {

  const caseID = "BAD_05_2018";  /*To be fetched from DB*/
  const Name = "ABC";  /*To be fetched from DB*/
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [step_one, setStepOne] = useState(() => {
    const storedStepOne = localStorage.getItem(`${caseID}_orphaned_step_one`);
    return storedStepOne ? JSON.parse(storedStepOne) : [
    { id: 1, text: 'Newspaper Publication', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 2, text: 'TV Telecasting', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 3, text: 'Final Police Report', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 4, text: 'Death Certificate of Parents', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 5, text: 'Orphan Certificate', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 6, text: 'Medical Report for age verification', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 7, text: 'Social Investigation Report', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    ];
  });

  const [step_two, setStepTwo] = useState(() => {
    const storedStepTwo = localStorage.getItem(`${caseID}_orphaned_step_two`);
    return storedStepTwo ? JSON.parse(storedStepTwo) : [
    { id: 1, text: "Submit child’s report to DCPU for NOC", completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 2, text: 'Receive DCPU NOC', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 3, text: 'Final Report from CCI', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    ];
  });

  const [step_three, setStepThree] = useState(() => {
    const storedStepThree = localStorage.getItem(`${caseID}_orphaned_step_three`);
    return storedStepThree ? JSON.parse(storedStepThree) : [
    { id: 1, text: 'Submit case to CWC to get LFA', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 2, text: 'LFA issued to the CCI/SAA by CWC', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 3, text: 'Submit letter to DCPU to link child to relevant SAA', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    ];
  });
  
  const [step_four, setStepFour] = useState(() => {
    const storedStepFour = localStorage.getItem(`${caseID}_orphaned_step_four`);
    return storedStepFour ? JSON.parse(storedStepFour) : [
    { id: 1, text: "Submit child’s file to SAA", completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 2, text: 'Work with SAA and CCI to complete medical tests, MER, CSR', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    { id: 3, text: 'Follow-up with SAA to upload child into Carings', completed: false, checkboxes: [{ id: 1, checked: false }, { id: 2, checked: false }] },
    ];
  });




  /*Depends on step*/
  const [step_one_Completed, set_step_one_Completed] = useState(false);
  const [step_two_Completed, set_step_two_Completed] = useState(false);
  const [step_three_Completed, set_step_three_Completed] = useState(false);
  const [step_four_Completed, set_step_four_Completed] = useState(false);



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
  
  useEffect(() => {
  const step_four_allRowsCompleted = step_four.every((stage) =>
    stage.checkboxes.some((checkbox) => checkbox.checked)
  );

  set_step_four_Completed(step_four_allRowsCompleted);
}, [step_four]);





  /*Depends on step*/
  useEffect(() => {
    const storedStepOne = localStorage.getItem(`${caseID}_orphaned_step_one`);
    if (storedStepOne) {
      setStepOne(JSON.parse(storedStepOne));
    }

    const storedStepTwo = localStorage.getItem(`${caseID}_orphaned_step_two`);
    if (storedStepTwo) {
      setStepTwo(JSON.parse(storedStepTwo));
    }
    
    const storedStepThree = localStorage.getItem(`${caseID}_orphaned_step_three`);
    if (storedStepThree) {
      setStepThree(JSON.parse(storedStepThree));
    }

    const storedStepFour = localStorage.getItem(`${caseID}_orphaned_step_four`);
    if (storedStepFour) {
      setStepFour(JSON.parse(storedStepFour));
    }
  }, []);




  
  /*Depends on step*/
  useEffect(() => {
    localStorage.setItem(`${caseID}_orphaned_step_one`, JSON.stringify(step_one));
  }, [step_one]);


  useEffect(() => {
    localStorage.setItem(`${caseID}_orphaned_step_two`, JSON.stringify(step_two));
  }, [step_two]);
  
  useEffect(() => {
    localStorage.setItem(`${caseID}_orphaned_step_three`, JSON.stringify(step_three));
  }, [step_three]);
  
  useEffect(() => {
    localStorage.setItem(`${caseID}_orphaned_step_four`, JSON.stringify(step_four));
  }, [step_four]);




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
    } else if (step === step_four) {
      setStepFour(updatedStages);
    }
  };
    
  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};



  return (
    <>
      <div className='case-id-timeline'>Case Id {caseID}: {Name}</div>
      {/* Step One */}
      <div className='all-details-timeline'>
      <div>
      <span>
        <span className='step-name'>Work On and Complete Documentation</span>  {/*Depends on step*/}
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
            <th>Documents</th>  
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
                <td><input type="file" name="file" onChange={changeHandler} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    <hr></hr>


      {/* Step Two */}
      <div>
      <span>
        <span className='step-name'>Submit to DCPU and get NOC</span>  {/*Depends on step*/}
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
            <th>Documents</th>  
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
                <td><input type="file" name="file" onChange={changeHandler} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
        <hr></hr>

      {/* Step Three */}
      <div>
      <span> 
        <span className='step-name'>Submit to CWC and get LFA</span> {/*Depends on step*/}  
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
            <th>Documents</th>  
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
                <td><input type="file" name="file" onChange={changeHandler} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        <hr></hr>

      {/* Step Four */}
      <div>
      <span>
        <span className='step-name'>Get Child Uploaded to Carings</span>  {/*Depends on step*/}
        <span className='all-completed'>
          <label>
            <input
              readOnly
              className='all-completed-checkbox'
              type="checkbox"
              checked={step_four_Completed}  /*Depends on step*/
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
            <th>Documents</th>  
          </tr>
          </thead>
          <tbody>
            {step_four.map((stage) => (  /*Depends on step*/
              <tr key={stage.id}>
                <td>{stage.text}</td>
                {stage.checkboxes.map((checkbox) => (
                  <td key={checkbox.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(step_four, stage.id, checkbox.id)}  /*Depends on step*/
                      />
                    </label>
                  </td>
                ))}
                <td><input type="file" name="file" onChange={changeHandler} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default OrphanedTimeline;




