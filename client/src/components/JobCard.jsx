import {Link} from "react-router-dom"
function JobCard({id, company_name, position, status }) {
  return (
    <div className="bg-white/60 border border-gray-300 rounded-lg p-4 shadow-md m-3 flex items-center gap-4">
      <input
        className="flex-1 p-2 border rounded-md bg-gray-50 text-gray-700 font-medium"
        type="text"
        value={company_name}
        readOnly
      />

      <input
        className="flex-1 p-2 border rounded-md bg-gray-50 text-gray-700"
        type="text"
        value={position}
        readOnly
      />

      <input
        className="flex-1 p-2 border rounded-md bg-gray-50 text-gray-700"
        type="text"
        value={status}
        readOnly
      />
    <Link className="p-4" to={`/edit/${id}`}>edit</Link>
    </div>
  );
}

export default JobCard;
