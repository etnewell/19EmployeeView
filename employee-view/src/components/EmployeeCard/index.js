import React from 'react';
import "./style.css";

const EmployeeCard = props => {
    return (
        <div className="card">
            <h1 class ="employeeName">{props.firstname} {props.lastname}</h1>
            <ul className="employeeInfo">
                <li className="empTitle">Employee Title: {props.title}</li>
                <li className="empId">Employee ID: {props.employeeId}</li>
                <li className="empDept">Employee Department: {props.department}</li>
            </ul>
        </div>
    )
}
export default EmployeeCard;