import React from "react";
import SingleNews from "./SingleNews";

const News = () => {
  return (
    <>
      <main>
        <h2>News</h2>
        <div className="news-container">
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
