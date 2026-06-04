import { useState } from "react";

const Register = () => {
  const [form, setForm] =
    useState({
      fullName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-slate-900 rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-white mb-8">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            name="fullName"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-800"
            onChange={handleChange}
          />

          <input
            name="username"
            placeholder="Username"
            className="w-full p-4 rounded-xl bg-slate-800"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-slate-800"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            className="w-full p-4 rounded-xl bg-slate-800"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-800"
            onChange={handleChange}
          />

          <button
            className="
              w-full
              bg-blue-600
              py-4
              rounded-xl
              font-semibold
            "
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;