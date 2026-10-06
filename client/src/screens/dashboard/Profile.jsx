import React, { useState } from "react";
import SideBar from "./SideBar";
import Update from "../../components/Update";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "Trice Baizer", email: "cineverse@gmail.com" });
  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const submit = (event) => { event.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2500); };
  return <SideBar><form onSubmit={submit} className="flex flex-col gap-6"><h2 className="text-xl font-bold">Profile</h2><Update /><label className="text-sm text-border font-semibold">Your Full Name<input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main" required /></label><label className="text-sm text-border font-semibold">Email Address<input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} type="email" className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main" required /></label>{saved && <p className="text-groon">Profile updated successfully.</p>}{deleted ? <p className="text-red-400">Account deletion requested.</p> : <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4"><button type="button" onClick={() => setDeleted(true)} className="font-medium bg-groon transitions hover:bg-main border border-groon text-white py-3 px-6 rounded w-full sm:w-auto">Delete Account</button><button type="submit" className="font-medium bg-main transitions hover:bg-groon border border-groon text-white py-3 px-6 rounded w-full sm:w-auto">Update Profile</button></div>}</form></SideBar>;
};
export default Profile;
