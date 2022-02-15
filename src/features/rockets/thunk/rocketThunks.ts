import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRockets } from "../api/rocketApi";

export const fetchRocketsAsync = createAsyncThunk(
   "rockets/fetchRockets",
   async (dispatch: Filter) => {
      const response = await fetchRockets({
         start: dispatch.start,
         end: dispatch.end,
         limit: dispatch.limit,
      });

      return response.results as Rocket[];
   }
);
