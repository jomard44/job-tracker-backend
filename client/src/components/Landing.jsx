import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        Track Your Job Applications Easily
      </h1>

      <p className="text-center max-w-xl mb-6 text-gray-700">
        Add, track, and manage all your job applications in one place. Stay organized and never lose track again!
      </p>

      <div className="w-full max-w-xl mb-6">
        <video 
          src="/demo.mov" 
          controls 
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <Link
        to="/register"
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
      >
        Get Started for Free
      </Link>
    </div>
  );
}
