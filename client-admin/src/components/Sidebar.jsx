import { Nav } from "react-bootstrap";
import Dashboard from "../pages/Dashboard";

export default function Sidebar() {
  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row">
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

        <Dashboard />

        {/* <main
          className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
          style={{ minHeight: "100vh" }}
        >
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>

          <canvas
            className="my-4 w-100"
            id="myChart"
            width="900"
            height="520"
          ></canvas>
        </main> */}
      </div>
    </div>
  );
}
