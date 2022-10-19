import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
    </div>
  );
}

export default App;
