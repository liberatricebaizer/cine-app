import React from "react";
import Layout from "../layout/Layout";
import { Input } from "../components/UsedInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 p-14 bg-dry rounded-lg  md:w-3/5 flex-colo ">
          {/* <img src="" alt="" /> */}
          <h1 className="text-groon text-2xl">Cineverse User login</h1>

          <Input
            label="Email Address  "
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
            <FiLogIn /> Sign In
          </Link>
          <p className="text-center text-border">
            Don't have an account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
