const TradePanel = () => {
  return (
    <aside className="
      w-[350px]
      bg-slate-900
      border-l
      border-slate-800
      p-6
    ">

      <h2 className="
        text-3xl
        font-bold
        mb-6
      ">
        Trade
      </h2>

      <div className="space-y-4">

        <select
          className="
            w-full
            p-4
            bg-slate-800
            rounded-xl
          "
        >
          <option>
            Rise/Fall
          </option>

          <option>
            Higher/Lower
          </option>

          <option>
            Touch/No Touch
          </option>
        </select>

        <input
          type="number"
          placeholder="Stake"
          className="
            w-full
            p-4
            bg-slate-800
            rounded-xl
          "
        />

        <input
          type="number"
          placeholder="Take Profit"
          className="
            w-full
            p-4
            bg-slate-800
            rounded-xl
          "
        />

        <input
          type="number"
          placeholder="Stop Loss"
          className="
            w-full
            p-4
            bg-slate-800
            rounded-xl
          "
        />

        <button
          className="
            w-full
            py-4
            bg-green-600
            rounded-xl
            font-bold
          "
        >
          BUY
        </button>

        <button
          className="
            w-full
            py-4
            bg-red-600
            rounded-xl
            font-bold
          "
        >
          SELL
        </button>

      </div>

    </aside>
  );
};

export default TradePanel;