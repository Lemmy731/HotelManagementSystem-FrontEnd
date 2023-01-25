import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
 import Login from "./components/authentication/Login";
 import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import AddRoom from "../src/pages/manager/AddRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} /> 
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="addroom" element={<AddRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
