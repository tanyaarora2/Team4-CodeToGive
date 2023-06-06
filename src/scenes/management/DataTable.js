import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <table className='grid-table'>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Case Number</th>
          <th>Child Name</th>
          <th>Age</th>
          <th>Child Classification</th>
          {/* Add more table header columns as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
