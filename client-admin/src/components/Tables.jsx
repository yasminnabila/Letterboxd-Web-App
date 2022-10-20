import useFetch from "../hooks/useFetch";
import RowsMovie from "../components/RowsMovie";
import RowsGenre from "../components/RowsGenre";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/moviesAction";
import { useNavigate } from "react-router-dom";

export default function Tables(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, head } = props;
  const movies = useSelector((state) => {
    console.log(state, "<<ini dari tables");
    return state.moviesReducer.movies;
  });

  // const { data: movies } = useFetch(
  //   "http://localhost:4000/movies?_expand=author&_expand=genre"
  // );
  useEffect(() => {
    dispatch(
      fetchMovies()
    );
  }, []);

  const { data: genre } = useFetch("http://localhost:4000/genres");

  let tBody;
  const tHead = head.map((e, i) => {
    return <th key={i + "x"}>{e}</th>;
  });
  if (status === "dashboard") {
    tBody = movies.map((e, i) => <RowsMovie key={e.id} movie={e} no={i} />);
  } else {
    tBody = genre.map((e, i) => <RowsGenre key={e.id} genre={e} no={i} />);
  }

  return (
    <div>
      <br />
      <Table bordered hover width="100%" className="table w-full">
        <thead>
          <tr>{tHead}</tr>
        </thead>
        <tbody className="max-w-xs">{tBody}</tbody>
      </Table>
    </div>
  );
}
