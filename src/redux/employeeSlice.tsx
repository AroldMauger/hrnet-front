// employeeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export interface EmployeesState {
  employees: Employee[];
}

const initialState: EmployeesState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee(state, action: PayloadAction<Employee>) {
      console.log('Current State:', state);
      console.log('Action Payload:', action.payload);
      if (!state.employees) {
        state.employees = [];
      }
      state.employees.push(action.payload);
    },
    clearStore: (state) => {
      state.employees = [];
    }
  },
});

export const { addEmployee, clearStore } = employeeSlice.actions;
export default employeeSlice.reducer;
