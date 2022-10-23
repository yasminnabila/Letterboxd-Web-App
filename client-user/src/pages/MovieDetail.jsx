import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Card, Container, Row } from "react-bootstrap";
// import { AiFillYoutube } from "react-icons/ai";
import { movieDetail } from "../store/actions/movieAction";

function MovieDetail() {
  const dispatch = useDispatch();
  let { slug } = useParams();
  const { oneMovie, loading } = useSelector((state) => {
    console.log(state);
    return state;
  });

  const MovieGenre = oneMovie?.Genre?.name;
  // console.log(MovieGenre);

  const MovieCast = oneMovie?.Casts ?? [0];
  console.log(MovieCast);
  useEffect(() => {
    dispatch(movieDetail(slug));
  }, []);

  if (loading) {
    return (
      <div className="contain">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Container className="container-fluid ">
        <Container className="mt-3 mb-3" />
        <Col className="mt-5" key={oneMovie.id}>
          <Row className="d-flex justify-content-center">
            <Col className="col-4">
              <Card.Img
                className="mb-3 d-flex align-items-center justify-content-center"
                variant="top"
                style={{ width: "20rem" }}
                src={oneMovie.imageUrl}
              />
            </Col>

            <Col className="col-5">
              <div className="box-body">
                <h2>{oneMovie.title}</h2>
                <p className="posted"> Rating: {oneMovie.rating}/10</p>
                <p className="text">Genre: {MovieGenre}</p>
                <p className="text">{oneMovie.synopsis}</p>
                <div className="cl">&nbsp;</div>
                <h3 style={{ color: "white" }}>TRAILER</h3>
                <div>
                  <iframe
                    src={oneMovie.trailerUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Container />
        <Container>
          <Row className="container-fluid d-flex justify-content-center">
            <h2 style={{ color: "white" }}>CASTS</h2>
            <div id="rowDetail" className="row">
              {MovieCast.map((el) => {
                return (
                  <div
                    className="card m-2 d-flex align-items-center"
                    style={{ backgroundColor: "#546e7a", width: "13rem" }}
                  >
                    <img
                      id="imgCast"
                      className="card-img-top d-flex align-items-center"
                      src={el.profilePict}
                      stle={{ width: "10rem" }}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{el.name}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default MovieDetail;
