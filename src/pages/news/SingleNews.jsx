import React from "react";
import NewsImage from "../../assets/img/news-image.jpg";
import Button from "../../component/Button";

const SingleNews = () => {
  return (
    <>
      <article className="w-[300px] flex flex-col gap-2 border-2 p-3 rounded-2xl m-5 border-t-0">
        <img className="rounded-2xl" src={NewsImage} alt="" />
        <h4 className="text-2xl font-bold">Title</h4>
        <p className="h-[120px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          pariatur unde aut suscipit nisi ullam!
        </p>
        <div className="flex justify-between">
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            name="Edit"
          />
          <Button
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            name="Delate"
          />
        </div>
      </article>
    </>
  );
};

export default SingleNews;
