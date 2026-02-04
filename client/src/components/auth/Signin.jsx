import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {useAuth} from "../../utils/AuthContext"

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
const {setIsAuth} = useAuth()
  const [signed, setSigned] = useState(true);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signin = await fetch(`${import.meta.env.VITE_API}/user/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (signin.ok) {
      navigate("/");
      setIsAuth(true)
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
        <p className="text-red-500">something went wrong. please try again</p>
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

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition ">
        Signin
      </button>
      <div className="flex flex-col justify-center items-center">
        <p>don't have an account </p>

        <Link to="/register" className="text-blue-500 hover:cursor-pointer">
          
          signup
        </Link>
      </div>
    </form>
  );
}

export default Signin;
