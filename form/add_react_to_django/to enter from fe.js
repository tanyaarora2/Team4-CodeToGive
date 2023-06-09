import React, { useState } from 'react';
import axios from 'axios';
import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';
const MyForm = () => {
    const [employee, setEmp] = useState('');
    const [department, setDept] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('employee', employee);
        formData.append('department', department);

        try {
            const response = await axios.post('http://localhost:8000', formData);

            // Handle the response here
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={employee}
                    onChange={(e) => setEmp(e.target.value)}
                />
                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDept(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm;
