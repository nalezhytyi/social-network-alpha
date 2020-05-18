import React, {useState} from "react";
import s from "./Paginator.module.css";
import cn from 'classnames'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import IconButton from "@material-ui/core/IconButton";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    const handleFirstPageButtonClick = () => setPortionNumber(portionNumber = 1);

    const handleBackButtonClick = () => setPortionNumber(portionNumber - 1);

    const handleNextButtonClick = () => setPortionNumber(portionNumber + 1);

    const handleLastPageButtonClick = () => setPortionNumber(Math.max(0, Math.ceil(pagesCount / portionSize)));


    Paginator.propTypes = {
        onPageChanged: PropTypes.func.isRequired
    };

    return (
        <div className={s.pagination}>
            <IconButton disableRipple size="small" disabled={portionNumber === 1}
                        onClick={handleFirstPageButtonClick}>
                <FirstPageIcon/>
            </IconButton>
            {portionNumber >= 1 &&
            <IconButton disableRipple size="small" disabled={portionNumber === 1}
                        onClick={handleBackButtonClick}><KeyboardArrowLeft/></IconButton>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map((p) => {
                return <Button disableElevation size='small' variant={currentPage === p && "contained"}
                               className={cn({[s.selected_page]: currentPage === p}, s.page_number)} key={p}
                               onClick={(e) => {
                                   onPageChanged(p);
                               }}>{p}</Button>
            })}
            {portionCount >= portionNumber &&
            <IconButton disableRipple size="small" disabled={portionNumber === portionCount}
                        onClick={handleNextButtonClick}><KeyboardArrowRight/></IconButton>}
            <IconButton disableRipple size="small" disabled={portionNumber === portionCount}
                        onClick={handleLastPageButtonClick}>
                <LastPageIcon/>
            </IconButton>
        </div>
    )
};


export default Paginator;

