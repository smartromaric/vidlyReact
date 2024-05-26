import React, {Component} from 'react';
import TablesHeader from "./common/tablesHeader";
import Like from "./common/like";
import TableBody from "./common/tableBody";
import movies from "./movies";
import { Link } from 'react-router-dom';
class MoviesTables extends Component {
   columns = [
       {path:"title",label:"title",content: movie =><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
       {path:"genre.name",label:"genre"},
       {path:"numberInStock",label:"stock"},
       {path:"dailyRentalRate",label:"rate"},
       {key: "like", content : movie => <Like liked={movie.liked} onClick={() =>this.props.handleLike(movie)}/> },
       {key:"delete", content: movie =>   <button className={"btn btn-danger"} onClick={() =>
             this.props.handleDeleteMovies(movie)}>Delete</button>},

   ]
    render() {
        const {movies,handleLike,handleDeleteMovies,onSort,sortColumn}=this.props;
        return (
             <table className={"table"}>
                            <TablesHeader columns = {this.columns} onSort ={onSort} sortColumn ={sortColumn} />
                            <TableBody data={movies} columns = {this.columns} />
                 {/*<tbody>*/}
                 {/*           {movies.map(movie => <tr key={movie._id}>*/}
                 {/*               <td>{movie.title}</td>*/}
                 {/*               <td>{movie.genre.name}</td>*/}
                 {/*               <td>{movie.numberInStock}</td>*/}
                 {/*               <td>{movie.dailyRentalRate}</td>*/}
                 {/*               <td><Like liked={movie.liked} onClick={() => handleLike(movie)}/></td>*/}
                 {/*               <td>*/}
                 {/*                   <button className={"btn btn-danger"}*/}
                 {/*                           onClick={() => handleDeleteMovies(movie)}>Delete*/}
                 {/*                   </button>*/}
                 {/*               </td>*/}
                 {/*           </tr>)}*/}
                 {/*           </tbody>*/}


                        </table>
        );
    }
}


export default MoviesTables;