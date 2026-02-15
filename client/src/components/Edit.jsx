import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SquarePen  } from "lucide-react";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    company_name: "",
    position: "",
    status: "",
    description: "",
    link: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API}/jobs/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      setJob(data);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API}/jobs/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 border border-gray-300 rounded-lg w-full max-w-2xl mx-auto mt-10 p-6 shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Edit Job
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <label className="flex-1 flex flex-col text-gray-700 font-medium">
          Company Name
          <input
            type="text"
            name="company_name"
            className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            value={job.company_name}
          />
        </label>

        <label className="flex-1 flex flex-col text-gray-700 font-medium">
          Position
          <input
            type="text"
            name="position"
            className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            value={job.position}
          />
        </label>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <label className="flex-1 flex flex-col text-gray-700 font-medium">
          Description
          <input
            type="text"
            name="description"
            className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            value={job.description}
          />
        </label>

        <label className="flex-1 flex flex-col text-gray-700 font-medium">
          Link
          <input
            type="text"
            name="link"
            className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            value={job.link}
          />
        </label>
      </div>

      <label className="flex flex-col text-gray-700 font-medium">
        Status
        <select
          name="status"
          onChange={handleChange}
          value={job.status}
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Applied">Applied</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>

      <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition">
        <SquarePen  size={18} />
        Save Changes
      </button>
    </form>
  );
}

export default Edit;
