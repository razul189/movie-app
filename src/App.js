import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './stylesheets/App.css'
import Home from './Home'
import Movies from './Movies'
import NavBar from './NavBar'
import MovieDetail from './MovieDetail'
import MovieForm from './MovieForm'
import About from './About'

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const handleAddNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    const updatedMovieList = movies.filter((movie) => movie.id !== parseInt(id, 10));
    setMovies(updatedMovieList);
  };

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" render={() => <Movies movies={movies} />} />
          <Route exact path="/movies/new" render={() => <MovieForm onAddNewMovie={handleAddNewMovie} />} />
          <Route exact path="/movies/:id" render={() => <MovieDetail onDeleteMovie={handleDeleteMovie} />} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
