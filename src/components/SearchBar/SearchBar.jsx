import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={styles.searchBarWrapper}>
            <div className={styles.searchBarInnerDiv}>
                <input className={styles.searchBarInput} />
                <button className={styles.searchButton}>
                    Search 
                </button>
            </div>
        </div>
    )
}
