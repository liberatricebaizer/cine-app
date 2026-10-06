import React, { useState } from "react";
import SideBar from "../SideBar";
import Table2 from "../../../components/Table2";
import { UsersData } from "../../../data/MovieData";

const Users = () => {
  const [users, setUsers] = useState(UsersData);
  return <SideBar><div className="flex flex-col gap-6"><div className="flex-btn gap-2"><h2 className="text-xl font-bold">Users</h2><button onClick={() => setUsers([])} className="bg-main font-medium transitions hover:bg-groon border border-groon text-white py-3 px-6 rounded">Delete All</button></div>{users.length ? <Table2 data={users} users onDelete={(user) => setUsers((current) => current.filter((item) => item !== user))} /> : <p className="text-border py-10 text-center">No users found.</p>}</div></SideBar>;
};
export default Users;
