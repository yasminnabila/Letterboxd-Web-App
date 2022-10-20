import useFetch from "../hooks/useFetch";
import RowsMovie from "../components/RowsMovie";
import RowsGenre from "../components/RowsGenre";

export default function Tables(props) {
  const { status, head } = props;
  const { data: movies } = useFetch(
    "http://localhost:4000/movies?_expand=author&_expand=genre"
  );
  const { data: genre } = useFetch("http://localhost:4000/genres");
  let tBody;
  const tHead = head.map((e, i) => {
    return (
      <th
        key={i + "x"}
        className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
      >
        {e}
      </th>
    );
  });
  if (status === "dashboard") {
    tBody = movies.map((e, i) => <RowsMovie key={e.id} movie={e} no={i} />);
  } else {
    tBody = genre.map((e, i) => <RowsGenre key={e.id} genre={e} no={i} />);
  }

  return (
    <div className="overflow-x-auto w-full p-20">
      <br />
      <table width="100%" className="table w-full">
        <thead>
          <tr>{tHead}</tr>
        </thead>
        <tbody className="max-w-xs">{tBody}</tbody>
      </table>
    </div>
  );
}
