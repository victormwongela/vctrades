import BotCard from "../../components/bots/BotCard";
import BotStats from "../../components/bots/BotStats";
import ActiveBots from "../../components/bots/ActiveBots";

const Bots = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Trading Bots
        </h1>

        <p className="text-slate-400 mt-3">
          Automate your trading with AI-powered bots.
        </p>
      </div>

      <BotStats />

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          mb-10
        "
      >
        <BotCard
          name="Volatility Bot"
          roi="32%"
          risk="Medium"
          capital="$100"
        />

        <BotCard
          name="Scalper Bot"
          roi="24%"
          risk="Low"
          capital="$50"
        />

        <BotCard
          name="Crash/Boom Bot"
          roi="41%"
          risk="High"
          capital="$200"
        />

        <BotCard
          name="Trend Bot"
          roi="28%"
          risk="Medium"
          capital="$150"
        />

        <BotCard
          name="Swing Bot"
          roi="36%"
          risk="Medium"
          capital="$250"
        />

        <BotCard
          name="AI Quantum Bot"
          roi="54%"
          risk="High"
          capital="$500"
        />
      </div>

      <ActiveBots />

    </div>
  );
};

export default Bots;