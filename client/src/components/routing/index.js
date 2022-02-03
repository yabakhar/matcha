import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../views/Home/LoginRegister";
import Profile from "../../views/Profile/Profile";
import { NotFound } from "./NotFound";
import ComfirmAccount from "../../views/CompleteProfile/VerifyEmail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<ComfirmAccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
