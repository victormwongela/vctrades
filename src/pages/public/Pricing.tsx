import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$100",
    roi: "10%",
    duration: "7 Days",
    features: [
      "Basic Trading Signals",
      "Email Support",
      "Daily Market Updates",
      "1 Active Investment",
    ],
  },
  {
    name: "Professional",
    price: "$500",
    roi: "25%",
    duration: "14 Days",
    popular: true,
    features: [
      "Premium Signals",
      "Portfolio Management",
      "Priority Support",
      "Copy Trading Access",
    ],
  },
  {
    name: "Elite",
    price: "$1000",
    roi: "40%",
    duration: "30 Days",
    features: [
      "VIP Signals",
      "Dedicated Manager",
      "Fast Withdrawals",
      "Unlimited Investments",
    ],
  },
];

const Plans = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold">
            Investment Plans
          </h1>

          <p className="mt-5 text-slate-400 text-lg">
            Choose the investment package that suits your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                rounded-3xl
                p-8
                border
                ${
                  plan.popular
                    ? "border-blue-500 bg-slate-900 scale-105"
                    : "border-slate-800 bg-slate-900"
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <h2 className="text-3xl font-bold">
                {plan.name}
              </h2>

              <div className="mt-6">
                <span className="text-5xl font-bold text-blue-500">
                  {plan.price}
                </span>
              </div>

              <p className="mt-4 text-slate-400">
                ROI: {plan.roi}
              </p>

              <p className="text-slate-400">
                Duration: {plan.duration}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FaCheck className="text-green-500" />
                    {feature}
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

    </div>
  );
};

export default Plans;