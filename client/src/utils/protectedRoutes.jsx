import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
const ProtectedRoutes = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
     try {
        const res = await fetch("http://localhost:3000/user/me", {
          credentials: "include",
        });

        if (!res.ok) throw new Error();
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      }
    };
    checkAuth()
  }, []);
  
 if (isAuth === null) return null;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes