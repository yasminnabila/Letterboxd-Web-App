import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Card, Container, Row } from "react-bootstrap";
import { AiFillYoutube } from "react-icons/ai";
import { movieDetail } from "../store/actions/movieAction";

function MovieDetail() {
  const dispatch = useDispatch();
  let { slug } = useParams();
  const { oneMovie } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(movieDetail(slug));
  }, []);

  return (
    <>
      <Container className="container-fluid">
        <Container className="mt-3 mb-3" />
        <Col className="mt-5" key={oneMovie.id}>
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
                  src={oneMovie.imageUrl}
                />

                <Row>
                  <Col className="col-5 align-items-center justify-content-center">
                    <h5>Where to watch:</h5>
                  </Col>
                  <Col className="col-7 align-items-center justify-content-center">
                    <a href={oneMovie.trailerUrl}>
                      <AiFillYoutube />
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col className="col-7">
                <Card.Body className="text-sm-center align-items-center d-flex justify-content-center flex-column">
                  <Card.Title className="mb-2 align-items-center d-flex justify-content-center ">
                    <h1>{oneMovie.title}</h1>
                  </Card.Title>
                  <Card.Title className="mb-5 font-weight-light mb-0 align-items-center d-flex justify-content-center ">
                    <h6>Rating: {oneMovie.rating}</h6>
                  </Card.Title>
                  <Card.Title className="mt-5 font-weight-light mb-0 align-items-center d-flex justify-content-center ">
                    <h5>{oneMovie.synopsis}</h5>
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
