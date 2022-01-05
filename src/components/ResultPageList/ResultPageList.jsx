import React from 'react'
import styles from './ResultPageList.module.css';
import ListItem from '../ListItem/ListItem';
import Pagination from '../Pagination/Pagination';
import icon from '../../assets/icon.png';
import { useUserContext } from '../../context/Context';
export default function ResultPageList() {
    const {
        state,
        dispatch
    } = useUserContext();
    const [openMenu,setMenu] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const indexOfLastUser = currentPage * 6;
    const indexOfFirstUser = indexOfLastUser - 6;
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    const orderBy = (option) => {
        dispatch({ type: "SORT_USERS", payload: option });
        setMenu(false);
    }
    return (
        <div className={styles.pageListWrapper}>
            <div className={styles.orderSection}>
                <img src={icon}  alt="icon" />
                <button onMouseOver={() => setMenu(true)} className={styles.btn}>Order By</button>
                {openMenu && 
                <div onMouseLeave={() => setMenu(false)} className={styles.orders}>
                    <button
                    value="name_asc"
                    onClick={(e) => orderBy(e.target.value)}>Name ascending</button>
                    <button
                    value="name_desc"
                    onClick={(e) => orderBy(e.target.value)}>Name descending</button>
                    <button
                    value="year_asc"
                    onClick={(e) => orderBy(e.target.value)}>Year ascending</button>
                    <button
                    value="year_desc"
                    onClick={(e) => orderBy(e.target.value)}>Year descending</button>
                </div>
                }
            </div>
            {
                state.filteredUsers && state.filteredUsers.map((i,index)=>
                i.slice(indexOfFirstUser, indexOfLastUser).map(
                    (user)=>
                    <ListItem 
                    key={user[0]} 
                    name={user[0]}
                    email={user[2]}
                    date={user[3]}
                    country={user[4]}
                    state={user[5]} />
                    ))
            }
            <Pagination 
            userPerPage={6}
            allUsers={state.filteredUsers[0].length}
            paginate={paginate}
            /> 
        </div>
    )
}
