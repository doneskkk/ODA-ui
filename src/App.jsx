import { useState } from "react";
import Verification from "./components/Verification";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BusinessEligibility from "./components/BusinessEligibility";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Verification />} />
          <Route path="/eligibility" element={ <BusinessEligibility/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
