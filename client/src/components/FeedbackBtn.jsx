import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

function FeedbackButton() {
  return (
    <Link
      to="/feedback"
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
    >
      <MessageSquare size={24} />
    </Link>
  );
}

export default FeedbackButton;
