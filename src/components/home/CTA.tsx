import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="
          bg-gradient-to-r
          from-blue-700
          to-purple-700
          rounded-3xl
          p-16
          text-center
        ">

          <h2 className="text-5xl font-bold">
            Start Trading Today
          </h2>

          <p className="mt-6 text-xl">
            Join thousands of investors already growing their wealth.
          </p>

          <Link
            to="/register"
            className="
              inline-block
              mt-8
              bg-white
              text-black
              px-8
              py-4
              rounded-xl
              font-bold
            "
          >
            Create Account
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;