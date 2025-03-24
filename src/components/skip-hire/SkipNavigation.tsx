import React from "react";
import { FaPoundSign } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

interface SkipNavigationProps {
  isVisible: boolean;
  onBack: () => void;
  onContinue: () => void;
  selectedSize: number | null;
}

const SkipNavigation: React.FC<SkipNavigationProps> = ({
  isVisible,
  onBack,
  onContinue,
  selectedSize,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1c1c1c] border-t border-[#2a2a2a] p-4">
      <div className="max-w-7xl mx-auto flex items-end gap-4 flex-col md:flex-row justify-between px-4 md:px-8">
        <div className="flex md:items-center text-gray-400 gap-2">
          <span className="md:block hidden">{selectedSize}</span>
          <FaPoundSign className="text-xl text-[#0037C1]" />
          <span>7 days </span><span className="hidden md:block">hire</span>
        </div>

        <div className="flex items-center w-full md:w-auto gap-4">
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-2 text-gray-400 bg-[#2A2A2A] hover:bg-[#3a3a3a] w-full md:w-auto px-6 py-2 rounded-lg transition-colors"
          >
            Back
          </button>

          <button
            onClick={onContinue}
            className="flex items-center justify-center gap-2 bg-[#0037C1] hover:bg-[#0037C1]/90 text-white w-full md:w-auto px-6 py-2 rounded-lg transition-colors"
          >
            Continue
            <IoIosArrowRoundForward className="text-2xl hidden md:block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipNavigation;
