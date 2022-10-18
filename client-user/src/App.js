import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./components/NavBar";
import MovieList from "./pages/MovieList";
import CarouselFade from "./components/Carousel";

function App() {
  return (
    <div>
      <NavBar />
      <CarouselFade />
      <MovieList />
    </div>
  );
}

export default App;
