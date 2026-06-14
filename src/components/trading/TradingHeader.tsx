import { Link } from "react-router-dom";
import { useTrading } from "../../context/TradingContext";

const TradingHeader = () => {
  const {
    accountType,
    setAccountType,
  } = useTrading();

  return (
    <header
      className="
        h-[70px]
        bg-slate-900
        border-b
        border-slate-800
        flex
        items-center
        justify-between
        px-6
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-10">
        <h1
          className="
            text-3xl
            font-bold
            text-blue-500
          "
        >
          VTRADES
        </h1>

        {/* Navigation */}
        <nav
          className="
            flex
            items-center
            gap-8
          "
        >
          <Link
            to="/trade/real"
            className="
              text-slate-300
              hover:text-white
              transition
            "
          >
            Charts
          </Link>

          <Link
            to="/bots"
            className="
              text-slate-300
              hover:text-white
              transition
            "
          >
            Bots
          </Link>

          <Link
            to="/copy-trading"
            className="
              text-slate-300
              hover:text-white
              transition
            "
          >
            Copy Trading
          </Link>

          <Link
            to="/dashboard"
            className="
              text-slate-300
              hover:text-white
              transition
            "
          >
            Dashboard
          </Link>
        </nav>
      </div>

      {/* Right Side */}
      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <select
          value={accountType}
          onChange={(e) =>
            setAccountType(
              e.target.value as
                "demo" | "real"
            )
          }
          className="
            bg-slate-800
            px-4
            py-2
            rounded-lg
            text-white
          "
        >
          <option value="demo">
            Demo Account
          </option>

          <option value="real">
            Real Account
          </option>
        </select>

        <div
          className="
            text-green-400
            font-bold
          "
        >
          {accountType === "demo"
            ? "$10,000.00"
            : "$0.00"}
        </div>

        <button
          className="
            bg-green-600
            px-4
            py-2
            rounded-lg
            font-semibold
          "
        >
          Deposit
        </button>

        <button
          className="
            bg-red-600
            px-4
            py-2
            rounded-lg
            font-semibold
          "
        >
          Withdraw
        </button>

        <div
          className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
            font-bold
          "
        >
          V
        </div>
      </div>
    </header>
  );
};

export default TradingHeader;