import {
  useTrading,
} from "../../context/TradingContext";

const TradingSidebar = () => {
  const {
    selectedAsset,
    setSelectedAsset,
  } = useTrading();

  const assets = [
    "Volatility 10",
    "Volatility 10 (1s)",

    "Volatility 25",
    "Volatility 25 (1s)",

    "Volatility 50",
    "Volatility 50 (1s)",

    "Volatility 75",
    "Volatility 75 (1s)",

    "Volatility 100",
    "Volatility 100 (1s)",

    "Crash 300",
    "Crash 500",
    "Crash 600",
    "Crash 900",
    "Crash 1000",

    "Boom 300",
    "Boom 500",
    "Boom 600",
    "Boom 900",
    "Boom 1000",

    "Step Index",

    "Jump 10",
    "Jump 25",
    "Jump 50",
    "Jump 75",
    "Jump 100",

    "BTC/USD",
    "ETH/USD",
    "EUR/USD",
    "GBP/USD",
    "USD/JPY",
    "XAU/USD",
  ];

  return (
    <aside
      className="
        w-[280px]
        bg-slate-900
        border-r
        border-slate-800
        overflow-y-auto
      "
    >

      <div className="p-4">

        <input
          type="text"
          placeholder="Search Asset"
          className="
            w-full
            p-3
            rounded-xl
            bg-slate-800
            text-white
            outline-none
          "
        />

      </div>

      <div className="px-4 pb-2 text-xs uppercase text-slate-500">
        Markets
      </div>

      {assets.map((asset) => (
        <div
          key={asset}
          onClick={() =>
            setSelectedAsset(asset)
          }
          className={`
            px-4
            py-4
            cursor-pointer
            border-b
            border-slate-800
            transition-all

            ${
              selectedAsset === asset
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }
          `}
        >
          {asset}
        </div>
      ))}

    </aside>
  );
};

export default TradingSidebar;