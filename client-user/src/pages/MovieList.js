import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import React from "react";
import MovieCard from "../components/MovieCard";

function MovieList() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  //? EFFECT ONLY WHEN RENDERED
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        <Row className="mt-5 mb-7 text-center text-muted">
          <h2>POPULAR FILMS THIS WEEK</h2>
        </Row>
        {movie.map((el, index) => {
          return <MovieCard movie={el} />;
        })}
      </Row>
    </Container>
  );
}

export default MovieList;
