import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import DataTable, { TableColumn } from 'react-data-table-component';
import "./EmployeeList.scss";

// Définir un type pour les données des employés
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

  // Définir les colonnes avec des types appropriés
  const columns: TableColumn<Employee>[] = [
    {
      name: 'First Name',
      cell: (employee: Employee) => employee.firstName,

    },
    {
      name: 'Last Name',
      cell: (employee: Employee) => employee.lastName,
    },
    {
      name: 'Date of Birth',
      cell: (employee: Employee) => employee.dateOfBirth,
    },
    {
      name: 'Start Date',
      cell: (employee: Employee) => employee.startDate,
    },
    {
      name: 'Street',
      cell: (employee: Employee) => employee.street,
      width: '230px', 
    },
    {
      name: 'City',
      cell: (employee: Employee) => employee.city,
      width: '125px', 
    },
    {
      name: 'State',
      cell: (employee: Employee) => employee.state,
      width: '102px', 
    },
    {
      name: 'Zip Code',
      cell: (employee: Employee) => employee.zipcode,
      width: '132px', 
    },
    {
      name: 'Department',
      cell: (employee: Employee) => employee.department,
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
      />
    </div>
  );
};

export default EmployeeList;
