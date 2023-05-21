import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: state => {
      state.value += 1;
    },
    login: state => {
      state.value += 1;
    },
    logout: state => {
      state.value += 1;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;
