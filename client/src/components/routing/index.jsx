import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../views/LoginRegister';
import HorizontalLinearStepper from '../../views/CompleteProfile.js';
import { NotFound } from './NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/completeProfile" element={<HorizontalLinearStepper />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
