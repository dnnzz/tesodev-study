import React from "react";
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import UserList from '../components/UserList/UserList';
export default function Landing() {
    return (
        <div>
            <Header />
            <SearchBar />
            <UserList />
        </div>
    );
}
