const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              VTRADES
            </h2>

            <p className="text-gray-400 mt-4">
              Professional trading and investment platform.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Plans</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Support
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500">
          © 2026 VTRADES. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;