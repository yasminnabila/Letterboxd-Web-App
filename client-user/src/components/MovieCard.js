import { Card, Button, Col } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Col className="mt-5" key={movie.id}>
      <Card style={{ width: "18rem", height: "auto" }}>
        <Card.Img variant="top" src={movie.imageUrl} />
        <Card.Body>
          <Card.Title className="mb-2 text-dark">{movie.title}</Card.Title>
          <Card.Title className="mb-2 text-dark">
            Rating: {movie.rating}
          </Card.Title>
          <Button variant="primary">Detail</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
