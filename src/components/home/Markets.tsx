const markets = [
  {
    pair: "BTC/USD",
    price: "$105,420",
    change: "+3.8%",
  },
  {
    pair: "ETH/USD",
    price: "$5,420",
    change: "+2.1%",
  },
  {
    pair: "EUR/USD",
    price: "1.082",
    change: "+0.4%",
  },
];

const Markets = () => {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Live Markets
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {markets.map((market) => (
            <div
              key={market.pair}
              className="bg-slate-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">
                {market.pair}
              </h3>

              <p className="text-4xl font-bold mt-4">
                {market.price}
              </p>

              <p className="text-green-500 mt-3">
                {market.change}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Markets;