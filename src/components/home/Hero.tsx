const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20" />

      <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="max-w-3xl">

          <span className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-600 text-blue-400">
            Smart Trading Platform
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
            Trade Smarter.
            <br />
            Earn Faster.
          </h1>

          <p className="text-xl text-slate-400 mt-6">
            Professional trading signals,
            investment plans, portfolio management
            and copy trading all in one platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
              Start Trading
            </button>

            <button className="border border-slate-700 hover:border-slate-500 px-8 py-4 rounded-xl">
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;