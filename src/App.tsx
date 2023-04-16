import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contacts from "./components/pages/Contacts";
import "react-toastify/dist/ReactToastify.css";

const CreateContact = lazy(()=>import("./components/pages/CreateContact"))
const Charts = lazy(() => import("./components/pages/Charts"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/edit" element={<CreateContact edit />} />
        <Route path="/contacts/create" element={<CreateContact />} />

        <Route path="/" element={<Charts />} />
      </Routes>
      <ToastContainer/>
    </Suspense>
  );
};

export default App;
