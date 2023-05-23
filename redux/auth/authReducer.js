import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: null,
  userId: null,
  email: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      login: payload.login,
      userId: payload.userId,
      email: payload.email,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => initialState,
  },
});

export const { updateUserProfile, authStateChange, authSignOut } =
  authSlice.actions;

export default authSlice.reducer;
