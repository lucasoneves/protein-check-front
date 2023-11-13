import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from 'redux-persist'

export interface UserState {
  userInfo: {
    email: string;
    id: string | null;
    proteinAmount: [{ quantity: number, createdAt: string, id: string, belongsToId: string }];
    proteinTarget: [{ id: string, target: number, createdAt: string, belongingTo: string }];
    username: string;
  };
}

export const initialState: UserState = {
  userInfo: {
    email: '',
    id: null,
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
    },

    setProteinAdded(state, action) {
      if (action.payload) {
        state.userInfo.proteinAmount.push(action.payload);
      }
    },

    setProteinEdited(state, action) {
      const updated = (element: any) => element.id === action.payload.id
      const index = state.userInfo.proteinAmount.findIndex(updated);
      state.userInfo.proteinAmount[index] = action.payload
    },

    setProteinDeleted(state, action) {
      const deleted = (element: any) => element.id === action.payload.id
      const index = state.userInfo.proteinAmount.findIndex(deleted);
      state.userInfo.proteinAmount.splice(index, 1)
    },

    setNewTargetDaily(state, action) {
      state.userInfo.proteinTarget = [{...action.payload}]
    }
  }
});

export const { setUserInfo, setProteinAdded, setProteinEdited, setProteinDeleted, setNewTargetDaily } = userSlice.actions;

export default userSlice.reducer;
