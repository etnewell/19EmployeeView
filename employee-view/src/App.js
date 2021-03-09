import React, { Component } from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import employeeList from './employees.json';
import Title from './components/Title';
import './index.css';

class App extends Component {

  state = {
    employees: employeeList,
    search: ""
  };

  filterEmployees = name => {

    var empAry = [...this.state.employees];
    var searchResults = [];
    let i;
    for (i=0; i < empAry.length; i++) {
      if (empAry[i].firstname === this.state.search){
        searchResults.push(empAry[i])
      } else if (empAry[i].lastname === this.state.search){
        searchResults.push(empAry[i])
      } else if (empAry[i].firstname + " " + empAry[i].lastname === this.state.search){
        searchResults.push(empAry[i])
      } else if (empAry[i].employeeId === parseInt(this.state.search)){
        searchResults.push(empAry[i])
      }
    }

    this.setState({employees: searchResults})

    if (searchResults.length === 0){
      alert("Make sure you have the correct spelling of the name!")
      this.setState({employees: employeeList})
    }
  };

  handleInput = event => {
    this.setState({search: event.target.value})
  };

  reverseSearch = () => {
    this.setState({employees: employeeList})
  }

  // enterSearch = () => {
  //   // console.log(this.state.search)
  //   filterEmployees(this.state.search)
  // }

  render() {
    return (
      <Wrapper>
        <Title>Employee Public Information View</Title>
        <div className="search">
        <input type="text" placeholder="Search Employees" className="searchInput" onChange={this.handleInput}></input>
        <button onClick={this.filterEmployees} className="btn-search">Go!</button>
        <button onClick={this.reverseSearch} className="btn-search">ShowAll</button>
        </div>
        <div className="employeeCards">
        {this.state.employees.map(employee =>(
          <EmployeeCard
          employeeId={employee.employeeId}
          key={employee.employeeId}
          firstname={employee.firstname}
          lastname={employee.lastname}
          title={employee.title}
          department={employee.department}
          />
          ))}
          </div>
      </Wrapper>
   );
  }
}

export default App;
