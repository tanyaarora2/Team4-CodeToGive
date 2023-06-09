import React from 'react';
import axios from 'axios';

class Abandoned extends React.Component {
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
                            <th>Name</th>
                            <th>g</th>
                            {/* Add more table header columns as needed */}
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.details.map((item, index) => (
                            <tr>
                                {item.Child_Classification === 'Abandoned' && <td> {item.Case_Number}</td>}
                                {item.Child_Classification === 'Abandoned' && <td> {item.Child_Name}</td>}
                                {item.Child_Classification === 'Abandoned' && <td> {item.Gender}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
};
export default Abandoned;
