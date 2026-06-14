import { useNavigate } from "react-router-dom";

const TradeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="max-w-5xl w-full">

        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Select Trading Account
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div
            onClick={() => navigate("/trade/demo")}
            className="
              bg-slate-900
              p-10
              rounded-3xl
              cursor-pointer
              border border-slate-800
              hover:border-blue-500
            "
          >
            <h2 className="text-4xl font-bold text-blue-500">
              Demo Account
            </h2>

            <p className="mt-4 text-slate-400">
              Practice with virtual funds.
            </p>

            <div className="mt-8 text-5xl">
              $10,000
            </div>
          </div>

          <div
            onClick={() => navigate("/trade/real")}
            className="
              bg-slate-900
              p-10
              rounded-3xl
              cursor-pointer
              border border-slate-800
              hover:border-green-500
            "
          >
            <h2 className="text-4xl font-bold text-green-500">
              Real Account
            </h2>

            <p className="mt-4 text-slate-400">
              Trade with real funds.
            </p>

            <div className="mt-8 text-5xl">
              Live Markets
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TradeSelection;