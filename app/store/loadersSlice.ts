import { createSlice } from "@reduxjs/toolkit";

export interface LoaderState {
  loading: boolean;
}

export const initialState: LoaderState = {
  loading: false
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader(state, action) {
      if (action.payload) {
        state.loading = action.payload;
      }
    },
  }
});

export const { setLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
