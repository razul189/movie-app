import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './stylesheets/App.css';
import Home from './Home'

const App = () => {
    return (
        <Router>
            <div className = "App">
                <Switch>
                    <Route exact path = "/" component= {Home}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App