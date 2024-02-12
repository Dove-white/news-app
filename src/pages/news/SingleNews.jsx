import React, { useState } from "react";
import Button from "../../component/ui/Button";
import UpdateNews from "./UpdateNews";

const SingleNews = ({ data, handleDelete, setUpdateSuccessful }) => {
  let [editForm, setEditForm] = useState(false);
  let [items, setItems] = useState({});

  return (
    <>
      {data.map((item) => (
        <article
          key={item.id}
          className="w-[300px] flex flex-col gap-2 border-2 p-3 rounded-2xl m-5 border-t-0"
        >
          <img
            className="rounded-2xl h-[140px] object-cover"
            src={item.image}
            alt=""
          />
          <h4 className="font-bold md:h-[30px] text-base">{item.title}</h4>
          <p className="h-[120px] overflow-hidden">{item.content}</p>
          <div className="flex justify-between">
            <Button
              className="bg-blue-600"
              name="Edit"
              onClick={() => {
                setItems(item);
                setEditForm(!editForm);
              }}
            />
            <Button
              className="bg-red-600"
              name="Delate"
              onClick={() => handleDelete(item.id)}
            />
          </div>
        </article>
      ))}

      {editForm && (
        <div className="w-full h-full right-0 top-0 fixed">
          <button onClick={() => setEditForm(!editForm)} className="bg-[#fffffff6] w-full h-full -z-10 absolute"></button>
          <UpdateNews
            data={items}
            handleClose={() => setEditForm(!editForm)}
            setUpdateSuccessful={() => setUpdateSuccessful()}
          />
        </div>
      )}
    </>
  );
};

export default SingleNews;
