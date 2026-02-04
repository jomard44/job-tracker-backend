import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const checkAuth = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API}/user/me`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error();
      setIsAuth(true);
    } catch {
      setIsAuth(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
