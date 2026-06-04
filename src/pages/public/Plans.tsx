const plans = [
  {
    name: "Starter",
    price: "$100",
    roi: "10%",
  },
  {
    name: "Professional",
    price: "$500",
    roi: "25%",
  },
  {
    name: "Elite",
    price: "$1000",
    roi: "40%",
  },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-6xl font-bold text-center mb-4">
          Investment Plans
        </h1>

        <p className="text-slate-400 text-center mb-16">
          Select the perfect trading package.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="
                bg-slate-900
                rounded-3xl
                p-8
                border
                border-slate-800
              "
            >
              <h2 className="text-3xl font-bold">
                {plan.name}
              </h2>

              <p className="text-5xl font-bold text-blue-500 mt-6">
                {plan.price}
              </p>

              <p className="text-slate-400 mt-4">
                ROI: {plan.roi}
              </p>

              <button
                className="
                  w-full
                  mt-8
                  bg-blue-600
                  py-4
                  rounded-xl
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