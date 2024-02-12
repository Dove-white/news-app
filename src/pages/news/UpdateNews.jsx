import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../component/ui/Button";
import Input from "../../component/ui/Input";
import TextArea from "../../component/ui/TextArea";
import { editData } from "../../services/api";

const validationSchema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  image: yup.string().url().nullable().required(),
});

const UpdateNews = ({ handleClose, data, setUpdateSuccessful }) => {
  const [inputs, setInputs] = useState();

  const getEditData = async () => {
    try {
      const isSuccess = await editData(data.id, inputs);
      if (isSuccess.ok) {
        setUpdateSuccessful();
        handleClose();
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleChange = (event) => {
    event.preventDefault();
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = async () => {
    getEditData();
  };

  return (
    <>
      <div className="flex flex-col items-center m-10 z-10">
        <button
          onClick={() => handleClose()}
          className="absolute w-7 h-7 rounded-full bg-black text-white top-6 right-8"
        >
          X
        </button>
        <h2 className="text-3xl font-bold text-center pb-10">
          Update Your News
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="w-2/5 max-lg:w-2/3 max-sm:w-[90%] flex flex-col gap-7"
        >
          <Input
            register={register}
            name="title"
            errorsMessage={errors.title?.message}
            handleChange={handleChange}
            defaultValue={data.title}
          />
          <TextArea
            register={register}
            name="content"
            errorsMessage={errors.content?.message}
            handleChange={handleChange}
            defaultValue={data.content}
          />
          <Input
            register={register}
            name="image"
            errorsMessage={errors.image?.message}
            handleChange={handleChange}
            defaultValue={data.image}
          />
          <Button className="bg-blue-600" type="submit" name="Update"></Button>
        </form>
      </div>
    </>
  );
};

export default UpdateNews;
