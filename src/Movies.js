
import React, {useEffect, useState} from "react"


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

    
    const moviesList = movies.map((movie) => <li key={movie.id}>{movie.title}</li> );

    
    return (
        <div>
            <h1> My Movies</h1>
            <hr/>
            {moviesList}
        </div>
    )
}

export default Movies