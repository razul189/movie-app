import React from 'react'
import './stylesheets/About.css'

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="divider"></div>
            <p className="about-text">
                I am a software engineering student at Flatiron School. I created this project using React, JSX, HTML, and CSS. 
                I truly enjoyed working on this as it was fun exploring all the different things I can do with React such as 
                component-based architecture, reusability, and the ability to manage states effortlessly.
            </p>
            
            <h2 className="about-subtitle">FilmFolio</h2>
            <div className="divider"></div>
            <p className="about-text">
                This was created for movie lovers like myself to keep track of their favorite movies! Whether you're looking for 
                action-packed blockbusters, thought-provoking films, or timeless classics, I've got you covered!
            </p>
            <h3>Thank you for checking out FilmFolio!</h3>
        </div>
    );
}

export default About;
