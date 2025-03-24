import React from 'react';
import { SkipOption } from '../../types/skip';
import SkipCard from './SkipCard';

interface SkipGridProps {
  skipOptions: SkipOption[];
  onSkipSelect: (skipSize: number) => void;
  selectedSkipSize: number | null;
}

const SkipGrid: React.FC<SkipGridProps> = ({ skipOptions, onSkipSelect, selectedSkipSize }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skipOptions.map((skip) => (
        <SkipCard
          key={skip.id}
          size={skip.size.toString()}
          price={skip.price_before_vat + (skip.price_before_vat * (skip.vat / 100))}
          hirePeriod={skip.hire_period_days}
          isPrivateProperty={!skip.allowed_on_road}
          isSelected={skip.size === selectedSkipSize}
          onSelect={() => onSkipSelect(skip.size)}
        />
      ))}
    </div>
  );
};

export default SkipGrid; 