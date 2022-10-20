export default function RowsGenre(props) {
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
        <button className="btn btn-dark align-middle">Delete</button>
      </td>
    </tr>
  );
}
