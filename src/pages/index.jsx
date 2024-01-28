import React from "react";
import News from "./news/News";
import Form from "./form";

const Overview = () => {
  return (
    <main className="p-10 flex flex-col items-center justify-center gap-4">
      <News />
      <Form />
    </main>
  );
};

export default Overview;
