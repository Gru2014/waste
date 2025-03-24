export interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  transport_cost: number | null;
  per_tonne_cost: number | null;
}

export interface Step {
  id: number;
  name: string;
  icon: React.ReactNode;
}
