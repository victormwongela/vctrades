import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    alert("FORM SUBMITTED 🔥");

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-900 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-red-500 mb-8">
          LOGIN PAGE TEST
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
            "
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="
              w-full
              p-4
              rounded-xl
              bg-slate-800
              text-white
            "
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            onClick={() =>
              alert("BUTTON CLICKED 🔥")
            }
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              py-4
              rounded-xl
              font-semibold
              text-white
            "
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;