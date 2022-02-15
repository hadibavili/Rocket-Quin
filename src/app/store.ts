import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rocketSlice from "features/rockets/slice/rocketSlice";

export const store = configureStore({
   reducer: {
      rockets: rocketSlice.reducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
