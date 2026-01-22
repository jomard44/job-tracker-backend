import "./app.css";
import NavBar from "./components/NaveBar";
import Jobs from "./components/Jobs";
import AddJob from "./components/AddJob";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     

      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
