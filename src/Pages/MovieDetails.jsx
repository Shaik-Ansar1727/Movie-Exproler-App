import React from 'react'
import { useParams } from 'react-router-dom'
const MovieDetails = () => {
    const {id } = useParams();
  return (
    <div>
     <h1>Movie Details Page</h1>
     <p>Movie id: {id}</p>
    </div>
  )
}

export default MovieDetails
