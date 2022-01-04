import React from 'react'
import styles from './ResultPageList.module.css';
import ListItem from '../ListItem/ListItem';
import icon from '../../assets/icon.png';
export default function ResultPageList() {
    return (
        <div className={styles.pageListWrapper}>
            <div className={styles.orderSection}>
                <img src={icon}  alt="icon" />
                <button className={styles.btn}>Order By</button>
            </div>
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    )
}
