'use client'
import React, { useState } from "react";
import InputField from "@/components/InputField";

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ identifier: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <InputField
          type="text"
          value={form.identifier}
          onChange={handleChange}
          placeholder="Enter your email or phone"
        />
        <InputField
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;