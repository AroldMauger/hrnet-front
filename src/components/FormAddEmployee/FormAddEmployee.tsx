import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/employeeSlice';
import { states } from "../../data/states";
import { AppDispatch } from '../../redux/store';
import "./FormAddEmployee.scss"

interface IFormInput {
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

const FormAddEmployee: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    dispatch(addEmployee(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <section className='subcontainer'>
             <div className='input-subcontainer'>
                <label>First Name</label>
                <input type="text" {...register("firstName", { required: true, maxLength: 80 })} />
                {errors.firstName && <p>First name is required</p>}
            </div>

            <div className='input-subcontainer'>
                <label>Last Name</label>
                <input type="text" {...register("lastName", { required: true, maxLength: 100 })} value={"MAUGER"} />
                {errors.lastName && <p>Last name is required</p>}
            </div>
        </section>
     

        <div className='input-subcontainer one-lign-container'>
            <label>Date of Birth</label>
            <input type="date" {...register("dateOfBirth", { required: true })} value={"1995-02-19"}/>
            {errors.dateOfBirth && <p>Date of birth is required</p>}
        </div>

        <div className='input-subcontainer one-lign-container'>
        <label>Start Date</label>
        <input type="date" {...register("startDate", { required: true })} value={"2024-07-28"}/>
        {errors.startDate && <p>Start date is required</p>}
      </div>

      <div>
        <span>Address</span>
        <div className='input-subcontainer one-lign-container'>
          <label>Street</label>
          <input type="text" {...register("street", { required: true, maxLength: 250 })} value={"4 ancienne route de Caen"}/>
          {errors.street && <p>Street name is required</p>}
        </div>
        <div className='input-subcontainer one-lign-container'>
          <label>City</label>
          <input type="text" {...register("city", { required: true, maxLength: 250 })} value={"Cabourg"}/>
          {errors.city && <p>City name is required</p>}
        </div>
        <div className='input-subcontainer one-lign-container'>
          <label>State</label>
          <select {...register("state", { required: true })} value={"WY"}>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && <p>State is required</p>}
        </div>
        <div className='input-subcontainer one-lign-container'>
          <label>Zip Code</label>
          <input type="number" {...register("zipcode", { required: true })} value={"9"}/>
          {errors.zipcode && <p>Zip code is required</p>}
        </div>
        <div className='input-subcontainer one-lign-container'>
          <label>Department</label>
          <select {...register("department", { required: true })} value={"Sales"}>
            <option value="Sales">Sales</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </div>
      </div>

      <input type="submit" />
    </form>
  );
}

export default FormAddEmployee;
