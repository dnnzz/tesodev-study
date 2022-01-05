import React from 'react'
import styles from './Pagination.module.css';
export default function Pagination({userPerPage,paginate,allUsers}) {
    const pageNumbers = [];
    const [currentNumber, setCurrentNumber] = React.useState(1);
    for (let i = 1; i <= Math.ceil(allUsers / userPerPage); i++) {
        pageNumbers.push(i);
    }
    if (pageNumbers.length < 2) {
        return null;
    }
    return (
        <div className={styles.pagination}>
            <button 
            onClick={() => {
                if (currentNumber > 1) {
                  setCurrentNumber(currentNumber - 1);
                  paginate(currentNumber - 1);
                } else {
                  return;
                }
              }}
            className={styles.previous}>Previous</button>
            {
                pageNumbers.map((num) =>(
                    <button 
                    key={num}
                    onClick={() => {
                        setCurrentNumber(num);
                        paginate(num);
                      }}
                    className={styles.buttons}>{num}</button>
                ))
            }
            <button 
             onClick={() => {
                if (currentNumber < pageNumbers.length) {
                  setCurrentNumber(currentNumber + 1);
                  paginate(currentNumber + 1);
                }
              }}
            className={styles.next}>Next</button>         
        </div>
    )
}
