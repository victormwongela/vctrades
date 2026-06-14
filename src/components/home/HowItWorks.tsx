const steps = [
  "Create Account",
  "Choose Investment Plan",
  "Fund Your Account",
  "Earn Profits",
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={step}
              className="
                bg-slate-900
                rounded-3xl
                p-8
                text-center
              "
            >
              <div className="
                w-16 h-16
                mx-auto
                rounded-full
                bg-blue-600
                flex items-center
                justify-center
                text-2xl
                font-bold
              ">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;