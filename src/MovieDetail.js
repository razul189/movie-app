import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './stylesheets/MovieDetail.css'

const MovieDetail = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const id = match.params.id // Grabbing the id from the route match
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/movies');
    });
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <h1>Title: {movie.title}</h1>
      <h2>Directors: {movie.director}</h2>
      <img src={movie.imgUrl} alt="whoops" />
      <p>Synopsis: {movie.synopsis}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MovieDetail


// movie details for db.json
// {
//     "title": "Crazy, Stupid, Love",
//     "director": "Glenn Ficarra, John Requa",
//     "imgUrl": "https://www.themoviedb.org/t/p/w440_and_h660_face/p4RafgAPk558muOjnBMHhMArjS2.jpg",
//     "synopsis": "Cal Weaver is living the American dream. He has a good job, a beautiful house, great children and a beautiful wife, named Emily. Cal's seemingly perfect life unravels, however, when he learns that Emily has been unfaithful and wants a divorce. Over 40 and suddenly single, Cal is adrift in the fickle world of dating. Enter, Jacob Palmer, a self-styled player who takes Cal under his wing and teaches him how to be a hit with the ladies.",
//     "id": 1
//   },
//   {
//     "title": "Lilo & Stitch",
//     "director": "Chris Sanders, Dean DeBlois",
//     "imgUrl": "https://i.pinimg.com/originals/46/af/6b/46af6bd415d9dee671a7ba8a9ea98e17.gif",
//     "synopsis": "In Lilo & Stitch, a young Hawaiian girl named Lilo adopts a dog that turns out to be an alien experiment named Stitch. Despite his chaotic behavior, they form a close bond, learning about love, friendship, and the meaning of 'ohana (family)",
//     "id": 2
//   }