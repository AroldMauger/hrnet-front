import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const EmployeeList: React.FC = () => {
  const name = useSelector((state: RootState) => state.employee.name);

  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
};

export default EmployeeList;
