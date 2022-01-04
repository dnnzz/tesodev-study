import React from "react";
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import UserList from '../components/UserList/UserList';
import { useUserContext } from "../context/Context";
export default function Landing() {
    const {
        state
    } = useUserContext();
    return (
        <div>
            <Header />
            <SearchBar />
            {state.filteredUsers.length >0 && <UserList />}
        </div>
    );
}
