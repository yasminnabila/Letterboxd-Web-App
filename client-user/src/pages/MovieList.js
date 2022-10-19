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
    fetchMovie();
  }, []);

  async function fetchMovie() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/movies");
      if (!response.ok) {
        throw new Error("Oops! There's something wrong...");
      }
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <h1 className="text-center justify-content-center align-items-center">
        {" "}
        Please wait, page is loading...{" "}
      </h1>
    );
  } else if (error) {
    return (
      <h1 className="text-center justify-content-center align-items-center">
        {" "}
        Sorry, page cannot be loaded{" "}
      </h1>
    );
  }

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
