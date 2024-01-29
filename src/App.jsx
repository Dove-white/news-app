import Overview from "./pages";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import CreateNews from "./pages/CreateNews";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/addNews" element={<CreateNews />} />
      </Routes>
    </>
  );
}

export default App;
