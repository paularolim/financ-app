import auth from '@react-native-firebase/auth';

import { removeItem, setItem } from './storage';

/**
 * Create an user on authenticator by firebase.
 * @param email - email from user.
 * @param password - password from user.
 * @param name - name from user.
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
            const formatedUser = {
              id: user.uid,
              name,
              email,
            };

            console.log(`[REGISTER] User ${user.uid} successfully updated`);
            setItem('user', JSON.stringify(formatedUser));
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
 */
export const login = async (email: string, password: string): Promise<void> => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const formatedUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
      };

      console.log(`[LOGIN] User ${user.uid} successfully logged`);
      setItem('user', JSON.stringify(formatedUser));
    })
    // TODO: feedback the error
    .catch(error => console.log(error));
};

/**
 * Log out an user.
 */
export const logout = () => {
  auth()
    .signOut()
    .then(() => removeItem('user'))
    // TODO: error feedback
    .catch(error => console.log(error));
};
