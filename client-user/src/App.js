import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div>
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
