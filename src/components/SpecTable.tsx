import { Material } from '@/types/material';
import { getSpecLabel, formatSpec } from '@/lib/formatters';

interface SpecTableProps {
  material: Material;
}

const specOrder = [
  'tensileStrengthMPa',
  'tensileModulusGPa',
  'elongationAtBreakPct',
  'hdtAt0_45MPaC',
  'densityGPerCm3',
  'color'
];

export function SpecTable({ material }: SpecTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="text-left px-6 py-3 text-sm font-semibold">性能指标</th>
            <th className="text-left px-6 py-3 text-sm font-semibold">数值</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {specOrder.map((key) => {
            const value = material.specs[key as keyof typeof material.specs];
            if (value === undefined) return null;
            
            return (
              <tr key={key} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-3 text-sm text-muted-foreground">
                  {getSpecLabel(key)}
                </td>
                <td className="px-6 py-3 text-sm font-medium">
                  {formatSpec(key, value)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
