import React from 'react'
import styles from './ResultPageList.module.css';
import ListItem from '../ListItem/ListItem';
import Pagination from '../Pagination/Pagination';
import icon from '../../assets/icon.png';
import { useUserContext } from '../../context/Context';
export default function ResultPageList() {
    const {
        state
    } = useUserContext();
    const [openMenu,setMenu] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);

    const indexOfLastUser = currentPage * 6;
    const indexOfFirstUser = indexOfLastUser - 6;
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    return (
        <div className={styles.pageListWrapper}>
            <div className={styles.orderSection}>
                <img src={icon}  alt="icon" />
                <button onMouseOver={() => setMenu(true)} className={styles.btn}>Order By</button>
                {openMenu && 
                <div onMouseLeave={() => setMenu(false)} className={styles.orders}>
                    <button>Name ascending</button>
                    <button>Name descending</button>
                    <button>Year ascending</button>
                    <button>Year descending</button>
                </div>
                }
            </div>
            {
                state.filteredUsers && state.filteredUsers.map((i,index)=>
                i.slice(indexOfFirstUser, indexOfLastUser).map(
                    (user)=>
                    <ListItem 
                    key={`${index}-${user[0]}`} 
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
