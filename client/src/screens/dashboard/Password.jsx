import React, { useState } from "react";
import SideBar from "./SideBar";

const Password = () => {
  const [values, setValues] = useState({ current: "", next: "", confirm: "" });
  const [message, setMessage] = useState("");
  const submit = (event) => { event.preventDefault(); if (!values.current || values.next.length < 6) return setMessage("Enter your current password and a new password of at least 6 characters."); if (values.next !== values.confirm) return setMessage("New passwords do not match."); setMessage("Password changed successfully."); setValues({ current: "", next: "", confirm: "" }); };
  return <SideBar><form onSubmit={submit} className="flex flex-col gap-6"><h2 className="text-xl font-bold">Change Password</h2>{[["Previous Password", "current"], ["New Password", "next"], ["Confirm Password", "confirm"]].map(([label, key]) => <label key={key} className="text-sm text-border font-semibold">{label}<input value={values[key]} onChange={(e) => setValues({ ...values, [key]: e.target.value })} type="password" className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main" required /></label>)}{message && <p className={message.includes("successfully") ? "text-groon" : "text-red-400"}>{message}</p>}<div className="flex justify-end items-center my-4"><button type="submit" className="font-medium bg-main transitions hover:bg-groon border border-groon text-white py-3 px-6 rounded w-full sm:w-auto">Change Password</button></div></form></SideBar>;
};
export default Password;
