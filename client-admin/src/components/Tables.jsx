import useFetch from "../hooks/useFetch";
import RowsMovie from "../components/RowsMovie";
import RowsGenre from "../components/RowsGenre";
import { Table } from "react-bootstrap";

export default function Tables(props) {
  const { status, head } = props;
  const { data: movies } = useFetch(
    "http://localhost:4000/movies?_expand=author&_expand=genre"
  );
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
