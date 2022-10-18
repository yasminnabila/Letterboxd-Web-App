import { Container, Nav, Navbar, Row } from "react-bootstrap";

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-inline-flex justify-content-start"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/letterboxd-logo-dark.png"}
            width="250"
            height="auto"
            className="d-flex-inline-block align-top"
            alt="Letterboxd logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link className="nav-list-link text-white small" href="#home">
              SIGN IN
            </Nav.Link>
            <Nav.Link
              className="nav-list-link text-white small"
              href="#features"
            >
              CREATE ACCOUNT
            </Nav.Link>
            <Nav.Link
              className="nav-list-link text-white small"
              href="#pricing"
            >
              FILMS
            </Nav.Link>
            <Nav.Link
              className="nav-list-link text-white small"
              href="#pricing"
            >
              LISTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
