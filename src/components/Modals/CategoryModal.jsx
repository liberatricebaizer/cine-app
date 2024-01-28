import React from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import { FaPlusCircle } from "react-icons/fa";

const CategoryModal = ({ modalOpen, setModalOpen, category }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border  rounded-2xl md:w-3/5 lg:w-2/5 w-full align-middle p-10  h-full bg-main text-white">
        <h2 className="text-3xl font-bold">{category ? "Update" : "Create"}</h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Category Name "
            placeholder={category ? category.title : "Action..."}
            type="text"
            bg={false}
          />
          <button
            onClick={() => setModalOpen(false)}
            className="w-full flex-rows gap-2  py-3 transitions hover:bg-transparent border font-bold border-groon rounded bg-groon text-white"
          >
            {category ? (
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

export default CategoryModal;
