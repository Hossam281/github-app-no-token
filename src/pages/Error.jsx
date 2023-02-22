import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Error = () => {
  return (
    <div className="hero">
      <div className=" text-center hero-content">
        <div className=" max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
            404 <br></br> Page not found!
          </h1>
          <Link to='/' className="btn btn-secondry btn-lg">
            <FaHome className="mr-2"/>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
