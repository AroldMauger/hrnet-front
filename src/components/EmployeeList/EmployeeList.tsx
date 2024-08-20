import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import DataTable, { TableColumn } from 'react-data-table-component';
import "./EmployeeList.scss";

interface Employee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  department: string;
}

const EmployeeList: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  const columns: TableColumn<Employee>[] = [
    {
      name: 'First Name',
      selector: (employee: Employee) => employee.firstName,
      sortable: true
    },
    {
      name: 'Last Name',
      selector: (employee: Employee) => employee.lastName,
      sortable: true
    },
    {
      name: 'Date of Birth',
      selector: (employee: Employee) => employee.dateOfBirth,
      sortable: true
    },
    {
      name: 'Start Date',
      selector: (employee: Employee) => employee.startDate,
      sortable: true
    },
    {
      name: 'Street',
      selector: (employee: Employee) => employee.street,
      width: '230px', 
      sortable: true
    },
    {
      name: 'City',
      selector: (employee: Employee) => employee.city,
      width: '125px', 
      sortable: true
    },
    {
      name: 'State',
      selector: (employee: Employee) => employee.state,
      width: '102px', 
      sortable: true
    },
    {
      name: 'Zip Code',
      selector: (employee: Employee) => employee.zipcode,
      width: '132px', 
      sortable: true
    },
    {
      name: 'Department',
      selector: (employee: Employee) => employee.department,
      sortable: true
    },
  ];

  const employees = useSelector((state: RootState) => state.employee.employees);

  const filteredEmployees = employees.filter(employee => {
    return (
      employee.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.dateOfBirth.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.startDate.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.street.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.city.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.state.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.zipcode.toLowerCase().includes(filterText.toLowerCase()) ||
      employee.department.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div className='table-employees'>
      <h1>Current Employees</h1>
      <h2>Employee List</h2>
      <div className='filter-container'>
        <label htmlFor='filter'>Filtre</label>
        <input
          id="filter"
          className='input-filter'
          type='text'
          placeholder='Recherche'
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
     

      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        fixedHeader
      />
    </div>
  );
};

export default EmployeeList;
