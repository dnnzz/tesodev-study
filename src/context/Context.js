import { createContext, useContext, useReducer } from "react";
import { UsersReducer } from "../reducers/UsersReducer";

export const UserContext = createContext();
const users = JSON.parse(localStorage.getItem("persons"));
export const initialState = {
  users: users.data,
  filteredUsers:[]
};
export const Context = ({
  children,
}) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default Context;