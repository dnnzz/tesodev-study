import { filterUsers , sortUsers } from "../utils/utils";

export const UsersReducer = (state, action) => {
    const users = JSON.parse(localStorage.getItem("persons"));
    switch (action.type) {
      case "SEARCH_USERS":
        let filtered = filterUsers(users.data,action.payload);
        return {
          ...state,
          filteredUsers:[filtered]
        };
      case "SORT_USERS":
        let sortedUsers = sortUsers(state.filteredUsers[0],action.payload);
        return{
          ...state,
          filteredUsers:[sortedUsers]
        };
      default:
        return state;
    }
  };