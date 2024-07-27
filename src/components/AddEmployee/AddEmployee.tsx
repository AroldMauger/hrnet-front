import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../../redux/employeeSlice';
import { AppDispatch } from '../../redux/store';

const AddEmployee: React.FC = () => {
  const [name, setNameInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSave = () => {
    dispatch(setName(name));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddEmployee;


//REACT HOOK FORM  / enregistrer 1 objet dans le tableau d'objets Employees
// tableau .push ma nouvelle donnée