export type MaterialCategory = 'Engineering' | 'Dental' | 'General' | 'SLS' | 'SLA';
export type PriceTier = 'Low' | 'Medium' | 'High';

export type Material = {
  id: string;
  slug: string;
  name: string;
  category: MaterialCategory;
  thumbnail: string;
  heroImage?: string;
  tags: string[];
  summary: string;
  specs: {
    tensileStrengthMPa?: number;
    tensileModulusGPa?: number;
    elongationAtBreakPct?: number;
    hdtAt0_45MPaC?: number;
    densityGPerCm3?: number;
    color?: string;
  };
  downloads?: { label: string; url: string }[];
  faq?: { q: string; a: string }[];
  priceTier?: PriceTier;
};

export type FilterOptions = {
  categories: MaterialCategory[];
  tags: string[];
  priceRange?: [number, number];
};

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'strength-high' | 'name';
