import React from "react";
import Button from "./Button";
import InputFilled from "./InputFilled";
import TextFilled from "./TextFilled";

const Form = () => {
  return (
    <form
      action="#"
      className="w-2/5 max-lg:w-2/3 max-sm:w-[90%] flex flex-col gap-7"
    >
      <InputFilled
        label="Title"
        type="text"
        id="news_title"
        placeholder="Breaking News"
      />
      <InputFilled
        label="Content"
        type="text"
        id="content"
        placeholder="A sort article about the breaking news"
      />
      <TextFilled
        label="Image Url"
        id="image"
        placeholder="https://anylogic.help/anylogic/ui/images/format.png"
      />
      <Button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        name="Submit"
        type="submit"
      />
    </form>
  );
};

export default Form;
