import { useState, useEffect } from 'react';
import { SkipOption } from '../types/skip';
import { fetchSkipOptions } from '../services/skipService';

export const useSkipOptions = (postcode: string, area: string) => {
  const [skipOptions, setSkipOptions] = useState<SkipOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkipOptions = async () => {
      try {
        const data = await fetchSkipOptions(postcode, area);
        setSkipOptions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadSkipOptions();
  }, [postcode, area]);

  return { skipOptions, isLoading, error };
}; 