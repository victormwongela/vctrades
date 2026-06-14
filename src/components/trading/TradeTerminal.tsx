import TradingHeader from "./TradingHeader";
import TradingSidebar from "./TradingSidebar";
import TradingChart from "./TradingChart";
import TradePanel from "./TradePanel";
import OpenPositions from "./OpenPosition";

import {
  TradingProvider,
} from "../../context/TradingContext";

const TradeTerminal = () => {
  return (
    <TradingProvider>

      <div className="
        h-screen
        bg-slate-950
        text-white
      ">

        <TradingHeader />

        <div className="
          flex
          h-[calc(100vh-70px)]
        ">

          <TradingSidebar />

          <div className="
            flex-1
            flex
            flex-col
          ">
            <TradingChart />
            <OpenPositions />
          </div>

          <TradePanel />

        </div>

      </div>

    </TradingProvider>
  );
};

export default TradeTerminal;