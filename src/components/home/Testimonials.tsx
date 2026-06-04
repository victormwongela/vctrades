const Testimonials = () => {
  return (
    <section className="bg-slate-900 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Traders Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            Great platform and signals.
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            My withdrawals are always fast.
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            Easy to use and beginner friendly.
          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;