import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialStateType = {};
const rocketSlice = createSlice({
   name: "rockets",
   initialState,
   reducers: {},
});

export default rocketSlice;

export const rocketActions = rocketSlice.actions;
