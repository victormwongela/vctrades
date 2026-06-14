import {
  FaWallet,
  FaChartLine,
  FaExchangeAlt,
  FaTrophy,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Trading Dashboard
        </h1>

        <p className="text-slate-400 mt-3">
          Monitor your account performance,
          positions and profits.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          mb-10
        "
      >
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <FaWallet className="text-3xl text-green-500 mb-4" />
          <h3 className="text-slate-400">
            Account Balance
          </h3>
          <p className="text-3xl font-bold">
            $12,450
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <FaChartLine className="text-3xl text-blue-500 mb-4" />
          <h3 className="text-slate-400">
            Total Profit
          </h3>
          <p className="text-3xl font-bold text-green-500">
            +$2,140
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <FaExchangeAlt className="text-3xl text-yellow-500 mb-4" />
          <h3 className="text-slate-400">
            Open Trades
          </h3>
          <p className="text-3xl font-bold">
            12
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <FaTrophy className="text-3xl text-purple-500 mb-4" />
          <h3 className="text-slate-400">
            Win Rate
          </h3>
          <p className="text-3xl font-bold">
            84%
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div
        className="
          bg-slate-900
          rounded-2xl
          p-8
          border
          border-slate-800
          mb-10
        "
      >
        <h2 className="text-2xl font-bold mb-4">
          Portfolio Performance
        </h2>

        <div
          className="
            h-[300px]
            rounded-xl
            bg-slate-800
            flex
            items-center
            justify-center
            text-slate-500
          "
        >
          Chart Coming Soon
        </div>
      </div>

      {/* Recent Trades */}
      <div
        className="
          bg-slate-900
          rounded-2xl
          border
          border-slate-800
          overflow-hidden
        "
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold">
            Recent Trades
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left p-4">
                Asset
              </th>
              <th className="text-left p-4">
                Type
              </th>
              <th className="text-left p-4">
                Amount
              </th>
              <th className="text-left p-4">
                Profit
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-slate-800">
              <td className="p-4">
                BTC/USD
              </td>
              <td className="p-4 text-green-500">
                BUY
              </td>
              <td className="p-4">
                $500
              </td>
              <td className="p-4 text-green-500">
                +$85
              </td>
            </tr>

            <tr className="border-t border-slate-800">
              <td className="p-4">
                Volatility 75
              </td>
              <td className="p-4 text-red-500">
                SELL
              </td>
              <td className="p-4">
                $250
              </td>
              <td className="p-4 text-green-500">
                +$40
              </td>
            </tr>

            <tr className="border-t border-slate-800">
              <td className="p-4">
                ETH/USD
              </td>
              <td className="p-4 text-green-500">
                BUY
              </td>
              <td className="p-4">
                $1000
              </td>
              <td className="p-4 text-green-500">
                +$210
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;