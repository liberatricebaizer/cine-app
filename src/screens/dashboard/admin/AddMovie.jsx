import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { Input, Message, Select } from "../../../components/UsedInputs";
import Update from "../../../components/Update";
import { categoryData } from "../../../data/CategoriesData";
import { UsersData } from "../../../data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaUpload } from "react-icons/fa";
import CastsModal from "../../../components/Modals/CastsModal";

const AddMovie = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);
  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);
  return (
    <SideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      />
      <div className="flex flex-col gap-6 ">
        <h2 className="text-xl font-bold">Create Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="happier"
            type="text"
            bg={true}
          />
          <Input label="Hours" placeholder="1h 45min" bg={true} />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input
            label="Year of Release"
            placeholder="2023"
            type="number"
            bg={true}
          />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="flex flex-col  gap-2">
            <p className="text-bold font-semibold text-sm">
              Image without Title
            </p>
            <Update />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/1a.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-bold font-semibold text-sm">Image with Title</p>
            <Update />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src="/images/2a.jpg"
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
        <Message label="Movie description" placeholder="Make is short" />
        <div className="text-sm w-full">
          <Select label="Movie Category" options={categoryData} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-bold font-semibold text-sm">Movie Video</label>
          <Update />
        </div>
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 bg-main border border-border text-white rounded"
          >
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {UsersData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
              >
                <img
                  src={`/images/${user?.image ? user.image : "user.png"}`}
                  alt={user.fullName}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <p>{user.fullName}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 bg-dry flex-colo border border-border text-groon rounded">
                    <MdDelete />
                  </button>{" "}
                  <button
                    onClick={() => {
                      setCast(user);
                      setModalOpen(true);
                    }}
                    className="w-6 h-6 bg-dry flex-colo border border-border text-white rounded"
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className=" font-medium bg-groon transitions hover:bg-dry border border-groon text-white py-4 rounded w-full flex-rows gap-6">
          <FaUpload /> Publish Movie
        </button>
      </div>
    </SideBar>
  );
};

export default AddMovie;
