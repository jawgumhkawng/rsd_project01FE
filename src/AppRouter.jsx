import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
}