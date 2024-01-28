import React from "react";
import Layout from "../layout/Layout";
import Head from "../components/Head";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const Contactus = () => {
  const ContactData = [
    {
      id: 1,
      title: "Email Us",
      info: " Collaboratively grow backend concepts suitable for cross-platform models.",
      icon: FiMail,
      contact: "liberatricebaizer@gmail.com",
    },
    {
      id: 2,
      title: "Call Us",
      info: " Effectively utilize ideal arrangements to enhance intuitive bandwidth.",
      icon: FiPhoneCall,
      contact: "+ 257 67 157 670",
    },
    {
      id: 3,
      title: "Location",
      info: " Bujumbura, Burundi, Kamenge, Mirango1, Street No.8",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout>
      <div className="min-height-screen container max-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid md:grid-cols-2 gap-6 lg:my-20 my-10  lg:grid-cols-3 xl:gap-8">
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="flex-colo p-7 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-groon text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-sm text-text leading-7">
                <a href={`mailto:${item.contact}`} className="text-cyan-300">
                  {item.contact}
                </a>
                {""}
                {item.info}
              </p>
            </div>
          ))}
        </div>
        <form className="md:w-3/4  sm:w-full m-auto sm:p-6 md:p-8 text-text mb-20 h-[32rem] ">
          <div className=" mb-3">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="w-full border-none outline-none rounded-sm bg-dry p-2"
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="name">E-Mail:</label>
            <input
              type="text"
              className="w-full border-none outline-none rounded-sm bg-dry p-2"
            />
          </div>
          <div className=" mb-3">
            <label htmlFor="name">Subject:</label>
            <input
              type="text"
              className="w-full border-none outline-none rounded-sm bg-dry p-2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Message:</label>

            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              className="w-full border-none outline-none rounded-sm bg-dry p-2"
            />
          </div>
          <button className="flex text-sm justify-center bg-subMain float-right py-2 px-4 rounded-md">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contactus;
