import { SkipOption } from '../types/skip';

const API_BASE_URL = 'https://app.wewantwaste.co.uk/api';

export const fetchSkipOptions = async (postcode: string, area: string): Promise<SkipOption[]> => {
  const response = await fetch(`${API_BASE_URL}/skips/by-location?postcode=${postcode}&area=${area}`);
  if (!response.ok) {
    throw new Error('Failed to fetch skip options');
  }
  
  return response.json();
}; 