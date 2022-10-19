import { Button, Form, Row, Col, Container } from "react-bootstrap";

function Login() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "black" }}
      id="login-section"
    >
      <Container
        className="container h-50 justify-content-center align-items-center"
        style={{ transform: "scale(90%)" }}
      >
        <Row className="d-flex justify-content-center align-items-center">
          <Form className="w-50 p-3 m-auto rounded-4 mt-5 justify-content-center align-items-center">
            <Row className="d-flex justify-content-center align-items-center">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/Letterboxd_vertical_logo.png"
                }
                width="500"
                height="auto"
                alt="Logo"
                className="d-flex align-items-center justify-content-center"
              />
            </Row>
            <h1 className="text-center mb-4 text-light">
              Sign in to your account
            </h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

export default Login;
