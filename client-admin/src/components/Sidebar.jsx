import { Nav } from "react-bootstrap";

export default function Sidebar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse "
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Nav.Link className="nav-link text-white small" href="#login">
              Dashboard
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="nav-link text-white small" href="#login">
              Categories
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="nav-link text-white small" href="#login">
              Register Admin
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="nav-link text-white small" href="#login">
              Sign Out
            </Nav.Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
