import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import CustomerDashboard from "./components/customerHome/Dashboard";
import ManagerDashboard from "./components/managerHome/Dashboard";
import AdminDashboard from "./components/adminHome/Dashboard";
import CustomerHotel from "./components/customerHome/Hotels";
import CustomerManager from "./components/customerHome/Manager";
import CustomerTransaction from "./components/customerHome/Transactions";
import ManagerHotel from "./components/managerHome/Hotels";
import ManagerBookings from "./components/managerHome/Bookings";
import ManagerTransactions from "./components/managerHome/Transactions";
import AdminHotel from "./components/adminHome/Hotels";
import AdminManager from "./components/adminHome/Manager";
import AdminTransaction from "./components/adminHome/Transactions";
import AddRoom from "../src/pages/manager/AddRoom";
import UserTransactions from "./components/customerHome/usertransaction/UserTransactions";
import ResetPassword from "./components/authentication/ResetPassword";
import ChangePassword from "./components/authentication/ChangePassword";
import './components/PayForHotel/PayForHotelForm.css';
import {PayForHotelForm} from './components/PayForHotel/PayForHotelForm';
import Create from "./components/modals/CreatedModal";
import Delete from "./components/modals/DeleteModal";
import Update from "./components/modals/UpdatedModal";
import Error from "./components/modals/ErrorModal";
import Success from "./components/modals/SuccessModal";
import LandingPage from "./components/landingPage/landingPageIndex/LandingPage";
import Booking from "./pages/customer/Booking";
import ViewMore from "./components/viewMore/viewMore";
import HotelListing from "./components/HotelListing/HotelListing";
import HotelReview from "./components/HotelReview/HotelReview";

function App()
{
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="hotel-review" element={<HotelReview />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="customer-dashboard" element={<CustomerDashboard />} />
        <Route path="manager-dashboard" element={<ManagerDashboard />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="customer-hotel" element={<CustomerHotel/>} />
        <Route path="customer-manager" element={<CustomerManager/>} />
        <Route path="customer-transaction" element={<CustomerTransaction/>} />
        <Route path="manager-hotel" element={<ManagerHotel/>} />
        <Route path="manager-bookings" element={<ManagerBookings/>} />
        <Route path="manager-transaction" element={<ManagerTransactions/>} />
        <Route path="admin-hotels" element={<AdminHotel/>} />
        <Route path="admin-manager" element={<AdminManager/>} />
        <Route path="admin-transaction" element={<AdminTransaction/>} />
        <Route path="user-transaction" element={< UserTransactions/>} />
        {/* <Route path="customer-transactions" element={<Transactions />}/>  */}
        <Route path="pay-for-hotel" element={<PayForHotelForm />} /> 
        {/* <Route path="user-transaction" element={<UserTransactions />} /> */}
        {/* <Route path="customer-transactions" element={<Transactions />} /> */}
        <Route path="pay-for-hotel" element={<PayForHotelForm />} />
        <Route path="booking" element={<Booking />} />
        {/* <Route path="user-transaction" element={<UserTransactions />} /> */}
        {/* <Route path="customer-transactions" element={<Transactions />} /> */}
        {/* <Route path="pay-for-hotel" element={<PayForHotelForm />} /> */}
        <Route path="user-transaction" element={< UserTransactions />} />
        {/* <Route path="customer-transactions" element={<Transactions />} /> */}
        <Route path="pay-for-hotel" element={<PayForHotelForm />} />
        <Route path="addroom" element={<AddRoom />} />
        <Route path="create-modal" element={<Create />} />
        <Route path="delete-modal" element={<Delete />} />
        <Route path="update-modal" element={<Update />} />
        <Route path="error-modal" element={<Error />} />
        <Route path="success-modal" element={<Success />} />
        <Route path="view-more" element={<ViewMore />} />
        <Route path="hotel-listing" element={<HotelListing />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
