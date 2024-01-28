import React from "react";
import { Input } from "../components/UsedInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import Layout from "../layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 p-14 bg-dry rounded-lg  md:w-3/5 flex-colo ">
          {/* <img src="" alt="" /> */}
          <h1 className="text-groon text-2xl">Cineverse Register an Account</h1>
          <Input
            label="Your FullName"
            placeholder="Trice Baizer"
            type="text"
            bg={true}
          />

          <Input
            label="Email Address"
            placeholder="cineverse@gmail.com"
            type="email"
            bg={true}
          />
          <Input
            label="Password"
            placeholder="*******"
            type="password "
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-groon transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign Up
          </Link>
          <p className="text-center text-border">
            Already have an account?{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
