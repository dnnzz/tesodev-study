import { createContext, useContext, useReducer } from "react";
import { UsersReducer } from "../reducers/UsersReducer";

export const UserContext = createContext();
export const initialState = {
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