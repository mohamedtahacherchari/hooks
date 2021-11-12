import React from 'react'
import {Card} from "react-bootstrap"
import { Link } from 'react-router-dom'

//import StarRatingComponent from "react-star-rating-component"

const MovieCard = ({mov}) => {
    return (
        <div>
             <Card style={{  width: '18rem', height:"35rem"  }}>
      <Card.Img variant="top" src={mov.posterUrl} alt="posterUrl" style={{height:"20rem" }}/>
      <Card.Body>
        <Card.Title>{mov.title}</Card.Title>
        <Card.Text style={{fontSize: "small"}}>
         {mov.description}
        </Card.Text>
        <Card.Text>
        {mov.rate}
        </Card.Text>
        <Link to={`/movie/${mov.id}`} style={{alignItems:'center'}}>Trailer</Link> 
      </Card.Body>
    
    </Card>
    
            
        </div>
    )
}

export default MovieCard
