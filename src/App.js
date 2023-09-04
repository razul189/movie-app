import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './stylesheets/App.css'
import Home from './Home'
import Movies from './Movies'
import NavBar from './NavBar'
import MovieDetail from './MovieDetail'
import MovieForm from './MovieForm'
import About from './About'


const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={() => <Movies />} />
          <Route exact path= "/movies/new" component={MovieForm}/>
          <Route exact path="/movies/:id" component={() => <MovieDetail />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
