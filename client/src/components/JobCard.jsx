import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react"; 

function JobCard({ id, company_name, position, status, description, link }) {
  return (
    <div className="bg-white/60 border border-gray-300 rounded-lg p-4 shadow-md m-3 
                    flex flex-col md:flex-row gap-3 items-center md:items-start">

      <input className="w-full md:flex-1 p-2 border rounded-md bg-gray-50" value={company_name} readOnly />
      {description && (
        <input className="w-full md:flex-1 p-2 border rounded-md bg-gray-50" value={description} readOnly />
      )}
      <input className="w-full md:flex-1 p-2 border rounded-md bg-gray-50" value={position} readOnly />
      <input className="w-full md:flex-1 p-2 border rounded-md bg-gray-50" value={status} readOnly />
      {link && (
        <input className="w-full md:flex-1 p-2 border rounded-md bg-gray-50" value={link} readOnly />
      )}

      <div className="flex gap-2 mt-2 md:mt-0">
        <Link
          to={`/edit/${id}`}
          className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <Edit2 size={16} />
          Edit
        </Link>

        <Link
          to={`/delete/${id}`}
          className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          <Trash2 size={16} />
          Delete
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
