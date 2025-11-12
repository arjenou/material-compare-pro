import { Material } from '@/types/material';
import { Button } from './ui/button';
import { X, ArrowUpDown } from 'lucide-react';
import { getSpecLabel, formatSpec } from '@/lib/formatters';
import { Badge } from './Badge';

interface CompareTableProps {
  materials: Material[];
  onRemove: (materialId: string) => void;
}

const specOrder = [
  'tensileStrengthMPa',
  'tensileModulusGPa',
  'elongationAtBreakPct',
  'hdtAt0_45MPaC',
  'densityGPerCm3',
  'color'
];

const specGroups = [
  {
    title: '基础信息',
    specs: ['color']
  },
  {
    title: '机械性能',
    specs: ['tensileStrengthMPa', 'tensileModulusGPa', 'elongationAtBreakPct']
  },
  {
    title: '热学性能',
    specs: ['hdtAt0_45MPaC']
  },
  {
    title: '物理性能',
    specs: ['densityGPerCm3']
  }
];

function getHighestValue(materials: Material[], key: string): number | null {
  const values = materials
    .map(m => m.specs[key as keyof typeof m.specs])
    .filter(v => typeof v === 'number') as number[];
  
  if (values.length === 0) return null;
  return Math.max(...values);
}

export function CompareTable({ materials, onRemove }: CompareTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-background border-b p-4 text-left font-semibold min-w-[200px]">
              对比项
            </th>
            {materials.map((material) => (
              <th
                key={material.id}
                className="border-b p-4 text-left min-w-[250px] relative"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => onRemove(material.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="pr-10">
                  <img
                    src={material.thumbnail}
                    alt={material.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h3 className="font-semibold mb-1">{material.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {material.category}
                  </Badge>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {specGroups.map((group) => (
            <>
              <tr key={group.title}>
                <td
                  colSpan={materials.length + 1}
                  className="sticky left-0 bg-muted px-4 py-2 font-semibold text-sm"
                >
                  {group.title}
                </td>
              </tr>
              {group.specs.map((specKey) => {
                const highestValue = getHighestValue(materials, specKey);
                
                return (
                  <tr key={specKey} className="hover:bg-muted/50 transition-colors">
                    <td className="sticky left-0 z-10 bg-background border-b px-4 py-3 text-sm text-muted-foreground">
                      {getSpecLabel(specKey)}
                    </td>
                    {materials.map((material) => {
                      const value = material.specs[specKey as keyof typeof material.specs];
                      const isHighest = typeof value === 'number' && value === highestValue && highestValue !== null;
                      
                      return (
                        <td
                          key={material.id}
                          className={`border-b px-4 py-3 text-sm ${
                            isHighest ? 'font-semibold text-primary' : 'font-medium'
                          }`}
                        >
                          {formatSpec(specKey, value)}
                          {isHighest && specKey !== 'color' && (
                            <ArrowUpDown className="inline ml-2 h-3 w-3" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </>
          ))}
          
          <tr>
            <td
              colSpan={materials.length + 1}
              className="sticky left-0 bg-muted px-4 py-2 font-semibold text-sm"
            >
              材料特性
            </td>
          </tr>
          <tr className="hover:bg-muted/50 transition-colors">
            <td className="sticky left-0 z-10 bg-background border-b px-4 py-3 text-sm text-muted-foreground">
              标签
            </td>
            {materials.map((material) => (
              <td key={material.id} className="border-b px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {material.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
