import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Heart from "../img/heart.jpg";
import Logo from "../img/logo.png";
import Options from "../img/option.png";
import { useTranslation } from "react-i18next";
import { Check, ChevronUp, ChevronDown, X } from 'lucide-react';


const BusinessEligibility = () => {
  const location = useLocation();
  const [idno, setIdno] = useState("");
  const [isEligible, setIsEligible] = useState(null);
  const [expandedGrantIndex, setExpandedGrantIndex] = useState(null);


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const idnoFromUrl = queryParams.get("idno");
    setIdno(idnoFromUrl || "");
  }, [location]);

  const checkEligibility = () => {
    if (idno.length === 8) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };


  const toggleGrant = (index) => {
    if (expandedGrantIndex === index) {
      setExpandedGrantIndex(null);
    } else {
      setExpandedGrantIndex(index);
    }
  };

  const grants = [
    { 
      name: "Start pentru tineri", 
      status: "open",
      criteria: [
        { name: "Vârstă sub 35 ani", isPassing: true },
        { name: "Afacere înregistrată în ultimii 2 ani", isPassing: true },
        { name: "Fără datorii fiscale", isPassing: true }
      ]
    },
    { 
      name: "ECO IMM", 
      status: "open",
      criteria: [
        { name: "Proiect cu componentă ecologică", isPassing: true },
        { name: "Minimum 2 ani de activitate", isPassing: true },
        { name: "Plan de reducere a amprentei de carbon", isPassing: true }
      ]
    },
    { 
      name: "PARE", 
      status: "closed",
      criteria: [
        { name: "Afacere în zona rurală", isPassing: true },
        { name: "Crearea a min. 3 locuri de muncă", isPassing: false },
        { name: "Cofinanțare min. 30%", isPassing: true }
      ]
    },
    { 
      name: "Antreprenoriat Feminin", 
      status: "closed",
      criteria: [
        { name: "Fondator/administrator femeie", isPassing: true },
        { name: "Min. 1 an de activitate", isPassing: true },
        { name: "Domeniu prioritar conform strategiei", isPassing: false }
      ]
    },
    { 
      name: "Mici Producători", 
      status: "open",
      criteria: [
        { name: "Producție locală", isPassing: true },
        { name: "Max. 10 angajați", isPassing: true },
        { name: "Certificare calitate", isPassing: true }
      ]
    },
    { 
      name: "Competitivitate și lanțuri valorice", 
      status: "open",
      criteria: [
        { name: "Export min. 20% din producție", isPassing: false },
        { name: "Parteneriat cu min. 2 întreprinderi", isPassing: true },
        { name: "Tehnologii inovative", isPassing: true }
      ]
    },
    { 
      name: "Turism", 
      status: "open",
      criteria: [
        { name: "Obiect turistic funcțional", isPassing: true },
        { name: "Clasificare min. 3 stele", isPassing: false },
        { name: "Servicii complementare", isPassing: true }
      ]
    },
    { 
      name: "Retehnologizare", 
      status: "closed",
      criteria: [
        { name: "Utilaje mai vechi de 10 ani", isPassing: true },
        { name: "Plan de eficientizare energetică", isPassing: true },
        { name: "Min. 5 ani de activitate", isPassing: false }
      ]
    },
    { 
      name: "Transformare Digitală", 
      status: "closed",
      criteria: [
        { name: "Plan de transformare digitală", isPassing: true },
        { name: "Buget min. 50.000 EUR", isPassing: false },
        { name: "Consultanță specializată", isPassing: true }
      ]
    },
    { 
      name: "Inovații digitale și start-upuri tehnologice", 
      status: "closed",
      criteria: [
        { name: "Produs/serviciu inovativ", isPassing: true },
        { name: "Proprietate intelectuală", isPassing: false },
        { name: "Potențial de scalare", isPassing: true }
      ]
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/3 mt-5 bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-4">
            <img src={Heart} alt="" />
            <img src={Logo} alt="" />
            <img src={Options} alt="" />
        </div>
        <h2 className="text-center text-2xl">Eligibilitatea Interprinderei</h2>
        <div className="mx-3 py-5">
        {grants.map((grant, index) => (
                <div key={index} className="mb-4">
                    <div 
                        className={`flex justify-between bg-blue-50 px-4 py-4 rounded-xl items-center cursor-pointer transition-all ${expandedGrantIndex === index ? 'bg-blue-100' : ''}`}
                        onClick={() => toggleGrant(index)}
                    >
                        <span className="font-medium">{grant.name}</span>
                        <div className="flex items-center">
                            {grant.status === "open" ? (
                                <span className="text-green-500 bg-green-100 px-3 py-1 rounded-xl font-medium border mr-2">Valabil</span>
                            ) : (
                                <span className="text-red-500 bg-red-100 px-3 py-1 rounded-xl font-medium border mr-2">Închis</span>
                            )}
                            {expandedGrantIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                    </div>
                    
                    {expandedGrantIndex === index && (
                        <div className="mt-2 pl-4 pr-2 py-3 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="font-medium mb-2 text-gray-700">Criterii de eligibilitate:</h3>
                            <div className="space-y-2">
                                {grant.criteria.map((criterion, critIndex) => (
                                    <div key={critIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                                        <span className="text-sm">{criterion.name}</span>
                                        {criterion.isPassing ? (
                                            <div className="flex items-center text-green-600">
                                                <Check size={18} className="mr-1" />
                                                <span className="text-xs">Îndeplinit</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center text-red-500">
                                                <X size={18} className="mr-1" />
                                                <span className="text-xs">Neîndeplinit</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}

        </div>
      </div>
    </div>
  );
};

export default BusinessEligibility;