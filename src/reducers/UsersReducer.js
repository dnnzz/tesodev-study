import { filterUsers } from "../utils/utils";

export const UsersReducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_USERS":
        let filtered = filterUsers(state.users,"Turkey");
        return {
          ...state,
          filteredUsers:filtered
        };
      default:
        return state;
    }
  };