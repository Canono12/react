// src/components/App.jsx
import React from 'react';
import Student from './components/student';

const Students = () => {
    const students = [
        { name: "Christian", department: "Science", finalGrade: 85, status: "Pass" },
        { name: "Cristino", department: "Arts", finalGrade: 78, status: "Pass" },
        { name: "Lorena", department: "Commerce", finalGrade: 92, status: "Pass" },
        { name: "Chalcy", department: "Filipino", finalGrade: 60, status: "Pass" },
        { name: "Joanna", department: "English", finalGrade: 74, status: "Pass" },
        { name: "canono", department: "Math", finalGrade: 81, status: "Pass" },
        { name: "Kyle", department: "Pathfit", finalGrade: 88, status: "Pass" },
        { name: "Vhaugn", department: "OOP", finalGrade: 69, status: "Pass" },
        { name: "Lito", department: "GE9", finalGrade: null, status: "Fail" },
        { name: "Lita", department: "CC101", finalGrade: null, status: "Fail" }
    ];

    return (
        <div>
            <h1>Student List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Names</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} student={student} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <Students />
        </div>
    );
}

export default App;
