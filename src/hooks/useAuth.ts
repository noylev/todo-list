import { useEffect } from "react";
import { useUser, User } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const userDetails = {
      userName: getItem("user"),
      authToken: getItem("authToken"),
    };
    if (userDetails.userName) {
      addUser(userDetails);
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { login, logout };
};
