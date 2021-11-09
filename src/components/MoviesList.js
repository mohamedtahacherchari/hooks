import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movie, name, rate}) => {
    return (
        <div className="movies">

<div className="movies">
            {movie.filter((elToFilter) => elToFilter.rate >= rate && elToFilter.title.toLowerCase().includes(name.toLowerCase())).map((mov) => <MovieCard mov={mov} key={mov.id} /> )}
        </div>
            
        </div>
    )
}

export default MoviesList;
