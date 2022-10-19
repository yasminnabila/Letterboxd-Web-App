import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Card, Container, Row } from "react-bootstrap";

function MovieDetail() {
  let { id } = useParams();
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
      const response = await fetch("http://localhost:4000/movies/" + id);
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
        Please wait, page is loading...
      </h1>
    );
  } else if (error) {
    return (
      <h1 className="text-center justify-content-center align-items-center">
        Sorry, page cannot be loaded
      </h1>
    );
  }

  return (
    <>
      <Container className="container-fluid">
        <Container className="mt-3 mb-3" />
        <Col className="mt-5" key={movie.id}>
          <Card
            className="justify-content-center h-100"
            style={{ backgroundColor: "#546e7a" }}
          >
            <Row>
              <Col className="col-7">
                <div>
                  <Card.Img
                    className="d-flex align-items-center justify-content-center hover-zoom"
                    variant="top"
                    style={{ width: "25rem" }}
                    src={movie.imageUrl}
                  />
                </div>
              </Col>

              <Col className="col-5">
                <Card.Body className="text-sm-center align-items-center d-flex justify-content-center flex-column">
                  <Card.Title className="font-weight-light mb-0 align-items-center d-flex justify-content-center ">
                    {movie.title}
                  </Card.Title>
                  <Card.Title className="font-weight-light mb-0 align-items-center d-flex justify-content-center ">
                    Rating: {movie.rating}
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
