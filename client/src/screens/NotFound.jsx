import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex-colo w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6 gap-8">
      {/* <img src="/images/404.svg" alt="notfound" className="w-full h-94 object-contain" /> */}
      <h1 className="lg:text-4xl font-bold">Page Not Found</h1>
      <p className="font-medium text-border italic leading-6">
        The page you are looking for doesn't exist. Try again you may have
        mistyped the Url.
      </p>
      <Link
        to="/"
        className="bg-dry text-white font-medium py-3 px-4 rounded-md border border-gray-800 hover:text-groon "
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
