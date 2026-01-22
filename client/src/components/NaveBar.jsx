import "../index.css";
import { Link } from "react-router-dom";
function NaveBar() {
  return (
    <nav className="bg-gray-600 shadow p-4 flex justify-between">
      <h1 className="text-red-500 font-bold "><Link to="/">Job Tracker</Link></h1>

      <Link className=" text-white  text-lg hover:text-blue-200" to="/add-job">
        Add a new job
      </Link>
    </nav>
  );
}

export default NaveBar;
