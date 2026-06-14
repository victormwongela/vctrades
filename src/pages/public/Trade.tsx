import TradingChart from "../../components/trading/TradingChart";

const Trade = () => {
  return (
    <div className="min-h-screen bg-slate-950">

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-white text-4xl font-bold mb-6">
          Live Trading
        </h1>

        <TradingChart />

      </div>

    </div>
  );
};

export default Trade;