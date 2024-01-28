import React from "react";
import SideBar from "./SideBar";
import Update from "../../components/Update";
import { Input } from "../../components/UsedInputs";

const Profile = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6 ">
        <h2 className="text-xl font-bold"> Profile</h2>
        <Update />
        <Input
          label="Your FullName"
          placeholder="Trice Baizer"
          type="text"
          bg={true}
        />
        <Input
          label="Email Address  "
          placeholder="cineverse@gmail.com"
          type="email"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
          <button className=" font-medium bg-groon transitions hover:bg-main border border-groon text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>{" "}
          <button className=" font-medium bg-main transitions hover:bg-groon border border-groon text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
};

export default Profile;
