import React, { useState } from "react";
import Button from "./Button";
import InputFilled from "./InputFilled";
import TextFilled from "./TextFilled";

const Form = () => {
  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const [inputs, setInputs] = useState({});

  // Post Method
  const apiPost = async () => {
    await fetch(`${baseUrl}/api/v1/news`, {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title,
        content: inputs.content,
        image: inputs.image,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/5 max-lg:w-2/3 max-sm:w-[90%] flex flex-col gap-7"
    >
      <InputFilled
        label="Title"
        type="text"
        id="title"
        placeholder="Breaking News"
        onChange={handleChange}
      />
      <InputFilled
        label="Content"
        type="text"
        id="content"
        placeholder="A sort article about the breaking news"
        onChange={handleChange}
      />
      <TextFilled
        label="Image Url"
        id="image"
        placeholder="https://anylogic.help/anylogic/ui/images/format.png"
        onChange={handleChange}
      />
      <Button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        name="Submit"
        type="submit"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
