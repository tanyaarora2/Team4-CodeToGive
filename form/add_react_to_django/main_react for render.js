import React from 'react';
import axios from 'axios';
import './DataTable.css';

class Data extends React.Component {
  state = { details: [], }
  componentDidMount() {
    let data;
    axios.get('http://localhost:8000')
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => { 'Not found' })
  }

  render() {
    return (
      <div>
        <table className='grid-table'>
          <thead>
            <tr>
              <th>Case Number</th>
              <th>State</th>
              <th>District</th>
              <th>Shelter Home</th>
              <th>Child Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Child Classification</th>
              <th>Reason for Admission</th>
              <th>Reason for Flagging</th>
              <th>Last Visit On</th>
              <th>Last Call</th>
              <th>Guardian</th>
              <th>Sibling</th>
              <th>Duration of Stay in Shelter</th>
              <th>CWC Last Review</th>
              <th>CWC Last Order</th>
              <th>Case History </th>
              <th>Newspaper_Date</th>
              <th>Police_Date</th>
              <th>Surrender_Date</th>
              {/* Add more table header columns as needed */}
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    )
  }
};

export default Data;