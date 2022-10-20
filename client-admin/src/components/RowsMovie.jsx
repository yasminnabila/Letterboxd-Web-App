export default function RowsMovie(props) {
  const {
    no,
    movie: { title, rating, imageUrl, author, genre },
  } = props;
  return (
    <tr className="align-items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        {title}
      </td>
      <td className="border-t-0 px-6 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 align-items-center">
        {genre.name}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <i className="fas fa-arrow-up text-emerald-500 mr-4">{rating}</i>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <i className="fas fa-arrow-up text-blue-500 mr-4">{author.email}</i>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="items-center w-40 rounded">
          <img src={imageUrl} alt={title} style={{ height: "8rem" }} />
        </div>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button className="bg-emerald-500 h-8 w-24 rounded text-yellow-50 font-bold">
          Show images
        </button>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <button className="text-blue-600">Edit</button>
        <button className="text-red ml-2">Delete</button>
      </td>
    </tr>
  );
}
