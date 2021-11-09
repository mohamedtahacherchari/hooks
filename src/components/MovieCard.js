import React from 'react'
import {Card} from "react-bootstrap"
//import StarRatingComponent from "react-star-rating-component"
const MovieCard = ({mov}) => {
    return (
        <div>
             <Card style={{  width: '18rem', height:"35rem"  }}>
      <Card.Img variant="top" src={mov.posterUrl} alt="posterUrl" style={{height:"20rem" }}/>
      <Card.Body>
        <Card.Title>{mov.title}</Card.Title>
        <Card.Text>
         {mov.description}
        </Card.Text>
        <Card.Text>
        value={mov.rate}
        </Card.Text>
       
      </Card.Body>
    </Card>
    
            
        </div>
    )
}

export default MovieCard
