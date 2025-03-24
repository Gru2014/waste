import React from "react";
import { IoIosArrowRoundForward, IoIosWarning } from "react-icons/io";
import { FiCheck } from "react-icons/fi";

interface SkipCardProps {
  size: string;
  price: number;
  hirePeriod: number;
  isPrivateProperty: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  size,
  price,
  hirePeriod,
  isPrivateProperty = false,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      className={`bg-[#1c1c1c] border-[#2a2a2a] border-[1.5px] hover:border-[#0037C1] cursor-pointer duration-200 rounded-lg overflow-hidden shadow-lg p-6 ${
        isSelected ? "ring-2 ring-[#0037C1]" : ""
      }`}
      onClick={onSelect}
    >
      <div className="relative">
        {isSelected && (
          <FiCheck className="absolute z-20 -top-2 -right-2 text-[#0037C1] text-xl" />
        )}
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={`/images/skip.png`}
            alt={`${size} Yard Skip`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-3 right-2 bg-[#0037C1] text-white px-3  rounded-full">
          {size} Yards
        </div>
        {isPrivateProperty && (
          <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 absolute bottom-3 left-2 z-20  ">
            <IoIosWarning className="text-yellow-500" />
            <p className="text-xs font-medium text-yellow-500">
              Private Property Only
            </p>
          </div>
        )}
      </div>

      <div className="py-4">
        <h3 className="text-xl font-bold text-white mb-2">{size} Yard Skip</h3>
        <p className="text-gray-400 mb-4">{hirePeriod} day hire period</p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[#0037C1] text-2xl font-bold">£{price}</span>
            <span className="text-gray-400 ml-1">per week</span>
          </div>
        </div>

        <button
          onClick={onSelect}
          className={`w-full font-semibold p-2 rounded-lg transition duration-200 flex items-center justify-center ${
            isSelected
              ? "bg-[#0037C1] hover:bg-[#0037C1]"
              : "bg-[#2A2A2A] hover:bg-[#3a3a3a]"
          }`}
        >
          {isSelected ? "Selected" : "Select This Skip"}
          {!isSelected && <IoIosArrowRoundForward className="text-2xl" />}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
