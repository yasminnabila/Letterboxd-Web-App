import RowsMovie from "../components/RowsMovie";
import RowsGenre from "../components/RowsGenre";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/moviesAction";
import { fetchGenres } from "../store/actions/genresAction";

export default function Tables(props) {
  const dispatch = useDispatch();
  const { status, head } = props;
  const { movies } = useSelector((state) => {
    return state.moviesReducer;
  });

  const { genres } = useSelector((state) => {
    return state.genresReducer;
  });

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
  }, []);

  let tBody;
  const tHead = head.map((e, i) => {
    return <th key={i + "x"}>{e}</th>;
  });
  if (status === "dashboard") {
    tBody = movies.map((e, i) => <RowsMovie key={e.id} movie={e} no={i} />);
  } else {
    tBody = genres.map((e, i) => <RowsGenre key={e.id} genre={e} no={i} />);
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
