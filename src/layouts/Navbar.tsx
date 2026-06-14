import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          VTRADES
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="hover:text-blue-500 transition"
          >
            Home
          </Link>

          <Link
            to="/plans"
            className="hover:text-blue-500 transition"
          >
            Plans
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-500 transition"
          >
            Contact
          </Link>

        </div>

        <div className="flex gap-3">

          <Link
            to="/login"
            className="
              px-5 py-2
              border border-slate-700
              rounded-lg
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              px-5 py-2
              bg-blue-600
              rounded-lg
            "
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;