import React, { createContext, useContext, useState, useEffect } from 'react';
import { Material } from '@/types/material';

interface CompareContextType {
  compareList: Material[];
  addToCompare: (material: Material) => boolean;
  removeFromCompare: (materialId: string) => void;
  clearCompare: () => void;
  isInCompare: (materialId: string) => boolean;
  canAddMore: boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const MAX_COMPARE = 4;
const STORAGE_KEY = 'material-compare-list';

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareList, setCompareList] = useState<Material[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(compareList));
  }, [compareList]);

  const addToCompare = (material: Material): boolean => {
    if (compareList.length >= MAX_COMPARE) {
      return false;
    }
    if (compareList.find(m => m.id === material.id)) {
      return false;
    }
    setCompareList(prev => [...prev, material]);
    return true;
  };

  const removeFromCompare = (materialId: string) => {
    setCompareList(prev => prev.filter(m => m.id !== materialId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (materialId: string): boolean => {
    return compareList.some(m => m.id === materialId);
  };

  const canAddMore = compareList.length < MAX_COMPARE;

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        canAddMore
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within CompareProvider');
  }
  return context;
}
