import './stylesheets/Movies.css'
import React from "react"
import {Link} from 'react-router-dom'

const Movies = ({movies}) => {
    
    const moviesList = movies.map((movie) => ( 
    <div key={movie.id}>
        <Link className="movie-link" to={`/movies/${movie.id}`}> 
        <li><strong>{movie.title}</strong></li>
        </Link>
    </div> 
    ))

    
    return (
        <div className="movies-container">
            <h1 className="movies-title"> My Movies </h1> 
            <hr/>
            <h2 className="movies-list"> Titles</h2> 
            {moviesList}
        </div>
    )
    }    

export default Movies

