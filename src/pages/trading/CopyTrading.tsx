import { useState } from "react";

export default function CopyTrading() {
  const [token, setToken] = useState("");
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    if (!token.trim()) {
      alert("Please enter a valid token");
      return;
    }

    // API validation goes here
    setConnected(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl p-8 border border-slate-800">
        <h1 className="text-3xl font-bold text-white mb-2">
          Copy Trading
        </h1>

        <p className="text-slate-400 mb-6">
          Enter your copy trading token to connect.
        </p>

        {!connected ? (
          <>
            <label className="block text-sm text-slate-300 mb-2">
              Copy Trading Token
            </label>

            <input
              type="text"
              placeholder="Enter token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
            />

            <button
              onClick={handleConnect}
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg"
            >
              Connect
            </button>
          </>
        ) : (
          <div className="text-center">
            <div className="text-green-400 text-xl mb-4">
              ✓ Connected Successfully
            </div>

            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="font-bold text-white">
                Dollar Printer Strategy
              </h3>

              <p className="text-slate-400 mt-2">
                Copy trading is now active on your account.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}