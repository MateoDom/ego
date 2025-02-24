import { Route, Routes } from "react-router";
import { Navbar } from "./components";
import Home from "./screens/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
