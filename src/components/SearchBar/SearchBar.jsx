import React from "react";
import styles from "./SearchBar.module.css";
import { useUserContext } from "../../context/Context";
export default function SearchBar() {
    const { dispatch } = useUserContext();
    const [query, setQuery] = React.useState("");

    return (
        <div className={styles.searchBarWrapper}>
            <div className={styles.searchBarInnerDiv}>
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.searchBarInput}
                />
                <button
                    onClick={() =>
                        dispatch({ type: "SEARCH_USERS", payload: query })
                    }
                    className={styles.searchButton}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
