import React from 'react';
import logo from '../../assets/logo.jpeg';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={logo}  alt="tesodev-logo" /> 
            <p className={styles.headerAltText}>Search Web App</p>
        </div>
    )
}
