import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Head = "text-xs text-left text-dryGray font-semibold px-6 py-2 uppercase";
const Text =
  "text-sm text-left leading-6 whitespace-nowrap px-6 py-2 uppercase";
const Rows = (data, i, users, OnEditFunction) => {
  return (
    <tr key={i}>
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={`/images/${data.image ? data.image : "user1.jpg"}`}
                alt={data?.fullName}
              />
            </div>
          </td>
          <td className={`${Text} `}>{data._id ? data._id : "3R75TB"}</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "12,jan 2024"}
          </td>
          <td className={`${Text}`}>{data.fullName}</td>
          <td className={`${Text}`}>{data.email}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="bg-groon text-white rounded flex-colo w-6 h-6">
              <MdDelete />
            </button>
          </td>
        </>
      ) : (
        <>
          {" "}
          <td className={`${Text} font-bold`}>"3R75TB"</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "12,jan 2024"}
          </td>
          <td className={`${Text}`}>{data.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            {" "}
            <button
              onClick={() => OnEditFunction(data)}
              className="bg-dry flex-rows gap-2 border border-border w-16 h-8 text-white  rounded flex-colo    "
            >
              Edit <FaEdit className="text-green-500" />
            </button>{" "}
            <button className="bg-groon text-white rounded flex-colo w-6 h-6">
              <MdDelete />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};
function Table2({ data, users, OnEditFunction }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative  w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>{" "}
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  FUll Name
                </th>{" "}
                <th scope="col" className={`${Head}`}>
                  Email
                </th>{" "}
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>{" "}
              </>
            )}
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>{" "}
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => Rows(data, i, users, OnEditFunction))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
