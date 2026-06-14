import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              text-blue-400
            ">
              <FaChartLine />
              Trusted By 50,000+ Investors
            </div>

            <h1 className="
              mt-8
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              text-white
            ">
              Trade Smarter.
              <br />
              Invest Better.
              <br />
              Grow Faster.
            </h1>

            <p className="
              mt-6
              text-lg
              md:text-xl
              text-slate-400
              max-w-xl
            ">
              Access professional trading tools,
              premium signals, copy trading and
              investment plans designed for
              serious investors.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/trade-selection"
                className="
                  flex
                  items-center
                  gap-3
                  bg-blue-600
                  hover:bg-blue-700
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Start Trading
                <FaArrowRight />
              </Link>

              <Link
                to="/plans"
                className="
                  border
                  border-slate-700
                  hover:border-blue-500
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                View Plans
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-white">
                  50K+
                </h3>

                <p className="text-slate-500 mt-2">
                  Investors
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  $25M+
                </h3>

                <p className="text-slate-500 mt-2">
                  Managed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  24/7
                </h3>

                <p className="text-slate-500 mt-2">
                  Support
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="
              bg-slate-900
              border
              border-slate-800
              rounded-3xl
              p-8
              shadow-2xl
            ">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-slate-400">
                    Portfolio Value
                  </p>

                  <h2 className="
                    text-5xl
                    font-bold
                    mt-2
                    text-white
                  ">
                    $48,520
                  </h2>
                </div>

                <span className="
                  bg-green-500/20
                  text-green-500
                  px-4
                  py-2
                  rounded-full
                ">
                  +12.5%
                </span>

              </div>

              <div className="mt-10 space-y-5">

                <div className="
                  flex
                  justify-between
                  p-4
                  rounded-xl
                  bg-slate-800
                ">
                  <span>BTC/USD</span>
                  <span className="text-green-500">
                    +4.2%
                  </span>
                </div>

                <div className="
                  flex
                  justify-between
                  p-4
                  rounded-xl
                  bg-slate-800
                ">
                  <span>ETH/USD</span>
                  <span className="text-green-500">
                    +3.1%
                  </span>
                </div>

                <div className="
                  flex
                  justify-between
                  p-4
                  rounded-xl
                  bg-slate-800
                ">
                  <span>EUR/USD</span>
                  <span className="text-green-500">
                    +1.2%
                  </span>
                </div>

              </div>

              <button
                className="
                  w-full
                  mt-8
                  bg-blue-600
                  hover:bg-blue-700
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                View Dashboard
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;