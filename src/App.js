
import './App.css';

import {useState} from "react";
import {Data} from './components/Data';
import MoviesList from './components/MoviesList';
import Add from './components/Add'
import Filter from './components/Filter'
function App() {
  const [movie ,setMovie] = useState(Data);
  

  const addMovie = (newMovie) => {
    setMovie([...movie, newMovie])
}


 
  return (
    <div className="App">

    <Filter movie={movie} />
    <MoviesList  movie={movie}  />
    <Add addMovie={addMovie} />
    
    </div>
  );
}

export default App;
