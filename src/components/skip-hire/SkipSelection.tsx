import React, { useState } from 'react';
import ProgressBar from '../common/ProgressBar';
import SkipGrid from './SkipGrid';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import SkipNavigation from './SkipNavigation';
import { useSkipOptions } from '../../hooks/useSkipOptions';

const SkipSelection: React.FC = () => {
  const { skipOptions, isLoading, error } = useSkipOptions('NR32', 'Lowestoft');
  const [selectedSkipSize, setSelectedSkipSize] = useState<number | null>(null);

  const handleSkipSelect = (skipSize: number): void => {
    setSelectedSkipSize(skipSize);
    console.log(`Selected ${skipSize} yard skip`);
  };

  const handleBack = () => {
    console.log('Going back');
  };

  const handleContinue = () => {
    console.log('Continuing to next step');
  };

  if (isLoading) {
    return <LoadingSpinner message="Loading skip options..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-8 pb-36">
      <ProgressBar currentStep={3} />
      
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>
        
        <SkipGrid 
          skipOptions={skipOptions}
          onSkipSelect={handleSkipSelect}
          selectedSkipSize={selectedSkipSize}
        />
      </div>

      <SkipNavigation 
        isVisible={selectedSkipSize !== null}
        onBack={handleBack}
        onContinue={handleContinue}
        selectedSize={selectedSkipSize}
      />
    </div>
  );
};

export default SkipSelection; 