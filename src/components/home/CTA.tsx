import Button from "../common/Button";

const CTA = () => {
  return (
    <section className="bg-blue-600 py-24 text-white">

      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold mb-6">
          Start Trading Today
        </h2>

        <p className="mb-8">
          Join our growing community of traders.
        </p>

        <Button className="bg-white text-black hover:bg-gray-200">
          Create Account
        </Button>

      </div>

    </section>
  );
};

export default CTA;