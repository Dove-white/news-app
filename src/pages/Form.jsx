import React from "react";
import Button from "../component/Button";

const Form = () => {
  return (
    <form action="#" className="w-2/5 max-lg:w-2/3 max-sm:w-[90%] flex flex-col gap-7">
      <h2 className="text-3xl font-bold text-center">Fill The Form</h2>
      <div>
        <label
          for="news_title"
          class="block mb-2 text-sm font-medium text-black"
        >
          Title
        </label>
        <input
          type="text"
          id="news_title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Breaking News"
          required
        />
      </div>
      <div>
        <label
          for="news_content"
          class="block mb-2 text-sm font-medium text-black"
        >
          Content
        </label>
        <input
          type="text"
          id="news_content"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="A sort article about the breaking news"
          required
        />
      </div>
      <div>
        <label
          for="news_image"
          class="block mb-2 text-sm font-medium text-black"
        >
          News Image Url
        </label>
        <input
          type="text"
          id="news_image"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="https://anylogic.help/anylogic/ui/images/format.png"
          required
        />
      </div>
      <Button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        name="Submit"
        type="submit"
      />
    </form>
  );
};

export default Form;
