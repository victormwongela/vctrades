import {
  FaShieldAlt,
  FaChartLine,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={30} />,
    title: "Secure Platform",
    description:
      "Bank-level encryption and account protection.",
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Expert Signals",
    description:
      "Accurate trading insights from professionals.",
  },
  {
    icon: <FaBolt size={30} />,
    title: "Fast Withdrawals",
    description:
      "Quick and reliable payout processing.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="
                bg-slate-800
                p-8
                rounded-3xl
              "
            >
              <div className="text-blue-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;