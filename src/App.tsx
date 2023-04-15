import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Charts from "./components/pages/Charts";
import Contacts from "./components/pages/Contacts";
import CreateContact from "./components/pages/CreateContact";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/edit" element={<CreateContact edit />} />
        <Route path="/contacts/create" element={<CreateContact />} />

        <Route path="/" element={<Charts />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default App;
