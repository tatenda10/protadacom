import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Use React.lazy to lazily load components
const Homepage = lazy(() => import('../pages/Homepage'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const Aboutus = lazy(() => import('../pages/Aboutus'));
const Casestudies = lazy(() => import('../pages/Casestudies'));
const Howitworks = lazy(() => import('../pages/Howitworks'));

const Routesfile = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<div className="loader">
                <div className="justify-content-center jimu-primary-loading"></div>
            </div>}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/AboutUs" element={<Aboutus />} />
                    <Route path="/Casestudies" element={<Casestudies />} />
                    <Route path="/Howitworks" element={<Howitworks />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default Routesfile;
