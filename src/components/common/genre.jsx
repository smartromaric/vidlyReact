import React from 'react';

function Genre(props) {
    const {genres, textpProperty, keypProperty, onhandleGenre, currentGenre} = props
    // console.log(currentGenre)
    return (
        <ul className="list-group">
            {/*<li style={{cursor:"pointer"}} className={currentGenre.name === null ? "list-group-item active" : "list-group-item "}*/}
            {/*    onClick={() => onhandleGenre(null)}>All genres*/}
            {/*</li>*/}

            {genres.map(genre =>
                <li style={{cursor:"pointer"}} className={currentGenre === genre ? "list-group-item active" : "list-group-item "}
                    key={genre[keypProperty]}
                    onClick={() => onhandleGenre(genre)}>{genre[textpProperty]}</li>)}
        </ul>
    );
}

export default Genre;
Genre.defaultProps = {
    textpProperty : "name",
    keypProperty : "_id"
}
