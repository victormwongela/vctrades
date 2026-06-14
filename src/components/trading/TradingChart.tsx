import {
  useEffect,
  useRef,
} from "react";

import {
  useTrading,
} from "../../context/TradingContext";

const TradingChart = () => {
  const {
    selectedAsset,
  } = useTrading();

  const chartRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.innerHTML = "";

    const script =
      document.createElement("script");

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type =
      "text/javascript";

    script.async = true;

    script.innerHTML =
      JSON.stringify({
        autosize: true,
        symbol:
          "BINANCE:BTCUSDT",
        interval: "1",
        timezone:
          "Africa/Nairobi",
        theme: "dark",
        style: "1",
        locale: "en",
        allow_symbol_change: true,
        hide_top_toolbar: false,
        hide_legend: false,
        save_image: true,
        studies: [
          "RSI@tv-basicstudies",
          "MACD@tv-basicstudies",
        ],
      });

    chartRef.current.appendChild(
      script
    );
  }, [selectedAsset]);

  return (
    <div className="
      flex-1
      flex
      flex-col
      bg-slate-950
    ">

      {/* Asset Bar */}

      <div className="
        h-14
        border-b
        border-slate-800
        flex
        items-center
        justify-between
        px-6
      ">

        <div>

          <h2 className="
            text-xl
            font-bold
          ">
            {selectedAsset}
          </h2>

          <p className="
            text-xs
            text-slate-500
          ">
            Synthetic Index
          </p>

        </div>

        <div className="
          flex
          gap-3
        ">

          <button className="
            px-4
            py-2
            rounded-lg
            bg-slate-800
          ">
            1m
          </button>

          <button className="
            px-4
            py-2
            rounded-lg
            bg-slate-800
          ">
            5m
          </button>

          <button className="
            px-4
            py-2
            rounded-lg
            bg-slate-800
          ">
            15m
          </button>

          <button className="
            px-4
            py-2
            rounded-lg
            bg-slate-800
          ">
            1h
          </button>

        </div>

      </div>

      {/* Chart */}

      <div
        ref={chartRef}
        className="
          flex-1
          min-h-[600px]
        "
      />

    </div>
  );
};

export default TradingChart;