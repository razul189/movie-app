import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './stylesheets/MovieForm.css'

const MovieForm = () => {
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    imgUrl: '',
    synopsis: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        history.push('/movies') 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


return (
    <div className="movie-form-container ui inverted segment form">
      <h1 className="h1-title" style={{ textAlign: "center" }}>
        Add A Movie!{" "}
      </h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="ui input fluid">
          <p className="movie-form-label form-input-labels"><strong>Add Title:</strong></p>
          <input
            className="movie-form-input input-text"
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
            value={movie.title}
          />
        </div>

        <div className="ui input fluid">
          <p className="movie-form-label form-input-labels"><strong>Add Director/s:</strong></p>
          <input
            className="movie-form-input input-text"
            onChange={handleChange}
            type="text"
            name="director"
            placeholder="Director"
            value={movie.director}
          />
        </div>

        <div className="ui input fluid">
          <p className="movie-form-label form-input-labels"><strong>Add Image:</strong></p>
          <input
            className="movie-form-input input-text"
            onChange={handleChange}
            type="text"
            name="imgUrl"
            placeholder="Image Url"
            value={movie.imgUrl}
          />
        </div>

        <div className="ui input fluid">
          <p className="movie-form-label form-input-labels"><strong>Add Synopsis:</strong></p>
          <textarea
            className="movie-form-input synopsis"
            onChange={handleChange}
            name="synopsis"
            placeholder="Synopsis"
            value={movie.synopsis}
          />
        </div>

        <button className="movie-form-button ui button" type="submit">
          Submit Movie
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
