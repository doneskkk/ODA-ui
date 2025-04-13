import { useState } from "react";
import Verification from "./components/Verification";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import BusinessEligibility from "./components/BusinessEligibility";
import EvaProfile from "./components/EvaProfile";
import Authentification from "./components/Authentification";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Verification />} />
          <Route path="/auth" element={<Authentification/>}/>
          <Route path="/eligibility" element={ <BusinessEligibility/>}/>
          <Route path="/profile" element={<EvaProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
