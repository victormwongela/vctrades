const ActiveBots = () => {
  return (
    <div
      className="
        bg-slate-900
        rounded-2xl
        border
        border-slate-800
        p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Active Bots
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-slate-400">
            <th className="text-left py-3">
              Bot
            </th>

            <th className="text-left py-3">
              Status
            </th>

            <th className="text-left py-3">
              Profit
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="py-3">
              Volatility Bot
            </td>

            <td className="py-3 text-green-500">
              Running
            </td>

            <td className="py-3 text-green-500">
              +$120
            </td>
          </tr>

          <tr>
            <td className="py-3">
              Scalper Bot
            </td>

            <td className="py-3 text-green-500">
              Running
            </td>

            <td className="py-3 text-green-500">
              +$95
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActiveBots;