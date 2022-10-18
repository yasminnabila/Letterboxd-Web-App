import { Card, Button, Col } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Col className="mt-5" key={movie.id}>
      <Card
        className="justify-content-center"
        style={{ width: "16rem", height: "34rem" }}
      >
        <Card.Img variant="top" src={movie.imageUrl} />
        <Card.Body className="align-items-center">
          <Card.Title className="mb-2 text-dark">{movie.title}</Card.Title>
          <Card.Title className="mb-2 text-muted">
            Rating: {movie.rating}
          </Card.Title>
          <Button variant="dark">Detail</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
