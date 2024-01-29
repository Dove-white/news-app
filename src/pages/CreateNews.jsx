import React from "react";
import Form from "../component/ui/Form";

const CreateNews = () => {
  return (
    <>
      <div className="flex flex-col items-center p-10">
        <h2 className="text-3xl font-bold text-center pb-10">Post Your News</h2>

        <Form />
      </div>
    </>
  );
};

export default CreateNews;
