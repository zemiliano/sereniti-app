import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import useUserStore from "../stores/userStore";

export const useUser = () => useUserStore((state) => state.user);
export const useSignUp = () => {
  const addUser = useUserStore((state) => state.addUser);

  return async (email, password) => {
    let data;
    let error = { message: "" };

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCred) {
        const user = userCred.user;
        const userProfile = await setDoc(doc(db, "profiles", user.uid), {});
        const userPackage = await setDoc(doc(db, "packages", user.uid), {
          selected: "free",
        });

        data = {
          ...user,
          profile: userProfile,
          package: userPackage,
        };
        error = null;
        addUser(data);
        return { data, error };
      }
    } catch (err) {
      data = null;
      error = { message: err.message };
      return { data, error };
    }
  };
};
export const useLogin = () => {
  const addUser = useUserStore((state) => state.addUser);

  return async (email, password) => {
    let data;
    let error = { message: "" };

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred) {
        const user = userCred.user;
        const userProfile = await getDoc(doc(db, "profiles", user.uid));
        const userPackage = await getDoc(doc(db, "packages", user.uid));

        data = {
          ...user,
          profile: userProfile,
          package: userPackage,
        };
        error = null;
        addUser(data);
        return { data, error };
      }
    } catch (err) {
      data = null;
      error = { message: err.message };
      return { data, error };
    }
  };
};
export const useLogOut = () => {};
