export default function RowsMovie(props) {
  const {
    no,
    movie: { title, rating, imageUrl, User, Genre },
  } = props;
  return (
    <tr className="align-items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="align-middle">{title}</td>
      <td className="align-middle">{Genre.name}</td>
      <td className="align-middle">
        <i className="align-middle">{rating}</i>
      </td>
      <td className="align-middle">
        <i className="align-middle">{User.email}</i>
      </td>
      <td className="align-middle">
        <div className="items-center w-40 rounded">
          <img src={imageUrl} alt={title} style={{ height: "8rem" }} />
        </div>
      </td>
      <td className="align-middle">
        <button className="btn btn-dark">Show Casts</button>
      </td>
      <td className="align-middle">
        <button className="btn btn-dark">Edit</button>
        <button className="btn btn-dark">Delete</button>
      </td>
    </tr>
  );
}
