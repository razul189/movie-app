import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './stylesheets/App.css';
import Home from './Home'
import Movies from './Movies'
import NavBar from "./NavBar"
import MovieDetail from "./MovieDetail"

const App = () => {
    
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch ("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => {
            setMovies(data)
        })
    }, [])

    const handleDeleteMovie = (id) => {
        const updatedMovies = movies.filter(movie => movie.id !== parseInt(id, 10))
        setMovies(updatedMovies)
    }

    return (
        <Router>
            <NavBar/>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/movies" render={() => <Movies movies={movies} />} />
                    <Route exact path="/movies/:id" render={(props) => <MovieDetail {...props} onDeleteMovie={handleDeleteMovie} />} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
