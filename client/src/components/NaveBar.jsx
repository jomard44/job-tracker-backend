import "../index.css";

function NaveBar() {
  return (
    <nav className="bg-gray-600 shadow p-4 flex justify-between">
      <h1 className="text-red-500 font-bold ">Job Tracker</h1>

      <button className=" text-white  text-lg hover:text-blue-200">
      Add a new job
      </button>
    </nav>
  );
}

export default NaveBar;
