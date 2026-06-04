const stats = [
  {
    value: "50K+",
    label: "Active Traders",
  },
  {
    value: "$25M+",
    label: "Assets Managed",
  },
  {
    value: "99.9%",
    label: "Success Rate",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

const MarketStats = () => {
  return (
    <section className="bg-slate-900 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-slate-800
                rounded-3xl
                p-8
                text-center
              "
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default MarketStats;