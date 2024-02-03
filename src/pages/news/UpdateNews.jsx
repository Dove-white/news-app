import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";

const validationSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  url: yup.string().url().nullable().required(),
});

const UpdateNews = () => {
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

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  // Update Method

  const { id } = useParams();

  const apiEdit = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/news/${id}`, {
        method: "PUT",
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
    } catch (e) {
      console.log(e.message);
      toast.error("News added", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  let [data, setData] = useState([]);
  console.log(data, 'for update')

  const fetchNews = () => {
    fetch(`${baseUrl}/api/v1/news/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const onSubmitHandler = () => {
    apiEdit();
    reset();
    // notify();
    toast.success("News Updated", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
    });
  };

  return (
    <>
      <div className="flex flex-col items-center p-10">
        <h2 className="text-3xl font-bold text-center pb-10">
          Update Your News
        </h2>
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
              defaultValue={data.title}
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
              defaultValue={data.content}
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
              defaultValue={data.image}
            />
            <div className="mt-2 text-sm font-medium text-red-500">
              {errors.url?.message}
            </div>
          </div>
          {/* <Link to="/"> */}

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full"
            type="submit"
            onChange={handleChange}
          >
            Update
          </button>
          {/* </Link> */}
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default UpdateNews;
