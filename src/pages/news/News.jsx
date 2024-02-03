import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const News = () => {
  const [success, setSuccess] = useState(null);
  console.log("success", success);

  const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

  let [data, setData] = useState([]);

  const fetchNews = () => {
    fetch(`${baseUrl}/api/v1/news`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (success == true) {
      toast.success("News deleted", {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
      fetchNews();
    }
  }, [success]);

  // Delete News
  const deleteNews = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/news/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        setSuccess(response.ok);
      }
      if (!response.ok) {
        toast.error(response.status)
        throw new Error(`http error status: ${response.status}`);
      }
    } catch (error) {
      console.error("error during delete operation", error.message);
    }
  };

  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: '',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteNews(id)
        },
        {
          label: 'No',
        }
      ]
    });
  };

  return (
    <>
      <main>
        <h2 className="text-3xl font-bold text-center">News</h2>
        <div className="flex flex-wrap lg:grid lg:grid-cols-4 xl:grid-cols-5 max-md:justify-center">
          {data.map((item) => (
            <SingleNews
              key={item.id}
              title={item.title}
              content={item.content}
              imageUrl={item.image}
              deleteNews={() => handleDelete(item.id)}
            />
          ))}
        </div>
        <ToastContainer />
      </main>
    </>
  );
};

export default News;
