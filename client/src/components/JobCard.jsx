import { Link } from "react-router-dom";
import { SquarePen, Trash2 } from "lucide-react";

function JobCard({ id, company_name, position, status, description, link }) {
  return (
    <div
      className="bg-white/60 border border-gray-300 rounded-lg p-4 shadow-md m-3 
                    flex flex-col md:flex-row gap-3 items-center md:items-start"
    >
      <input
        className="w-full md:flex-1 p-2 border rounded-md bg-gray-50"
        value={company_name}
        readOnly
      />
      {description && (
        <input
          className="w-full md:flex-1 p-2 border rounded-md bg-gray-50"
          value={description}
          readOnly
        />
      )}
      <input
        className="w-full md:flex-1 p-2 border rounded-md bg-gray-50"
        value={position}
        readOnly
      />
      <input
        className={`w-full md:flex-1 p-2 border rounded-md ${
          status === "Applied"
            ? "bg-blue-50 text-blue-700 border-blue-200"
            : status === "Interview"
            ? "bg-yellow-50 text-yellow-700 border-yellow-200"
            : status === "Rejected"
            ? "bg-red-50 text-red-700 border-red-200"
            : status === "Offer"
            ? "bg-green-50 text-green-700 border-green-200"
            : "bg-gray-50 text-gray-700 border-gray-200"
        }`}
        value={status}
        readOnly
      />
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full md:flex-1 p-2 border rounded-md overflow-x-auto whitespace-nowrap ${
                     status === "Applied"
                     ? "bg-blue-50 text-blue-600"
                     : status === "Interview"
                     ? "bg-yellow-50 text-yellow-600"
                     : status === "Rejected"
                     ? "bg-red-50 text-red-600"
                     : "bg-gray-50 text-gray-600"
                     }`} >
          {link}
        </a>
      )}

      <div className="flex gap-2 mt-2 md:mt-0">
        <Link
          to={`/edit/${id}`}
          className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <SquarePen size={16} />
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
