import { Route, Routes } from "react-router";
import { Navbar, Footer } from "./components";
import Home from "./screens/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
