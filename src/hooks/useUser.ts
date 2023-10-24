import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
  userName: string;
  authToken: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", user.userName);
    setItem("authToken", user.authToken);
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
    setItem("authToken", "");
  };

  return { user, addUser, removeUser };
};
