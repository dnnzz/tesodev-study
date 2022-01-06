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
            className={styles.previous}
            disabled={currentNumber === 1}>Previous</button>
            {
                pageNumbers.map((num) =>(
                    <button
                    id={`btn-${num}`}
                    key={num}
                    onClick={() => {
                        setCurrentNumber(num);
                        paginate(num);
                      }}
                    className={currentNumber === num ? styles.activeBtn : styles.buttons}>{num}</button>
                ))
            }
            <button
            id="next"
             onClick={() => {
                if (currentNumber < pageNumbers.length) {
                  setCurrentNumber(currentNumber + 1);
                  paginate(currentNumber + 1);
                }
              }}
            className={styles.next}
            disabled={currentNumber === pageNumbers.length}>Next</button>         
        </div>
    )
}
