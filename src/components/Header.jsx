import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-black text-white font-bold h-16">
      
        <ul className=" flex justify-around text-2xl ">
          
        <Link to="/">
        <li className="mt-4 hover:text-green-400">Home</li>
        </Link>

        <Link to="/about">
        <li className="mt-4 hover:text-green-400">About</li>
        </Link>

        <Link to="/contact">
        <li className="mt-4 hover:text-green-400">Contact</li>
        </Link>

         
        </ul>

      </div>
    </>
  );
};

export default Header;
