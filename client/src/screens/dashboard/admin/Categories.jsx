import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../components/Table2";
import { categoryData } from "../../../data/CategoriesData";
import CategoryModal from "../../../components/Modals/CategoryModal";

const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState(categoryData);
  const onEdit = (item) => { setCategory(item); setModalOpen(true); };
  useEffect(() => { if (!modalOpen) setCategory(); }, [modalOpen]);
  return <SideBar><CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} category={category} /><div className="flex flex-col gap-6"><div className="flex-btn gap-2"><h2 className="text-xl font-bold">Categories</h2><button onClick={() => setModalOpen(true)} className="bg-groon font-medium transitions hover:bg-main flex-rows gap-4 border border-groon text-white py-2 px-4 rounded"><HiPlusCircle /> Create</button></div>{categories.length ? <Table2 data={categories} users={false} OnEditFunction={onEdit} onDelete={(item) => setCategories((current) => current.filter((entry) => entry !== item))} /> : <p className="text-border py-10 text-center">No categories found.</p>}</div></SideBar>;
};
export default Categories;
