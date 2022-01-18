import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../views/LoginRegister';
import HorizontalLinearStepper from '../../views/CompleteProfile.js';
import ComfirmAccount from '../../views/ComfirmAccount.js';
import { NotFound } from './NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/completeProfile" element={<HorizontalLinearStepper />} />
                <Route path="/verify" element={<ComfirmAccount />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
