import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

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
      const res = await fetch(`${import.meta.env.VITE_API}/jobs/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      setJob(data);
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API}/jobs/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/60 border border-gray-300 rounded-lg w-full max-w-2xl mx-auto mt-10 p-6 shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Delete Job
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="flex-1 p-2 border rounded-md bg-gray-50"
          type="text"
          value={job.company_name}
          readOnly
        />
        <input
          className="flex-1 p-2 border rounded-md bg-gray-50"
          type="text"
          value={job.position}
          readOnly
        />
      </div>

      {job.description && (
        <input
          className="w-full p-2 border rounded-md bg-gray-50"
          type="text"
          value={job.description}
          readOnly
        />
      )}

      {job.link && (
        <input
          className="w-full p-2 border rounded-md bg-gray-50"
          type="text"
          value={job.link}
          readOnly
        />
      )}

      <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition">
        <Trash2 size={18} />
        Delete Job
      </button>
    </form>
  );
};

export default Delete;
