import Overview from "./pages";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import AddNews from "./pages/news/AddNews";
import UpdateNews from "./pages/news/UpdateNews";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/add-news" element={<AddNews />} />
        <Route path="/add-news/:id" element={<UpdateNews />} />
      </Routes>
    </>
  );
}

export default App;
