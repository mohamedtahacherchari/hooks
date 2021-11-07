import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movie}) => {
    return (
        <div className="movies">

{movie.map((mov)=><MovieCard mov={mov} key={mov.id}/>)} 
            
        </div>
    )
}

export default MoviesList
