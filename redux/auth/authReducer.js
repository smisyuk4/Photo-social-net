import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: '',
  email: '',
  password: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      const { login, email, password} = action.payload; 
      state.login = login;
      state.email = email;
      state.password = password
      state.isLoggedIn = true;
    },
    login: (state, action)  => {
     
    },
    logout: (state, action)  => {
    
    },
  },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;
