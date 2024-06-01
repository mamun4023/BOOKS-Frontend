import React, { lazy, Suspense } from "react";
import Cookies from "js-cookie";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loader = lazy(() => import("./components/Loader"));
const Home = lazy(() => import("./pages/Home"));

export default function Routing() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Navigate to="/sign-in" />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}

const PrivateRoutes = () => {
    return Cookies.get("token") ? <Outlet /> : <Navigate to="sign-in" />;
};
