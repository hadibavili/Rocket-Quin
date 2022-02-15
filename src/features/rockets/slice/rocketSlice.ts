import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRocketsAsync } from "../thunk/rocketThunks";
import { CONFIG } from "global/config";

const initialState: InitialStateType = {
   rockets: [],
   currentFilter: {
      start: CONFIG.START.toISOString(),
      end: CONFIG.END.toISOString(),
      limit: CONFIG.LIMIT,
   },
   isLoading: false,
   error: "",
};

const rocketSlice = createSlice({
   name: "rockets",
   initialState,
   reducers: {
      changeFilter(state, action: PayloadAction<Filter>) {
         state.currentFilter = action.payload;
      },
   },
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
