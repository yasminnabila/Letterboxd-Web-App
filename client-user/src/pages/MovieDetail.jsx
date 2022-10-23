import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Card, Container, Row } from "react-bootstrap";
import { AiFillYoutube } from "react-icons/ai";
import { fetchMovies } from "../store/actions/movieAction";

function MovieDetail() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => {
    console.log(state, "<<<");
    return state;
  });
  // const [loading, setLoading] = useState(true);
  // let [error, setError] = useState("");
  let { id } = useParams();

  //? EFFECT ONLY WHEN RENDERED
  useEffect(() => {
    dispatch(fetchMovies(id));
  }, []);

  // if (loading) {
  //   return (
  //     <h1 className="text-center justify-content-center align-items-center">
  //       Please wait, page is loading...
  //     </h1>
  //   );
  // } else if (error) {
  //   return (
  //     <h1 className="text-center justify-content-center align-items-center">
  //       Sorry, page cannot be loaded
  //     </h1>
  //   );
  // }

  return (
    <>
      <Container className="container-fluid">
        <Container className="mt-3 mb-3" />
        <Col className="mt-5" key={movies.id}>
          <Card
            className="justify-content-center h-100 p-3"
            style={{ backgroundColor: "#546e7a" }}
          >
            <Row>
              <Col className="col-5">
                <Card.Img
                  className="mb-3 d-flex align-items-center justify-content-center"
                  variant="top"
                  style={{ width: "20rem" }}
                  src={movies.imageUrl}
                />

                <Row>
                  <Col className="col-5 align-items-center justify-content-center">
                    <h5>Where to watch:</h5>
                  </Col>
                  <Col className="col-7 align-items-center justify-content-center">
                    <a href={movies.trailerUrl}>
                      <AiFillYoutube />
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col className="col-7">
                <Card.Body className="text-sm-center align-items-center d-flex justify-content-center flex-column">
                  <Card.Title className="mb-2 align-items-center d-flex justify-content-center ">
                    <h1>{movies.title}</h1>
                  </Card.Title>
                  <Card.Title className="mb-5 font-weight-light mb-0 align-items-center d-flex justify-content-center ">
                    <h6>Rating: {movies.rating}</h6>
                  </Card.Title>
                  <Card.Title className="mt-5 font-weight-light mb-0 align-items-center d-flex justify-content-center ">
                    <h5>{movies.synopsis}</h5>
                  </Card.Title>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Container />
      </Container>
    </>
  );
}

export default MovieDetail;
