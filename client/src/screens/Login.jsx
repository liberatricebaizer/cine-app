
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import Layout from "../layout/Layout";
import { AuthCard, Input } from "../components/UsedInputs";

const Login = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // TODO: call your real sign-in here
  };

  return (
    <Layout>
      <AuthCard
        title="Welcome back"
        subtitle="Sign in to continue watching."
        footer={
          <>
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-[#f4b942] hover:underline">Sign up</Link>
          </>
        }
      >
        <form onSubmit={submit} className="mt-8 flex flex-col gap-5">
          <Input label="Email address" type="email" name="email" autoComplete="email" placeholder="cineverse@gmail.com" />
          <Input label="Password" type="password" name="password" autoComplete="current-password" placeholder="Your password" />
          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#f4b942] px-6 py-4 font-bold text-black transition hover:bg-white"
          >
            <FiLogIn /> Sign in
          </button>
        </form>
      </AuthCard>
    </Layout>
  );
};

export default Login;