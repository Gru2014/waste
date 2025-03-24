import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { LuShield, LuTruck } from "react-icons/lu";
import { RiMapPinLine, RiCalendarLine } from "react-icons/ri";
import { Step } from "../../types/skip";


interface ProgressBarProps {
  currentStep: number;
}

const steps: Step[] = [
  { id: 1, name: "Postcode", icon: <RiMapPinLine /> },
  { id: 2, name: "Waste Type", icon: <FaRegTrashAlt /> },
  { id: 3, name: "Select Skip", icon: <LuTruck /> },
  { id: 4, name: "Permit Check", icon: <LuShield /> },
  { id: 5, name: "Choose Date", icon: <RiCalendarLine /> },
  { id: 6, name: "Payment", icon: <FiCreditCard /> },
];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex md:justify-center overflow-x-auto justify-start px-4">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <>
            <button
              key={step.id}
              className={`flex items-center whitespace-nowrap transition-colors text-lg   ${
                step.id <= currentStep
                  ? "text-[#0037C1] cursor-pointer  hover:text-[#0037C1]"
                  : " text-white/60 cursor-not-allowed"
              }`}
            >
              <span className="text-2xl">{step.icon}</span>
              <span
                className={`ml-2 ${
                  step.id <= currentStep ? "text-white" : "text-gray-400"
                }`}
              >
                {step.name}
              </span>
            </button>
            {index !== steps.length - 1 && (
              <div
                className={`w-16 h-px bg-[#2A2A2A] ${
                  step.id < currentStep - 1 ? "bg-[#0037C1]" : "bg-gray-600"
                }`}
              ></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
