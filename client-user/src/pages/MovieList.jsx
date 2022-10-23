import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import React from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../store/actions/movieAction";

function MovieList() {
  const { movies } = useSelector((state) => {
    console.log(state, "<<<");
    return state;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <Container>
      <Row>
        <Row className="mt-5 mb-7 text-center text-muted">
          <h2>POPULAR FILMS THIS WEEK</h2>
        </Row>
        {movies.map((el, index) => {
          return <MovieCard movie={el} />;
        })}
      </Row>
    </Container>
  );
}

export default MovieList;
