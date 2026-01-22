import "./app.css";
import NavBar from "./components/NaveBar";
import Jobs from "./components/Jobs";
import AddJob from "./components/AddJob";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/add-job" element={<AddJob />} />

          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
