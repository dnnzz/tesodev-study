import React from 'react'
import styles from './Pagination.module.css';
export default function Pagination() {
    return (
        <div className={styles.pagination}>
            <button className={styles.previous}>Previous</button>
            <button className={styles.buttons}>1</button>
            <button className={styles.buttons}>1</button>
            <button className={styles.buttons}>1</button>
            <button className={styles.buttons}>1</button>
            <button className={styles.next}>Next</button>         
        </div>
    )
}
