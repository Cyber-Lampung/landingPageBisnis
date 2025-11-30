import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Component/pages/index/home";
import Register from "./Component/pages/authentication/Register/Register.jsx";
import Login from "./Component/pages/authentication/Login/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
