export const capFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

export async function getData() {
  const response = await fetch(`${baseUrl}/api/v1/news`);
  const data = await response.json();
  return data;
}

export const deleteData = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/news/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      return response.ok;
    }
    if (!response.ok) {
      console.log("error during delete");
    }
  } catch (error) {
    console.error("error during delete operation", error.message);
  }
};

export const postData = async (inputs) => {
  const inputData = {
    title: inputs.title.toUpperCase().trim(),
    content: capFirst("" + inputs.content.trim()),
    image: inputs.image.trim(),
  };

  try {
    const response = await fetch(`${baseUrl}/api/v1/news`, {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      return response.ok;
    }
    if (!response.ok) {
      console.log("error during post");
    }
  } catch (error) {
    console.error("error during post operation", error.message);
  }
};

export const editData = async (id, inputs) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/news/${id}`, {
      method: "PUT",
      body: JSON.stringify(inputs),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response) {
      return response;
    }
    if (!response.ok) {
      console.log("error during edit");
    }
  } catch (error) {
    console.error("error during edit operation", error.message);
  }
};
