import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h1 className="text-6xl font-bold">
            Contact Us
          </h1>

          <p className="text-slate-400 mt-4">
            Our team is available 24/7.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="bg-slate-900 p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-800
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-800
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-800
                "
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-800
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  py-4
                  rounded-xl
                "
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Details */}

          <div className="space-y-6">

            <div className="bg-slate-900 p-6 rounded-3xl flex gap-4">
              <FaEnvelope
                size={25}
                className="text-blue-500"
              />
              <div>
                <h3 className="font-bold">
                  Email
                </h3>
                <p className="text-slate-400">
                  support@vtrades.com
                </p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl flex gap-4">
              <FaPhone
                size={25}
                className="text-blue-500"
              />
              <div>
                <h3 className="font-bold">
                  Phone
                </h3>
                <p className="text-slate-400">
                  +254 793818322
                </p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-3xl flex gap-4">
              <FaMapMarkerAlt
                size={25}
                className="text-blue-500"
              />
              <div>
                <h3 className="font-bold">
                  Office
                </h3>
                <p className="text-slate-400">
                  Nairobi, Kenya
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;