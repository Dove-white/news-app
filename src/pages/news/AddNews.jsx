import React, { useState } from "react";
import Button from "../../component/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  url: yup.string().url().nullable().required(),
});

const AddNews = () => {
  const notify = () =>
    toast.success("Form submit successfully", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  const [inputs, setInputs] = useState({});
  console.log(inputs);

  function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // Post Method
  const apiPost = async () => {
    await fetch(`${baseUrl}/api/v1/news`, {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title.toUpperCase().trim(),
        content: capFirst("" + inputs.content.trim()),
        image: inputs.url.trim(),
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

  const onSubmitHandler = () => {
    apiPost();
    reset();
    notify();
  };

  return (
    <>
      <div className="flex flex-col items-center p-10">
        <h2 className="text-3xl font-bold text-center pb-10">Post Your News</h2>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="w-2/5 max-lg:w-2/3 max-sm:w-[90%] flex flex-col gap-7"
        >
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-black"
            >
              News Title
            </label>

            <input
              {...register("title")}
              type="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Breaking News"
              onChange={handleChange}
            />
            <div className="mt-2 text-sm font-medium text-red-500">
              {errors.title?.message}
            </div>
          </div>
          <div>
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-black"
            >
              News Content
            </label>

            <textarea
              {...register("content")}
              type="content"
              name="content"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="A sort article about the breaking news"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <div className="mt-2 text-sm font-medium text-red-500">
              {errors.content?.message}
            </div>
          </div>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-black"
            >
              News Image
            </label>

            <input
              {...register("url")}
              type="url"
              name="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="https://anylogic.help/anylogic/ui/images/format.png"
              onChange={handleChange}
            />
            <div className="mt-2 text-sm font-medium text-red-500">
              {errors.url?.message}
            </div>
          </div>
          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full"
            name="Submit"
            type="submit"
            onChange={handleChange}
          />
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default AddNews;
