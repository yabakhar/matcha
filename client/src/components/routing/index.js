import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../views/Home/LoginRegister";
import Profile from "../../views/Profile/Profile";
import { NotFound } from "./NotFound";
import ComfirmAccount from "../../views/CompleteProfile/VerifyEmail";
import NewPassword from "../../views/Home/NewPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<ComfirmAccount />} />
        <Route path="/ForgetPassword" element={<NewPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
