import React from "react";
import Button from "../component/button";
import NewsImage from "../assets/img/news-image.jpg";

const SingleNews = () => {
  return (
    <>
      <article className="news-article">
        <img className="news-image" src={NewsImage} alt="" />
        <h4>Title</h4>
        <p className="news-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          pariatur unde aut suscipit nisi ullam!
        </p>
        <div className="news-buttons">
          <Button name="Edit" />
          <Button name="Delate" />
        </div>
      </article>
    </>
  );
};

export default SingleNews;
