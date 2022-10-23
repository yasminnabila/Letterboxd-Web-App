import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../store/actions/genresAction";
import { updateMovie } from "../store/actions/moviesAction";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { genres } = useSelector((state) => {
    return state.genresReducer;
  });

  const { movieDetail } = useSelector((state) => {
    console.log(state, "INI MOVIE DETAIL KAK<<<<<");
    return state.moviesReducer;
  });

  useEffect(() => {
    dispatch(fetchGenres());

    setForm({
      title: movieDetail.title,
      rating: movieDetail.rating,
      synopsis: movieDetail.synopsis,
      GenreId: movieDetail.GenreId,
      imageUrl: movieDetail.imageUrl,
      trailerUrl: movieDetail.trailerUrl,
      profilePict1: movieDetail.profilePict1,
      profilePict2: movieDetail.profilePict2,
      profilePict3: movieDetail.profilePict3,
      name1: movieDetail.name1,
      name2: movieDetail.name2,
      name3: movieDetail.name3,
    });
  }, [movieDetail]);

  const [form, setForm] = useState({
    title: movieDetail.title,
    rating: movieDetail.rating,
    synopsis: movieDetail.synopsis,
    GenreId: movieDetail.GenreId,
    imageUrl: movieDetail.imageUrl,
    trailerUrl: movieDetail.trailerUrl,
    profilePict1: movieDetail.profilePict1,
    profilePict2: movieDetail.profilePict2,
    profilePict3: movieDetail.profilePict3,
    name1: movieDetail.name1,
    name2: movieDetail.name2,
    name3: movieDetail.name3,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newMovie = {
      ...form,
    };
    newMovie[name] = value;
    setForm(newMovie);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(updateMovie(form, movieDetail.id));
    navigate(`/`);
  };

  return (
    <>
      <Container
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4 "
        style={{ minHeight: "100vh", transform: "scale(95%)" }}
      >
        <Row>
          <Col className="mt-5 bg-light">
            <h1 className="text-center mb-5">Edit movie</h1>

            <Form onSubmit={handleEdit}>
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
                  name="GenreId"
                  value={form.GenreId}
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

              {/* CAST PHOTO & NAME */}
              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>Cast Name</Form.Label>
                  <Form.Control
                    name="name1"
                    value={form.name1}
                    onChange={handleChange}
                    type="text"
                    placeholder="Input cast name here"
                  />
                  <br />
                  <Form.Control
                    name="name2"
                    value={form.name2}
                    onChange={handleChange}
                    type="text"
                    placeholder="Input cast name here"
                  />
                  <br />
                  <Form.Control
                    name="name3"
                    value={form.name3}
                    onChange={handleChange}
                    type="text"
                    placeholder="Input cast name here"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>Cast Photo</Form.Label>
                  <Form.Control
                    name="profilePict1"
                    value={form.profilePict1}
                    onChange={handleChange}
                    type="text"
                    placeholder="Input cast image url here"
                  />
                  <br />
                  <Form.Control
                    name="profilePict2"
                    value={form.profilePict2}
                    onChange={handleChange}
                    type="text"
                    placeholder="Input cast image url here"
                  />
                  <br />
                  <Form.Control
                    name="profilePict3"
                    value={form.profilePict3}
                    onChange={handleChange}
                    type="text"
                    placeholder="IInput cast image url here"
                  />
                  <br />
                </Form.Group>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button onClick={() => navigate(`/`)} variant="warning">
                Cancel
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditMovie;
