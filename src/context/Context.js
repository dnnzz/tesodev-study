import { createContext, useContext, useReducer } from "react";
import { UsersReducer } from "../reducers/UsersReducer";

const initialState = {
  filteredUsers:[]
};
export const UserContext = createContext(null);
const Context = ({
  children,
}) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default Context;