import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { updateUserProfile } from './authReducer';

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, state) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log('user authSignUpUser', user);
      dispatch(updateUserProfile({ ...user, login }));
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignInUser =
  ({ login, email, password }) =>
  async (dispatch, state) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('user authSignInUser', user);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, state) => {};
