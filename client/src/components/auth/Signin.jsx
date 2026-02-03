import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [signed, setSigned] = useState(true);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (register.ok) {
      navigate("/");
    } else {
      setSigned(false);
    }
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Sign in</h2>
      {!signed && (
        <p className="text-red-500">
          something went wrong. please try again
        </p>
      )}

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
          onChange={handleChange}
          value={user.email}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
          onChange={handleChange}
          value={user.password}
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  );
}

export default Signin;
