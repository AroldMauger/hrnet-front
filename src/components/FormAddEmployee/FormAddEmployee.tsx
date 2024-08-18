import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/employeeSlice';
import { states } from "../../data/states";
import { AppDispatch } from '../../redux/store';
import Select from 'react-select';
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
  const { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm<IFormInput>();
  const dispatch = useDispatch<AppDispatch>();

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const onSubmit: SubmitHandler<IFormInput> = data => {
    if (formValidation()) {
      dispatch(addEmployee(data));
      reset();
    }
  };

  const handleStateChange = (selectedOption: any) => {
    setValue('state', selectedOption?.value || '');
    setFormErrors((prevErrors) => ({ ...prevErrors, state: '' }));
  };

  const handleDepartmentChange = (selectedOption: any) => {
    setValue('department', selectedOption?.value || '');
    setFormErrors((prevErrors) => ({ ...prevErrors, department: '' }));
  };

  const formValidation = (): boolean => {
    const values = getValues();
    const newErrors: { [key: string]: string } = {};

    if (!values.firstName) newErrors.firstName = 'First name is required';
    if (!values.lastName) newErrors.lastName = 'Last name is required';
    if (!values.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!values.startDate) newErrors.startDate = 'Start date is required';
    if (!values.street) newErrors.street = 'Street name is required';
    if (!values.city) newErrors.city = 'City name is required';
    if (!values.state) newErrors.state = 'State is required';
    if (!values.zipcode) newErrors.zipcode = 'Zip code is required';
    if (!values.department) newErrors.department = 'Department is required';

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className='subcontainer'>
        <div className='input-subcontainer'>
          <label>First Name</label>
          <input type="text" {...register("firstName", { required: true, maxLength: 80 })} />
          {errors.firstName && <p className='error-message'>First name is required</p>}
          {formErrors.firstName && <p className='error-message'>{formErrors.firstName}</p>}
        </div>

        <div className='input-subcontainer'>
          <label>Last Name</label>
          <input type="text" {...register("lastName", { required: true, maxLength: 100 })} />
          {errors.lastName && <p className='error-message'>Last name is required</p>}
          {formErrors.lastName && <p className='error-message'>{formErrors.lastName}</p>}
        </div>
      </section>

      <section className='subcontainer'>
        <div className='input-subcontainer'>
          <label>Date of Birth</label>
          <input type="date" {...register("dateOfBirth", { required: true })} />
          {errors.dateOfBirth && <p className='error-message'>Date of birth is required</p>}
          {formErrors.dateOfBirth && <p className='error-message'>{formErrors.dateOfBirth}</p>}
        </div>
  
        <div className='input-subcontainer'>
          <label>Start Date</label>
          <input type="date" {...register("startDate", { required: true })} />
          {errors.startDate && <p className='error-message'>Start date is required</p>}
          {formErrors.startDate && <p className='error-message'>{formErrors.startDate}</p>}
        </div>
      </section>

      <fieldset>
        <legend>ADDRESS</legend>
        <section className='subcontainer-fieldset'>
          <div className='input-subcontainer-address'>
            <label>Street</label>
            <input type="text" {...register("street", { required: true, maxLength: 250 })} />
            {errors.street && <p className='error-message'>Street name is required</p>}
            {formErrors.street && <p className='error-message'>{formErrors.street}</p>}
          </div>
          <div className='input-subcontainer-address'>
            <label>City</label>
            <input type="text" {...register("city", { required: true, maxLength: 250 })} />
            {errors.city && <p className='error-message'>City name is required</p>}
            {formErrors.city && <p className='error-message'>{formErrors.city}</p>}
          </div>
        </section>
        <section className='subcontainer-address'>
          <div className='input-subcontainer-react-selector'>
            <label>State</label>
            <Select 
              options={states.map((state) => ({ value: state.abbreviation, label: state.name }))}
              onChange={handleStateChange}
              className="styled-select"
              classNamePrefix="react-select"
            />
            {errors.state && <p className='error-message'>State is required</p>}
            {formErrors.state && <p className='error-message'>{formErrors.state}</p>}
          </div>
          <div className='input-subcontainer-address'>
            <label>Zip Code</label>
            <input type="number" {...register("zipcode", { required: true })} />
            {errors.zipcode && <p className='error-message'>Zip code is required</p>}
            {formErrors.zipcode && <p className='error-message'>{formErrors.zipcode}</p>}
          </div>
        </section>
      </fieldset>
      
      <div className='input-subcontainer-react-selector'>
        <label>Department</label>
        <Select 
          options={[
            { value: 'Sales', label: 'Sales' },
            { value: 'Engineering', label: 'Engineering' },
            { value: 'Human Resources', label: 'Human Resources' },
            { value: 'Legal', label: 'Legal' }
          ]}
          onChange={handleDepartmentChange}
          className="styled-select"
          classNamePrefix="react-select"
        />
        {errors.department && <p className='error-message'>Department is required</p>}
        {formErrors.department && <p className='error-message'>{formErrors.department}</p>}
      </div>

      <div className='submit-container'>
        <input type="submit" value="Ajouter"/>
      </div>
    </form>
  );
}

export default FormAddEmployee;
