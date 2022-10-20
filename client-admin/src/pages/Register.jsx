import { Button, Form, Row, Col, Container } from "react-bootstrap";

function Register() {
  return (
    <Container style={{ transform: "scale(90%)" }}>
      {/* <Col className="col-md-9 ms-sm-auto col-lg-10 px-md-4"> */}
      <Row>
        <Row className="justify-content-start">
          {" "}
          <h1 className="mb-4 ">Register New Admin</h1>
          <h4 className="">Personal Information</h4>
          <h6 className="mb-4 ">
            Use a permanent address where you can receive mail.
          </h6>
        </Row>
        <Row className="justify-content-start">
          <Form>
            <Row className="mb-3">
              <Form.Group ontrolId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridEmail">
                <Form.Label className="">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Label className="">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridPhoneNumber">
                <Form.Label className="">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone number"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridAddress">
                <Form.Label className="">Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  className="mb-3"
                />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Row>
      {/* </Col> */}
    </Container>
  );
}

export default Register;
