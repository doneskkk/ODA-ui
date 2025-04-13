import React, { useState, useEffect } from "react";
import { User, BriefcaseBusiness } from "lucide-react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Authentification() {
  const location = useLocation();
  const [msign, setMsign] = useState("");
  const [idno, setIdno] = useState("");
  const [idnp, setIdnp] = useState("");
  const [eligibilityData, setEligibilityData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [userData, setUserData] = useState();


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const msign = queryParams.get("msign");
    if (msign) {
      setMsign(msign);
      handleUser(msign);
    }
  }, [location]);

  const toggleExpanded = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const handleUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/oda/api/login?msign=${msign}`
      );
      setEligibilityData(response.data || []);
      console.log("Eligibility Data:", response.data);
    } catch (error) {
      console.error("Error fetching eligibility:", error);
    }
  };

  const fetchCompaniesByIdno = async (idno) => {
    try {
      const response = await axios.get(`http://localhost:8080/oda/api/personjurid/${eligibilityData.idno}`);
      setSrlData(response.data || []);
    } catch (error) {
      console.error("Error fetching eligibility:", error);
    }
  };

  const fetchUserByIdnp = async (idnp) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/login/user/${eligibilityData.idnp}`);
      setUserData(response.data || {});
    } catch (error) {
      console.error("Error fetching eligibility:", error);
    }
  };




  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/3 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-6">
          <User size={48} className="mx-auto mb-4" />
          <h2 className="text-xl font-bold">{userData.givenName} {userData.familyName}</h2>
          <p className="text-sm">Persoana fizică</p>
        </div>

        <div className="p-6 text-center">
          <button className="bg-blue-500 text-white w-1/3 py-2 rounded-lg font-bold hover:bg-blue-600 transition">
            Continuă
          </button>
          <p className="text-gray-500 mt-4">Sau Alege un alt rol</p>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center">
            <BriefcaseBusiness size={32} className="text-blue-500 mr-4" />
            <div>
              <h3 className="font-bold text-gray-800">
                FUTUREPROOF TECHNOLOGIES S.R.L.
              </h3>
              <p className="text-sm text-gray-500">IDNO: 1023600058261</p>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
