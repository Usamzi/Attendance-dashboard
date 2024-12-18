
import { useAuth } from "./useAuth";
export const useUser = () => {
  const isAuthenticated = useAuth();
  const user = isAuthenticated
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  return user;
};
