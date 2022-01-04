import React from 'react';
import styles from './SearchBar.module.css';
import { useUserContext } from '../../context/Context';
export default function SearchBar() {
    const {
        dispatch
    } = useUserContext();

    return (
        <div className={styles.searchBarWrapper}>
            <div className={styles.searchBarInnerDiv}>
                <input className={styles.searchBarInput} />
                <button onClick={()=> dispatch({type:"SEARCH_USERS"})}className={styles.searchButton}>
                    Search 
                </button>
            </div>
        </div>
    )
}
