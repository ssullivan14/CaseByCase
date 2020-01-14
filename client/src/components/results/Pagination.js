import React from 'react'

export const Pagination = ({ resultsPerPage, totalResults, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
        console.log(pageNumbers);
    }

    console.log(pageNumbers);

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;