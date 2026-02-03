import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    company_name: "",
    position: "",
    status: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/api/jobs/${id}`,{credentials:"include"});
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
    await fetch(`http://localhost:3000/api/jobs/${id}`, {
      method: "PUT",
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
      className="bg-white/60 border border-gray-300 rounded-lg w-[50%] mx-auto mt-10 p-6 shadow-md space-y-5"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Edit job details
      </h2>

      <label className="flex flex-col text-gray-700 font-medium">
        Company Name
        <input
          type="text"
          name="company_name"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={job.company_name}
          onChange={handleChange}
        />
      </label>

      <label className="flex flex-col text-gray-700 font-medium">
        Position
        <input
          type="text"
          name="position"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={job.position}
          onChange={handleChange}
        />
      </label>

      <label className="flex flex-col text-gray-700 font-medium">
        Status
        <select
          name="status"
          className="mt-1 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={job.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>

      <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition">
        Save changes
      </button>
    </form>
  );
}

export default Edit;
