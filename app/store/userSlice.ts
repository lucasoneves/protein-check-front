import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userInfo: {
    email: string;
    id: string;
    proteinAmount: [{ quantity: number, createdAt: string, id: string, belongsToId: string }];
    proteinTarget: [{ id: string, target: number, createdAt: string, belongingTo: string }];
    username: string;
  };
}

const initialState: UserState = {
  userInfo: {
    email: '',
    id: '',
    proteinAmount: [{ quantity: 0, createdAt: '', id: '', belongsToId: '' }],
    proteinTarget: [{ id: '', target: 0, createdAt: '', belongingTo: '' }],
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
