import React from 'react';
import styles from './UserList.module.css';
import ListItem from '../ListItem/ListItem';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/Context';
export default function UserList() {
    const {
        state
    } = useUserContext();
    return (
        <div className={styles.userListWrapper}>
             <div className={styles.userListInner}>
                {
                    state.filteredUsers && state.filteredUsers.map((i,index)=>
                    i.slice(0,3).map(
                        (user)=>
                        <ListItem 
                        key={index} 
                        name={user[0]}
                        email={user[2]}
                        date={user[3]}
                        country={user[4]}
                        state={user[5]} />
                    ))
                }
                <div className={styles.showMore}>
                    <Link to="/list"><button className={styles.btn}>Show more...</button></Link>
                </div>
            </div>
        </div>
        
    )
}
