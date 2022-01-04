import React from 'react'
import styles from './ResultPageList.module.css';
import ListItem from '../ListItem/ListItem';
import Pagination from '../Pagination/Pagination';
import icon from '../../assets/icon.png';
export default function ResultPageList() {
    const [openMenu,setMenu] = React.useState(false);
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
            <ListItem />
            <ListItem />
            <ListItem />
            <Pagination /> 
        </div>
    )
}
