import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: null,
};
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addSingleEmployee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const { addSingleEmployee } = employeeSlice.actions;

// selectors
export const selectEmployee = (state: { employee: { employee: any } }) =>
  state.employee.employee;

export default employeeSlice.reducer;
