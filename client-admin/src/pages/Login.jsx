import { Button, Form, Row } from "react-bootstrap";

function Login() {
  return (
    <Form className="w-50 p-3 m-auto rounded-4 mt-5">
      <h1 className="text-center mb-4">Login</h1>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/assets/letterboxd-logo-dark.png"}
          width="725"
          height="251"
        />
      </div>
      <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
