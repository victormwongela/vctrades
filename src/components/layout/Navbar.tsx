import { Link } from "react-router-dom";

import {
  FaHome,
  FaRobot,
  FaCopy,
  FaChartLine,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-slate-950/95
        backdrop-blur-md
        border-b
        border-slate-800
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
            text-3xl
            font-extrabold
            text-blue-500
          "
        >
          VTRADES
        </Link>

        {/* Navigation */}

        <div
          className="
            flex
            items-center
            gap-8
            text-slate-300
          "
        >
          <Link
            to="/"
            className="
              flex
              items-center
              gap-2
              hover:text-blue-400
              transition
            "
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/plans"
            className="
              flex
              items-center
              gap-2
              hover:text-green-400
              transition
            "
          >
            <FaChartLine />
            Plans
          </Link>

          <Link
            to="/bots"
            className="
              flex
              items-center
              gap-2
              hover:text-yellow-400
              transition
            "
          >
            <FaRobot />
            Bots
          </Link>

          <Link
            to="/copy-trading"
            className="
              flex
              items-center
              gap-2
              hover:text-purple-400
              transition
            "
          >
            <FaCopy />
            Copy Trading
          </Link>

          <Link
            to="/dashboard"
            className="
              flex
              items-center
              gap-2
              hover:text-cyan-400
              transition
            "
          >
            <FaChartLine />
            Dashboard
          </Link>

          <Link
            to="/contact"
            className="
              flex
              items-center
              gap-2
              hover:text-pink-400
              transition
            "
          >
            <FaEnvelope />
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <Link
            to="/login"
            className="
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-xl
              bg-slate-800
              hover:bg-slate-700
              transition
            "
          >
            <FaSignInAlt />
            Login
          </Link>

          <Link
            to="/register"
            className="
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              transition
            "
          >
            <FaUserPlus />
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;