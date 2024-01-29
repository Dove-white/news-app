import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="p-5 xl:px-[10%] flex justify-end w-full">
        <ul className="flex gap-4">
          <li>
            <Link
              className="font-medium text-black hover:underline cursor-pointer"
              to="/"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-black hover:underline cursor-pointer"
              to="/add-news"
            >
              Add News
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
