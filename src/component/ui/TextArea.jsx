import { capFirst } from "../../services/api";

const TextArea = ({
  name,
  errorsMessage,
  handleChange,
  register,
  defaultValue,
}) => {
  return (
    <div>
      <div className="block mb-2 text-sm font-medium text-black">
        News {capFirst(name)}
      </div>
      <textarea
        {...register(name)}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={`Enter news ${name} here`}
        cols="30"
        rows="10"
        onChange={(e) => handleChange(e)}
        defaultValue={defaultValue}
      ></textarea>
      <div className="mt-2 text-sm font-medium text-red-500">
        {errorsMessage}
      </div>
    </div>
  );
};

export default TextArea;
