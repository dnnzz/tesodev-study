import React from 'react'
import logo from '../../assets/logo.jpeg';
import styles from './ResultPageHeader.module.css';
import { useUserContext } from "../../context/Context";
export default function ResultPageHeader() {
    const { dispatch } = useUserContext();
    const [query, setQuery] = React.useState("");
    return (
        <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="tesodev-logo" /> 
        <input data-testid="result-input" className={styles.resultPageInput} 
        onChange={(e) => setQuery(e.target.value)}
        type="text" />
        <button
        onClick={() =>
            dispatch({ type: "SEARCH_USERS", payload: query })
        }
        className={styles.resultPageBtn}>Search</button>
    </div>
    )
}
