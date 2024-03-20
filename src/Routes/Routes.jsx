// Routes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './../pages/Home';
import { Note } from "../pages/Note";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/note" element={<Note />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
