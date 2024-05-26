import React, {Component} from 'react';
import { FaSortDown,FaSortUp } from "react-icons/fa";
class TablesHeader extends Component {
    raiseSort = (path) => {
        const sortColumn = {...this.props.sortColumn}
        if (sortColumn.path === path) {
            // console.log(sortColumn, path)
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc"
        } else {
            sortColumn.path = path
            sortColumn.order = "asc"
        }
        this.props.onSort(sortColumn)
    }
    renderSortIcon = column =>{
        if (column.path !== this.props.sortColumn.path) return null
        if (this.props.sortColumn.order === "asc") return <FaSortUp/>
        return <FaSortDown/>

    }

    render() {

        return (
            <thead>
            <tr style={{fontWeight: "bold", textTransform: "uppercase"}}>
                {this.props.columns.map(column => (
                    <th key={column.path || column.key} onClick={() => this.raiseSort(column.path)} className={"clickable"}>
                        {column.label} {this.renderSortIcon(column)}
                    </th>
                ))}

            </tr>
            </thead>

        );
    }
}

export default TablesHeader;