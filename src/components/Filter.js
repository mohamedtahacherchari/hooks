import React, {useState} from 'react'
//import {Form} from 'react-bootstrap'
import MovieCard from './MovieCard'

const Filter = ({movie}) => {
    const [title, setTitle] = useState('');
    const searchMovies =(e) => {
        
        setTitle(e.target.value);
    return (  
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="title">Movie Name</label>
            <input className="input" type="text" name="title"
                placeholder="i.e. Jurassic Park"
                value={title} onChange={(e) => setTitle(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {/* map - displays movies, filter - filters movies with the photo */}
           {movie.filter(mov => mov.poster_path).map(mov => (
              <MovieCard mov={mov} key={mov.id} /> 
           ))}
        </div>    
    </>  
       
    )
}}

export default Filter

