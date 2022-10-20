import { Button, Form, Row, Col, Container } from "react-bootstrap";

function Register() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "light" }}
      id="login-section"
    >
      <Container
        className="container h-50 d-flex justify-content-start"
        style={{ transform: "scale(90%)" }}
      >
        <Row className="">
          <Form className="w-50 p-3 m-auto rounded-4 mt-5 justify-content-start align-items-center">
            <h1 className="mb-4 ">Register New Admin</h1>
            <h4 className="">Personal Information</h4>
            <h6 className="mb-4 ">
              Use a permanent address where you can receive mail.
            </h6>
            <Row className="mb-3">
              <Form.Group controlId="formGridUsername">
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
      </Container>
    </Container>
  );
}

export default Register;
