import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { updateUserProfile } from './authReducer';

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, state) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      await updateProfile(user, {
        displayName: login,
        // photoURL: 'https://example.com/jane-q-user/profile.jpg',
      });

      const { uid, displayName } = await auth.currentUser;

      dispatch(updateUserProfile({ userId: uid, login: displayName }));
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
