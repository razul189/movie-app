import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data)
      });
  }, [id])

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Title:{movie.title}</h1>
      <h2>Directors:{movie.director}</h2>
      <img src={movie.imgUrl} alt="whoops" />
      <p>Synopsis:{movie.synopsis}</p>
    </div>
  );
};

export default MovieDetail;

