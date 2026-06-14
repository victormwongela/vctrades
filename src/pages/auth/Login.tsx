import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaChartLine } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    alert("Login submitted 🔥");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-blue-900 p-12">

          <FaChartLine
            size={70}
            className="mb-8"
          />

          <h1 className="text-5xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Access your trading dashboard,
            manage investments and monitor
            market performance in real time.
          </p>

        </div>

        {/* Right Side */}

        <div className="p-10 lg:p-14">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-white">
              Sign In
            </h2>

            <p className="text-slate-400 mt-3">
              Login to your account
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            <div className="relative">

              <FaEnvelope
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  focus:border-blue-500
                  outline-none
                "
              />

            </div>

            <div className="relative">

              <FaLock
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="
                  w-full
                  pl-12
                  pr-4
                  py-4
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  focus:border-blue-500
                  outline-none
                "
              />

            </div>

            <div className="flex justify-between text-sm">

              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="#"
                className="text-blue-500"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                py-4
                rounded-xl
                font-semibold
                transition
              "
            >
              Login
            </button>

            <p className="text-center text-slate-400">

              Don't have an account?

              <Link
                to="/register"
                className="ml-2 text-blue-500"
              >
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;