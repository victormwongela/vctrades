import { FaRobot } from "react-icons/fa";

interface BotCardProps {
  name: string;
  roi: string;
  risk: string;
  capital: string;
}

const BotCard = ({
  name,
  roi,
  risk,
  capital,
}: BotCardProps) => {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        hover:border-blue-500
        transition
      "
    >
      <FaRobot
        size={40}
        className="text-blue-500 mb-4"
      />

      <h3 className="text-2xl font-bold mb-4">
        {name}
      </h3>

      <div className="space-y-2 text-slate-400">
        <p>ROI: {roi}</p>
        <p>Risk: {risk}</p>
        <p>Capital: {capital}</p>
      </div>

      <button
        className="
          mt-6
          w-full
          bg-blue-600
          py-3
          rounded-xl
          font-semibold
        "
      >
        Activate Bot
      </button>
    </div>
  );
};

export default BotCard;