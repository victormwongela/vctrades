import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          VTRADES
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/markets">Markets</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-lg border border-slate-700 text-white">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;