import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userInfo: {
    email: string;
    id: string;
    proteinAmount: [{ quantity: number | null}];
    proteinTarget: Array<object>;
    username: string;
  };
}

const initialState: UserState = {
  userInfo: {
    email: '',
    id: '',
    proteinAmount: [{ quantity: null }],
    proteinTarget: [],
    username: ''
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      if (action.payload) {
        state.userInfo = action.payload;
      }
    }
  }
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
