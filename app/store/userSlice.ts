import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userInfo: { username: string };
}

const initialState: UserState = {
  userInfo: { username: '' },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
  }
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;