const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Traders" },
    { value: "$25M+", label: "Assets Managed" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center bg-slate-800 rounded-2xl p-8"
            >
              <h2 className="text-4xl font-bold text-blue-500">
                {item.value}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;