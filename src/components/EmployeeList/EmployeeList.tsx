import React from 'react';
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

  // Récupération de la liste des employés depuis le store
  const employees = useSelector((state: RootState) => state.employee.employees);



  if (!employees || employees.length === 0) {
    return <div>No employees found.</div>;
  }

  return (
    <div className='table-employees'>
      <h1>Current Employees</h1>
      <h2>Employee List</h2>
    
      <DataTable
        columns={columns}
        data={employees}
        pagination
      />
    </div>
  );
};

export default EmployeeList;
