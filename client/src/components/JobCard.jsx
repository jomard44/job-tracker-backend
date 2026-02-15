import {Link} from "react-router-dom"
function JobCard({id, company_name, position, status, description, link}) {
  
  return (
       <div className="bg-white/60 border border-gray-300 rounded-lg p-4 shadow-md m-3 
                    flex flex-col md:flex-row gap-3">

      <input className="w-full md:flex-1" value={company_name} readOnly />

      {description && (
        <input className="w-full md:flex-1" value={description} readOnly />
      )}

      <input className="w-full md:flex-1" value={position} readOnly />
      <input className="w-full md:flex-1" value={status} readOnly />

      {link && (
        <input className="w-full md:flex-1" value={link} readOnly />
      )}

      <div className="flex gap-3 justify-end md:justify-center">
        <Link to={`/edit/${id}`}>edit</Link>
        <Link to={`/delete/${id}`}>delete</Link>
      </div>
    </div>

  );
}

export default JobCard;
