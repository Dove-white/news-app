import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../component/ui/Button";
import Input from "../../component/ui/Input";
import TextArea from "../../component/ui/TextArea";
import { postData } from "../../services/api";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  image: yup.string().url().nullable().required(),
});

const AddNews = () => {
  const [inputs, setInputs] = useState({});
  let [response, setResponse] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Post Method
  const getPostData = async (input) => {
    try {
      const isSuccess = await postData(input);
      if (isSuccess) {
        setResponse(isSuccess);
        toast.success("News added", {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      } else {
        toast.error("Error during adding", {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error occurred during post operation");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = () => {
    getPostData(inputs);
    reset();
  };

  return (
    <>
      <div className="flex flex-col items-center p-10">
        <h2 className="text-3xl font-bold text-center pb-10">Add Your News</h2>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="w-2/5 max-lg:w-2/3 max-sm:w-[90%] flex flex-col gap-7"
        >
          <Input
            register={register}
            name="title"
            errorsMessage={errors.title?.message}
            handleChange={handleChange}
          />
          <TextArea
            register={register}
            name="content"
            errorsMessage={errors.content?.message}
            handleChange={handleChange}
          />
          <Input
            register={register}
            name="image"
            errorsMessage={errors.image?.message}
            handleChange={handleChange}
          />
          {response == false ? (
            <Button
              className="bg-blue-600"
              type="submit"
              name="Add"
            ></Button>
          ) : (
            <div className="flex gap-10">

            <Link to="/" className="w-full">
              <Button className="bg-black w-full" name="<- Back" />
            </Link>
            <Button
              className="bg-blue-600 w-full"
              type="submit"
              name="Add Again"
            ></Button>
            </div>
          )}
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default AddNews;
