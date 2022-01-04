import React from 'react'
import styles from './ListItem.module.css';
export default function ListItem({name,email,date,country,state}) {
    return (
        <div className={styles.listItem}>
            <div className={styles.userInfo}>
                <p className={styles.city}>{country} - {state}</p>
                <p className={styles.name}>{name} - {date}</p>
            </div>
            <div className={styles.userEmailInfo}>
                <p className={styles.userEmail}>Email: {email}</p>
            </div>
        </div>
    )
}
