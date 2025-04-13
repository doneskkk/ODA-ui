import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";

function Verification() {
  const { t } = useTranslation();
  const [msign, setMsign] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="transform absolute right-3 top-3 md:hover:scale-110 transition-all duration-300 ease-in-out">
        <LanguageSwitcher />
      </div>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {t("auth.verification.eligibility")}
        </h1>

        <p className="text-xl text-center mb-6">
          {t("auth.verification.idno")}
        </p>

        <div className="flex items-center mb-6 border-b overflow-hidden">
          <input
            type="text"
            placeholder="Msignature ID"
            value={msign}
            onChange={(e) => setMsign(e.target.value)}
            className="flex-grow p-3 outline-none text-xl"
          />
          <Link to={`/auth?msign=${msign}`}>
            <button className="bg-blue-600 text-white rounded-2xl px-6 py-2 font-bold mr-2 hover:bg-white hover:text-black border-2 md:hover:scale-110 transition-all duration-300 ease-in-out">
              {t("auth.verification.verifyBtn")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Verification;