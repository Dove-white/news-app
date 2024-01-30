import Overview from "./pages";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import AddNews from "./pages/news/AddNews";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/add-news" element={<AddNews />} />
      </Routes>
    </>
  );
}

export default App;
