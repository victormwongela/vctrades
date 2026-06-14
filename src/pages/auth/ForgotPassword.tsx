import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    alert(
      `Reset link sent to ${email}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-3xl">

        <h1 className="text-4xl font-bold text-white mb-3">
          Forgot Password
        </h1>

        <p className="text-slate-400 mb-8">
          Enter your email address.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              py-4
              rounded-xl
            "
          >
            Send Reset Link
          </button>

        </form>

        <Link
          to="/login"
          className="
            block
            mt-6
            text-center
            text-blue-500
          "
        >
          Back To Login
        </Link>

      </div>

    </div>
  );
};

export default ForgotPassword;