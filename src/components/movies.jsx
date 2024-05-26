import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getMovies} from "../services/fakeMovieService";
import {getGenres} from "../services/fakeGenreService";
import MoviesTables from "./moviesTables";
import Pagination from "./common/pagination";
import {PaginationsCal} from "../utils/paginations";
import Genre from "./common/genre";
import _ from "lodash"
import NavBar from './NavBar';

class Movies extends Component {
    state = {
        pageSize: 4,
        currentPage: 1,
        movies: [],
        genres: [],
        sortColumn: {path: "title", order: "asc"},
        // genres:getGenres(),
        // currentGenre : 1
    }

    componentDidMount() {
        const genres = [{_id: "", name: "All genre"}, ...getGenres()]
        this.setState({movies: getMovies(), genres})
    }

    // checkMovies(){
    //
    //     )
    // }
    handleDeleteMovies = (delMovie) => {
        // var delMovieId = movies.findIndex((obj)=>obj._id === id)
        const movies = this.state.movies.filter((movie) => movie._id !== delMovie._id)
        // movies.splice(delMovieId,1);
        this.setState({movies})


    }
    handleLike = (movie) => {
        const movies = [...this.state.movies]
        let index = movies.indexOf(movie)
        movies[index].liked = !movies[index].liked
        this.setState(movies)
    }

    handlePagination = (page) => {
        this.setState({currentPage: page})
    }
    handleGenre = genre => {
        // console.log(genre)
        this.setState({currentGenre: genre, currentPage: 1})
    }
    handleSort = sortColumn => {
        this.setState({sortColumn:sortColumn})
    }

    render() {
        const filters = this.state.currentGenre && this.state.currentGenre._id ? this.state.movies.filter(movie => movie.genre._id === this.state.currentGenre._id) : this.state.movies;
        const sorted = _.orderBy(this.state.movies, this.state.sortColumn.path, [this.state.sortColumn.order])
        const movies = PaginationsCal(sorted, this.state.currentPage, this.state.pageSize)
        // const {length: count} = this.state.movies
        if (filters.length === 0) {
            return <p>il ya aucune donne dans la base , veuillez en ajouter</p>

        }
        return (
            <>
                
                <main className={"container"}>
                    <div className="d-flex">
                        <div className="col-2">
                            <Genre genres={this.state.genres}
                                // textpProperty = "name"
                                // keypProperty = "_id"
                                   onhandleGenre={this.handleGenre}
                                   currentGenre={this.state.currentGenre}
                            />
                        </div>
                        <div className="col-8">
                            <p>il a actuellement {filters.length} films dans la base de données </p>
                            <MoviesTables movies={movies} handleLike={this.handleLike}
                                          handleDeleteMovies={this.handleDeleteMovies} onSort = {this.handleSort} sortColumn = {this.state.sortColumn} />
                            <Pagination itemCount={filters.length} pageSize={this.state.pageSize}
                                        currentPage={this.state.currentPage} onhandlePagination={this.handlePagination}/>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default Movies;

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onhandlePagination: PropTypes.func.isRequired
}