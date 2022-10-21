import { useDispatch } from "react-redux";
import { fetchGenres } from "../store/actions/genresAction";

export default function RowsGenre(props) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    fetch("http://localhost:3000/admin/categories/" + id, {
      method: `DELETE`,
      // headers: {
      //   access_token: localStorage.getItem(`access_token`),
      // },
    }).then(() => dispatch(fetchGenres()));
  };
  const {
    no,
    genre: { name, createdAt, updatedAt },
  } = props;
  return (
    <tr>
      <th className="align-middle">{no + 1}</th>
      <td className="align-middle">{name}</td>
      <td className="align-middle">
        <i className="align-middle">{createdAt}</i>
      </td>
      <td className="align-middle">
        <i className="align-middle">{updatedAt}</i>
      </td>
      <td className="align-middle">
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-dark align-middle"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
