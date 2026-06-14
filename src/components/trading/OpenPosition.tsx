const OpenPositions = () => {
  return (
    <div className="h-[220px] border-t border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold mb-4">
        Open Positions
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-slate-400">
            <th>Asset</th>
            <th>Type</th>
            <th>Stake</th>
            <th>P/L</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>BTC/USD</td>
            <td>BUY</td>
            <td>$100</td>
            <td className="text-green-500">
              +$25
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  );
};

export default OpenPositions;