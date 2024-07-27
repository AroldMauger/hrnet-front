import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { states} from "../../data/states";

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
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input type="text" {...register("firstName", { required: true, maxLength: 80 })} />
        {errors.firstName && <p>First name is required</p>}
      </div>

      <div>
        <label>Last Name</label>
        <input type="text" {...register("lastName", { required: true, maxLength: 100 })} />
        {errors.lastName && <p>Last name is required</p>}
      </div>

      <div>
        <label>Date of Birth</label>
        <input type="date" {...register("dateOfBirth", { required: true })} />
        {errors.dateOfBirth && <p>Date of birth is required</p>}
      </div>

      <div>
        <label>Start Date</label>
        <input type="date" {...register("startDate", { required: true })} />
        {errors.startDate && <p>Start date is required</p>}
      </div>
    
        <div>
            <span>Address</span>
            <div>
                <label>Street</label>
                <input type="text" {...register("street", { required: true, maxLength: 250 })} />
                {errors.street && <p>Street name is required</p>}
            </div>
            <div>
                <label>City</label>
                <input type="text" {...register("city", { required: true, maxLength: 250 })} />
                {errors.city && <p>City name is required</p>}
            </div>
            <div>
                <label>State</label>
                <select {...register("state", { required: true })}>
                    {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                    ))}
                </select>
                {errors.state && <p>State is required</p>}
            </div>
            <div>
                <label>Zip Code</label>
                <input type="number" {...register("zipcode", { required: true })} />
                {errors.zipcode && <p>Zip code is required</p>}
            </div>
            <div>
                <label>Department</label>
                <select {...register("department", { required: true })}>
                    <option value="Sales">Sales</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                 </select>
            </div>
               
        </div>

        <div></div>

      <input type="submit" />
    </form>
  );
}

export default FormAddEmployee;
