import React from 'react'
import styles from './ListItem.module.css';
export default function ListItem() {
    return (
        <div className={styles.listItem}>
            <div>
                <p className={styles.city}>Turkey - Istanbul</p>
                <p className={styles.name}>Jane Doe - 2016</p>
            </div>
            <div className={styles.userEmailInfo}>
                <p className={styles.userEmail}>Email: abc@xyz.com</p>
            </div>
        </div>
    )
}
