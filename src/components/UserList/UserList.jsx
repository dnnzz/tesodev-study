import React from 'react';
import styles from './UserList.module.css';
import ListItem from '../ListItem/ListItem';
import { Link } from 'react-router-dom';
export default function UserList() {
    return (
        <div className={styles.userListWrapper}>
             <div className={styles.userListInner}>
                <ListItem />
                <div className={styles.showMore}>
                    <Link to="/list"><button className={styles.btn}>Show more...</button></Link>
                </div>
            </div>
        </div>
        
    )
}
