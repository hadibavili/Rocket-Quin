import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRocketsAsync } from "../thunk/rocketThunks";

const initialState: InitialStateType = {
   rockets: [],
   isLoading: false,
   error: "",
   count: 0,
};
const rocketSlice = createSlice({
   name: "rockets",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchRocketsAsync.pending, state => {
            state.isLoading = true;
         })
         .addCase(
            fetchRocketsAsync.fulfilled,
            (state, action: PayloadAction<Rocket[]>) => {
               state.isLoading = false;
               state.rockets = action.payload;
            }
         )
         .addCase(fetchRocketsAsync.rejected, state => {
            state.isLoading = false;
            state.error = "Something went wrong";
         });
   },
});

export default rocketSlice;

export const rocketActions = rocketSlice.actions;
