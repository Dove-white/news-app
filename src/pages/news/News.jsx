import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { getData } from "../../services/api";
import { deleteData } from "../../services/api";
import { ImImage } from "react-icons/im";

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMyData();
  }, []);

  const getMyData = async () => {
    try {
      const res = await getData();
      setData(res);
      setLoading(res.length >= 1);
    } catch (err) {
      console.error(err);
    }
  };

  const getDeletedData = async (id) => {
    try {
      const isSuccess = await deleteData(id);
      if (isSuccess) {
        getMyData();
        toast.success("News deleted", {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      } else {
        console.log("Delete operation failed");
      }
    } catch (error) {
      console.error("Error occurred during delete operation");
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((i) => i.id !== id));
    confirmAlert({
      title: "Confirm to delete",
      buttons: [
        {
          label: "Yes",
          onClick: () => getDeletedData(id),
        },
        {
          label: "No",
          onClick: () => getMyData(),
        },
      ],
    });
  };

  const handleUpdateSuccessful = () => {
    getMyData();
    toast.success("News updated", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
    });
  };

  return (
    <>
      <main>
        <h2 className="text-3xl font-bold text-center">News</h2>
        {loading === false ? (
          <div className="flex flex-wrap lg:grid lg:grid-cols-3 xl:grid-cols-4 max-md:justify-center gap-4">
            {Array(4).fill(
              <article className="w-[300px] flex flex-col gap-2 border-2 p-3 rounded-2xl m-5 border-t-0 animate-pulse">
                <div className="rounded-2xl h-[140px] flex justify-center">
                  <ImImage size="100%" color="#e3e5ea" />
                </div>
                <div className="md:h-[30px] text-base">
                  <div className="h-6 w-[80%]  bg-slate-200 rounded"></div>
                </div>
                <div className="h-[120px] flex flex-col gap-4">
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                  <div className="h-2 w-full bg-slate-200 rounded"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-10 w-20 bg-slate-200 rounded"></div>
                  <div className="h-10 w-20 bg-slate-200 rounded"></div>
                </div>
              </article>
            )}
          </div>
        ) : (
          <div className="flex flex-wrap lg:grid lg:grid-cols-3 xl:grid-cols-4 max-md:justify-center gap-4">
            <SingleNews
              data={data.sort((a, b) => b.id - a.id)}
              handleDelete={handleDelete}
              setUpdateSuccessful={handleUpdateSuccessful}
            />
          </div>
        )}
        <ToastContainer />
      </main>
    </>
  );
};

export default News;
