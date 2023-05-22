import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null,
  userId: null,
  email: '',
  // password: '',
  // isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      login: payload.login,
      userId: payload.uid,
      email: payload.email,
    }),
  },
});

export const { updateUserProfile } = authSlice.actions;

export default authSlice.reducer;
