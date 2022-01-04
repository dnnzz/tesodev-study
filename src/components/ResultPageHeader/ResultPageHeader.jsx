import React from 'react'
import logo from '../../assets/logo.jpeg';
import styles from './ResultPageHeader.module.css';
export default function ResultPageHeader() {
    return (
        <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="tesodev-logo" /> 
        <input className={styles.resultPageInput} type="text" />
        <button className={styles.resultPageBtn}>Search</button>
    </div>
    )
}
