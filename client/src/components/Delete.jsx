import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({
    company_name: "",
    position: "",
    status: "",
  });
  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`${import.meta.env.VITE_API}/jobs/${id}`,{credentials:"include"});
      const data = await res.json();
      setJob(data);
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`${import.meta.env.VITE_API}/jobs/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 border border-gray-300 rounded-lg w-[50%] mx-auto mt-10 p-6 shadow-md space-y-5"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Delete job
      </h2>

      <label className="flex flex-col text-gray-700 font-medium">
        Company Name
        <input
          type="text"
          name="company_name"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={job.company_name}
          readOnly
        />
      </label>

      <label className="flex flex-col text-gray-700 font-medium">
        Position
        <input
          type="text"
          name="position"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={job.position}
          readOnly
        />
      </label>

      <label className="flex flex-col text-gray-700 font-medium">
        Status
        <select
          name="status"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={job.status}
          disabled
        >
          <option value="Applied">Applied</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>

      <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition">
        Delete
      </button>
    </form>
  );
};

export default Delete;
