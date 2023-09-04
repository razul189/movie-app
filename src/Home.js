import React from "react";
import "./stylesheets/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">My Movie List</h1>
            <hr className="divider"/>
            <h3 className="home-subtitle">Welcome To Film-Folio!</h3>
            <div className="image-container">
                <img 
                 src="https://media.istockphoto.com/id/171311106/photo/retro-theater.jpg?s=612x612&w=0&k=20&c=yWTyaE11XonOiiEI-R4_EfxUHScrTGZHek7JcekNGyM="
                 alt="Film Illustration" 
                 className="center-image" 
                /> 
            </div>
            <div className="home-text">
                <p>
                    <strong>To begin, utilize the Navigation bar located at the top.</strong>
                </p>
                <p>
                    <strong>Feel free to add or remove movies from your list! This web App is a straightforward yet effective method for maintaining your movie collection!</strong>
                </p>
            </div>
        </div>
    );
}

export default Home;
