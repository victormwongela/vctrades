const BotStats = () => {
  return (
    <div
      className="
        grid
        md:grid-cols-4
        gap-6
        mb-10
      "
    >
      <div className="bg-slate-900 p-6 rounded-2xl">
        <h3 className="text-slate-400">
          Active Bots
        </h3>

        <p className="text-4xl font-bold">
          12
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <h3 className="text-slate-400">
          Total Profit
        </h3>

        <p className="text-4xl font-bold text-green-500">
          $4,250
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <h3 className="text-slate-400">
          Win Rate
        </h3>

        <p className="text-4xl font-bold">
          87%
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <h3 className="text-slate-400">
          Running Bots
        </h3>

        <p className="text-4xl font-bold">
          5
        </p>
      </div>
    </div>
  );
};

export default BotStats;