import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent successfully");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="max-w-3xl mx-auto py-20">

      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full p-4 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="w-full p-4 rounded"
        />

        <input
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) =>
            setForm({
              ...form,
              subject: e.target.value,
            })
          }
          className="w-full p-4 rounded"
        />

        <textarea
          rows={5}
          placeholder="Message"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className="w-full p-4 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 px-8 py-3 rounded"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}