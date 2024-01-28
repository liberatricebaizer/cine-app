import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import { FaPlusCircle } from "react-icons/fa";
import Update from "../Update";

const CastsModal = ({ modalOpen, setModalOpen, cast }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border  rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10  h-full bg-main text-white">
        <h2 className="text-3xl font-bold">
          {cast ? "Update Cast" : "Create Cast"}
        </h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Cast Name "
            placeholder={cast ? cast.fullName : "Trice"}
            type="text"
            bg={false}
          />
          <div className="flex flex-col  gap-2">
            <p className="text-bold font-semibold text-sm"> Cast Image</p>
            <Update />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src={`/images/${cast ? cast.image : "user.png"}`}
                alt={cast?.fullName}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <button
            onClick={() => setModalOpen(false)}
            className="w-full flex-rows gap-2  py-3 transitions hover:bg-transparent border font-bold border-groon rounded bg-groon text-white"
          >
            {cast ? (
              "Update"
            ) : (
              <>
                <FaPlusCircle /> Add
              </>
            )}
          </button>
        </form>
      </div>
    </MainModal>
  );
};

export default CastsModal;
