import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Genre from "./pages/Genre";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Login />
      <Register />
      <Dashboard />
      <Genre />
    </div>
  );
}

export default App;
