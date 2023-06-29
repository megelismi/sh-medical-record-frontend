import React from "react";
import SignIn from "./pages/SignIn";
import MedicalRecordsSearch from "./pages/MedicalRecordsSearch";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<SignIn />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="medical-records" element={<MedicalRecordsSearch />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
