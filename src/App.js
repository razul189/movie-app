import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './stylesheets/App.css';
import Home from './Home'
import Movies from './Movies'
import NavBar from "./NavBar"

const App = () => {
    
    return (
        <Router>
            <NavBar/>
            <div className = "App">
                <Switch>
                    <Route exact path = "/" component= {Home}/>
                    <Route exact path = "/Movies" component = {Movies}/>
                </Switch>
            </div>
        </Router>

    )
}

export default App