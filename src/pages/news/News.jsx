import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews";

const News = () => {
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/v1/news`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <main>
        <h2 className="text-3xl font-bold text-center">News</h2>
        <div className="flex flex-wrap justify-between max-md:justify-center">
          {data.map((item) => (
            <SingleNews
              key={item.id}
              title={item.title}
              content={item.content}
              imageUrl={item.image}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default News;
