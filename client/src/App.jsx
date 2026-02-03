import "./app.css";
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
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<Jobs />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/logout" element={<Signout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
