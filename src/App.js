
import './App.css';

import {useState} from "react";
import {Data} from './components/Data';
import MoviesList from './components/MoviesList';
import Add from './components/Add'
import Filter from './components/Filter';

function App() {
  const [movie ,setMovie] = useState(Data);
  
  const [name, setName] = useState('')
  const [rate, setRate] = useState(0)


  const handleRate = (x) => {
    setRate(x)
  }

  const handleName = (e) => {
    // e.preventDefault()
    setName(e.target.value)
  }
  const addMovie = (newMovie) => {
    setMovie([...movie, newMovie])
}


 
  return (
    <div className="App">

<Filter handleName={handleName} handleRate={handleRate}/>
    <MoviesList  movie={movie} name={name} rate={rate} />
    <Add addMovie={addMovie} />
    
    </div>
  );
}

export default App;
