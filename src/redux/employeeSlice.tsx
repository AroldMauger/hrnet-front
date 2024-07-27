import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EmployeeState {
  name: string;
}

const initialState: EmployeeState = {
  name: '',
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setName } = employeeSlice.actions;
export default employeeSlice.reducer;
