import React from "react";
import SingleNews from "./SingleNews";

const News = () => {
  return (
    <>
      <main>
        <h2 className="text-3xl font-bold text-center">News</h2>
        <div className="flex flex-wrap justify-between">
          <SingleNews />
          <SingleNews />
          <SingleNews />
          <SingleNews />
        </div>
      </main>
    </>
  );
};

export default News;
