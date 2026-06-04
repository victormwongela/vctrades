const plans = [
  {
    name: "Starter",
    price: "$100",
    roi: "10%",
    features: [
      "Basic Signals",
      "24/7 Support",
      "1 Week Duration",
    ],
  },
  {
    name: "Professional",
    price: "$500",
    roi: "25%",
    features: [
      "Premium Signals",
      "Portfolio Tracking",
      "Priority Support",
    ],
  },
  {
    name: "Elite",
    price: "$1000",
    roi: "40%",
    features: [
      "VIP Signals",
      "Account Manager",
      "Fast Withdrawals",
    ],
  },
];

const TradingPlans = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Investment Plans
          </h2>

          <p className="text-slate-400 mt-4">
            Choose a plan that matches your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="
                bg-slate-900
                border border-slate-800
                rounded-3xl
                p-8
                hover:border-blue-500
                transition-all
                duration-300
              "
            >
              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="text-5xl font-bold text-blue-500 mt-6">
                {plan.price}
              </p>

              <p className="text-slate-400 mt-3">
                Expected ROI: {plan.roi}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-slate-300"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <button
                className="
                  w-full
                  mt-10
                  bg-blue-600
                  hover:bg-blue-700
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                Invest Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TradingPlans;