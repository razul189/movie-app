import './stylesheets/Movies.css'
import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom'

const Movies = () => {
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch ("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovies(data)
           })
    }, [])

    
    const moviesList = movies.map((movie) => ( 
    <div key={movie.id}>
        <Link className="movie-link" to={`/movies/${movie.id}`}> 
        <li><strong>{movie.title}</strong></li>
        </Link>
    </div> 
    ))

    
    return (
        <div className="movies-container">
            <h1> My Movies</h1>
            <hr/>
            <h2 className="titles"> Titles</h2>
            {moviesList}
        </div>
    )
}

export default Movies

