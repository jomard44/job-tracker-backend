import "./App.css";
import NavBar from "./components/NaveBar";
import Jobs from "./components/Jobs";
import AddJob from "./components/AddJob";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Register from "./components/auth/Register";
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import ProtectedRoutes from "./utils/protectedRoutes";
import Feedback from "./components/Feedback";
import FeedbackButton from "./components/FeedbackBtn";
import { useAuth } from "../utils/AuthContext";

function App() {
  const { isAuth } = useAuth();

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Jobs />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/logout" element={<Signout />} />
            <Route path="/feedback" element={<Feedback />} />
          </Route>
        </Routes>
        {isAuth && (
          <div className="fixed bottom-5 right-5 z-50">
            <FeedbackButton />
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
