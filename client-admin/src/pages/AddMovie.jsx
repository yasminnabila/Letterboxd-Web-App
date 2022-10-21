import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/actions/genresAction";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { createMovie } from "../store/actions/moviesAction";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { genres } = useSelector((state) => {
    // console.log(state, "<<ini dari tables");
    return state.genresReducer;
  });

  const [form, setForm] = useState({
    title: "",
    rating: "",
    synopsis: "",
    genreId: "",
    authorId: 1,
    imageUrl: "",
    trailerUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value, "<<<");
    setForm({
      ...form,
      [name]: value,
    });
  };
  //   const [title, settitle] = useState("");
  //   const [rating, setRating] = useState("");
  //   const [synopsis, setSynopsis] = useState("");
  //   const [genreId, setGenreId] = useState("");
  //   const [imageUrl, setImageUrl] = useState("");
  //   const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

//   useEffect(() => {
//     if(movies){
//         setForm({
//             title: movie.title
//         })
//     }
//   }, [movie])

  //   useEffect(() => {
  //     if (genres.length > 0) {
  //       setForm(genres[0].id);
  //     }
  //   }, [genres]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form, "<<<<<<<");
    dispatch(createMovie(form)).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Container
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4 "
        style={{ minHeight: "100vh", transform: "scale(95%)" }}
      >
        <Row>
          <Col className="mt-5 bg-light">
            <h1 className="text-center mb-5">Create new movie</h1>

            <Form onSubmit={handleSubmit}>
              {/* Movie Name */}
              <Form.Group className="mb-3">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  type="text"
                  placeholder="Parasite"
                />
              </Form.Group>

              {/* Synopsis */}
              <Form.Group className="mb-3">
                <Form.Label>Synopsis</Form.Label>
                <Form.Control
                  name="synopsis"
                  value={form.synopsis}
                  onChange={handleChange}
                  as="textarea"
                  rows={3}
                  placeholder="All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident."
                />
              </Form.Group>

              {/* Rating */}
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  type="number"
                  placeholder="4.5"
                />
              </Form.Group>

              {/* Select option */}
              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>

                <Form.Select
                  name="genreId"
                  value={form.genreId}
                  onChange={handleChange}
                >
                  {genres.map((el, index) => {
                    return (
                      <option value={el.id} key={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              {/* Image URL */}
              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
                  type="text"
                  placeholder="https://media-cache.cinematerial.com/p/500x/nza9lluu/top-gun-maverick-movie-poster.jpg?v=1648561333"
                />
              </Form.Group>

              {/* Trailer URL */}
              <Form.Group className="mb-3">
                <Form.Label>Trailer URL</Form.Label>
                <Form.Control
                  name="trailerUrl"
                  value={form.trailerUrl}
                  onChange={handleChange}
                  type="text"
                  placeholder="https://youtu.be/tBfgTZsBeFM"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddMovie;
