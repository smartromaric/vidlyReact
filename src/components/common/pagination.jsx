import React from 'react';
import _ from "lodash"
function Pagination(props) {
    const {pageSize,itemCount,onhandlePagination,currentPage} = props

    const numPage = Math.ceil(itemCount/pageSize)
    const numPagination = _.range(1,numPage)

    return (
        <ul className="pagination">
            { numPagination.map((page) => <li className={ page === currentPage? "page-item active" :"page-item"} key={page}><a className="page-link " href="#" onClick={() => onhandlePagination(page)}>{page}</a></li> )}

        </ul>
    )
}

export default Pagination;


