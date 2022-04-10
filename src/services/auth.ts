import auth from '@react-native-firebase/auth';

import { useUserStore } from '../core/application/states/user';
import { User } from '../core/domain/entities/User';

/**
 * Create an user on authenticator by firebase.
 * @param email - email from user.
 * @param password - password from user.
 * @param name - name from user.
 * @deprecated
 */
export const createUser = async (
  email: string,
  password: string,
  name: string,
): Promise<void> => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      if (user) {
        user
          .updateProfile({ displayName: name })
          .then(() => {
            const formatedUser: User = {
              id: user.uid,
              name,
              email,
            };

            console.log(`[REGISTER] User ${user.uid} successfully updated`);
            useUserStore.setState({ user: formatedUser });
          })
          // TODO: error feedback
          .catch(error => console.log(error));
      }
    })
    // TODO: error feedback
    .catch(error => console.log(error));
};

/**
 * Log in an user.
 * @param email - email from user.
 * @param password - password from user.
 * @deprecated
 */
export const login = async (email: string, password: string): Promise<void> => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const formatedUser: User = {
        id: user.uid,
        name: user.displayName || '',
        email: user.email || '',
      };

      console.log(`[LOGIN] User ${user.uid} successfully logged in.`);
      useUserStore.setState({ user: formatedUser });
    })
    // TODO: feedback the error
    .catch(error => console.log(error));
};

/**
 * Log out an user.
 * @deprecated
 */
export const logout = () => {
  auth()
    .signOut()
    .then(() => {
      console.log('[LOGOUT] User successfully logged out.');
      useUserStore.setState({ user: null });
    })
    // TODO: error feedback
    .catch(error => console.log(error));
};
