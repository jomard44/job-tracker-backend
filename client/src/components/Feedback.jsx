import { useForm, ValidationError } from "@formspree/react";

function Feedback() {
  const [state, handleSubmit] = useForm("xzzvrvdy");

  if (state.succeeded) {
    return <p className="text-center mt-20">Thanks for your feedback!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 space-y-4"
    >
      <h2 className="text-xl font-semibold">Send Feedback</h2>

      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full border p-2 rounded"
        required
      />
      <ValidationError field="email" errors={state.errors} />

      <textarea
        name="message"
        rows={5}
        placeholder="Describe the issue or suggestion..."
        className="w-full border p-2 rounded"
        required
      />
      <ValidationError field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}

export default Feedback;
