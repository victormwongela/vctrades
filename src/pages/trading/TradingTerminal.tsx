import TradingHeader from "../../components/trading/TradingHeader";
import TradingSidebar from "../../components/trading/TradingSidebar";
import TradingChart from "../../components/trading/TradingChart";
import TradePanel from "../../components/trading/TradePanel";
import OpenPositions from "../../components/trading/OpenPosition";

const TradingTerminal = () => {
  return (
    <div className="h-screen bg-slate-950 text-white">

      <TradingHeader />

      <div className="flex h-[calc(100vh-70px)]">

        <TradingSidebar />

        <div className="flex-1 flex flex-col">

          <div className="flex-1">
            <TradingChart />
          </div>

          <OpenPositions />

        </div>

        <TradePanel />

      </div>

    </div>
  );
};

export default TradingTerminal;