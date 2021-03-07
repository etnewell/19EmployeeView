import React, { Component } from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import employees from './employees.json';
import Title from './components/title';
import './index.css';

class App extends Component {

  state = {
    employees
  };

  filterEmployees = () => {

  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Public View</Title>
        {this.state.employees.map(employee =>(
          <EmployeeCard
          employeeId={employee.employeeId}
          name={employee.name}
          title={employee.title}
          department={employee.department}
          />
          ))}
      </Wrapper>
   );
  }
}

export default App;
