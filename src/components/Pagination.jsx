import React from 'react'
import './styles/Pagination.css';
import classNames from 'classnames';

const Pagination = ({ totalPage, currentPage, onNextPage, onPreviusPage }) => {
    const totalPageArray = Array.from({ length: totalPage }, (_, index) => index + 1);
    
    return (
        <nav className="pagination">
            <button className="pagination-previous"  onClick={onPreviusPage}>Previous</button>
            <ul className="pagination-list">
                {totalPageArray.map((page) => {
                    return (
                        <li key={page}>
                            <a className={classNames("pagination-link", {
                                "is-current": currentPage === page
                            })} >{page}</a>
                        </li>
                    )
                })}
            </ul>
            <button className="pagination-next" onClick={onNextPage}>Next page</button>
        </nav>
    )
}

export default Pagination