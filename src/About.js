import React from 'react'

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
            
            <h2 className="about-subtitle">filmFolio</h2>
            <div className="divider"></div>
            <p className="about-text">
                This was created for movie lovers like myself to keep track of their favorite movies! Whether you're looking for 
                action-packed blockbusters, thought-provoking films, or timeless classics, I've got you covered. Just go ahead and 
                add them on! Thank you for checking out filmFolio!
            </p>
        </div>
    );
}

export default About;
