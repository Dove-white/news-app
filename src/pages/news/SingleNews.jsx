import React from "react";
import Button from "../../component/ui/Button";

const SingleNews = ({ title, content, imageUrl, deleteNews }) => {
  return (
    <>
      <article className="w-[300px] flex flex-col gap-2 border-2 p-3 rounded-2xl m-5 border-t-0">
        <img
          className="rounded-2xl h-[140px] object-contain"
          src={imageUrl}
          alt=""
        />
        <h4 className="font-bold md:h-[30px] text-base">{title}</h4>
        <p className="h-[120px] overflow-hidden">{content}</p>
        <div className="flex justify-between">
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="Edit"
          />
          <Button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            name="Delate"
            onClick={() => deleteNews()}
          />
        </div>
      </article>
    </>
  );
};

export default SingleNews;
