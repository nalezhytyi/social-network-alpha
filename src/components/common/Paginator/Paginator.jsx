import React, {useState} from "react";
import s from "./Paginator.module.css";
import cn from 'classnames'


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>
            {portionNumber > 1 &&
            <button disabled={portionNumber === 1} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map((p) => {
                return <span className={cn({[s.selected_page]: currentPage === p}, s.page_number)} key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}

        </div>

    )
};


export default Paginator;

