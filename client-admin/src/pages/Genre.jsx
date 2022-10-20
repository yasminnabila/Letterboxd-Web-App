import { Container, Row, Col, Button } from "react-bootstrap";
import Tables from "../components/Tables";

export default function Genre() {
  return (
    <Container
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
      style={{ minHeight: "100vh", transform: "scale(95%)" }}
    >
      <Container>
        <Row className="d-flex container align-items-center justify-content-end">
          <Col>
            <h1 className="text-5-xl font-bold d-flex align-items-center pt-3 pb-2">
              Genre List
            </h1>
          </Col>

          <Col className="d-flex justify-content-end">
            <Button className="btn btn-dark ">
              <span class="icon material-symbols-outlined"></span>Add New Genre
            </Button>
          </Col>
        </Row>
      </Container>

      <Tables
        status={"genre"}
        head={["No", "Genre", "Created At", "Updated At", "Actions"]}
      />
    </Container>
  );
}
