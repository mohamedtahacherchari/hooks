import React from 'react'

const Trailer = ({movie , match}) => {
    const mov = movie.find((el) => el.id == match.params.id)
    return (
        <div>
            <iframe width="677" height="381" src={mov.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}

export default Trailer
