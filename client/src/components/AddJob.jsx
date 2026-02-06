import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    company_name: "",
    position: "",
    status: "Applied",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetch(`${import.meta.env.VITE_API}/jobs`, {
      method: "POST",
      credentials:"include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    setJob({ company_name: "", position: "", status: "Applied" });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 border border-gray-300 rounded-lg w-[50%] mx-auto mt-10 p-6 shadow-md space-y-5"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Add New Job
      </h2>

      <label className="flex flex-col text-gray-700 font-medium">
        Company Name
        <input
          type="text"
          name="company_name"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          value={job.company_name}
        />
      </label>

      <label className="flex flex-col text-gray-700 font-medium">
        Position
        <input
          type="text"
          name="position"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          value={job.position}
        />
      </label>

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

      <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition">
        Submit
      </button>
    </form>
  );
}

export default AddJob;
