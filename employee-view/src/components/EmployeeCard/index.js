import React from 'react';
import "./style.css";

const EmployeeCard = props => {
    return (
        <div className="card">
            <h1 class ="employeeName">{props.name}</h1>
            <ul className="employeeInfo">
                <li className="empName">{props.empName}</li>
            </ul>
        </div>
    )
}