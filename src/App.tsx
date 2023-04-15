import React from "react";
import { Route, Routes } from "react-router-dom";
import Charts from "./components/pages/Charts";
import Contacts from "./components/pages/Contacts";
import CreateContact from "./components/pages/CreateContact";

const App = () => {
  return (
    <Routes>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/edit" element={<CreateContact edit />} />
      <Route path="/contacts/create" element={<CreateContact />} />

      <Route path="/" element={<Charts />} />
    </Routes>
  );
};

export default App;
