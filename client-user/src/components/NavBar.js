import { Container, Nav, Navbar } from "react-bootstrap";

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + "/assets/letterboxd-logo-dark.png"}
            width="200"
            height="auto"
            className="d-flex-inline-block align-top"
            alt="Letterboxd logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="nav-list-link text-white small" href="#login">
              SIGN IN
            </Nav.Link>
            <Nav.Link
              className="nav-list-link text-white small"
              href="#register"
            >
              CREATE ACCOUNT
            </Nav.Link>
            <Nav.Link className="nav-list-link text-white small" href="#films">
              FILMS
            </Nav.Link>
            <Nav.Link className="nav-list-link text-white small" href="#lists">
              LISTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
