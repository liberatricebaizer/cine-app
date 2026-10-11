
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import Layout from "../layout/Layout";
import { AuthCard, Input } from "../components/UsedInputs";

const Register = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // TODO: call your real sign-up here
  };

  return (
    <Layout>
      <AuthCard
        title="Create your account"
        subtitle="Free to join. Save favorites and download movies."
        image="/images/3a.jpg"
        footer={
          <>
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#f4b942] hover:underline">Sign in</Link>
          </>
        }
      >
        <form onSubmit={submit} className="mt-8 flex flex-col gap-5">
          <Input label="Full name" name="name" autoComplete="name" placeholder="Trice Baizer" />
          <Input label="Email address" type="email" name="email" autoComplete="email" placeholder="cineverse@gmail.com" />
          <Input label="Password" type="password" name="password" autoComplete="new-password" minLength={8} placeholder="At least 8 characters" />
          <button
            type="submit"
            className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-[#f4b942] px-6 py-4 font-bold text-black transition hover:bg-white"
          >
            <FiUserPlus /> Create account
          </button>
        </form>
      </AuthCard>
    </Layout>
  );
};

export default Register;