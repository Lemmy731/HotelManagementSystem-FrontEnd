import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/Login";
 import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import AddRoom from "../src/pages/manager/AddRoom";
import Sidebar from "./components/navs/Sidebar";
import UserTransactions from "./components/customerHome/usertransaction/UserTransactions";
import ResetPassword from "./components/authentication/ResetPassword";
import ChangePassword from "./components/authentication/ChangePassword";
import './components/PayForHotel/PayForHotelForm.css';
import {PayForHotelForm} from './components/PayForHotel/PayForHotelForm';
import LandingPage from"./components/landingPage/landingPageIndex/LandingPage";
import Transactions from "./components/customerHome/Transactions/Transactions";

 

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} /> 
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="user-transaction" element={< UserTransactions/>} />
         <Route path="customer-transactions" element={<Transactions />}/> 
      <Route path="pay-for-hotel" element={<PayForHotelForm />} /> 
        <Route path="addroom" element={<AddRoom />} />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
