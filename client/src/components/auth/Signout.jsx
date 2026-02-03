import { useNavigate } from "react-router-dom";

function Signout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/user/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        navigate("/login");
      } else {
        alert("Logout failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
    >
      Sign Out
    </button>
  );
}

export default Signout;
