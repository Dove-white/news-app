import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const className = "font-medium text-black hover:underline cursor-pointer";
  return (
    <>
      <nav className="p-5 xl:px-[10%] flex justify-end w-full">
        <ul className="flex gap-4">
          <li>
            <Link className={className} to="/">Views</Link>
          </li>
          <li>
          <Link className={className} to="/addNews">Add News</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
