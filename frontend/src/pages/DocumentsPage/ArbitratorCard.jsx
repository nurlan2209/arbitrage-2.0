import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ArbitratorCard = ({ arbitrator, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
      >
        <h3 className="text-xl font-semibold text-gray-800">
          {arbitrator.name[lang]}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-blue-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-200 bg-white">
          <h4 className="font-bold text-gray-700 mb-2">
            Профессиональный опыт и квалификация:
          </h4>
          <p className="whitespace-pre-line text-gray-600">
            {arbitrator.experience[lang]}
          </p>
        </div>
      )}
    </div>
  );
};

export default ArbitratorCard;
