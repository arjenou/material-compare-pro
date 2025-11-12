import { Material } from '@/types/material';
import { Badge } from './Badge';
import { Button } from './ui/button';
import { Check, Plus } from 'lucide-react';
import { useCompare } from '@/contexts/compare-context';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface MaterialCardProps {
  material: Material;
}

export function MaterialCard({ material }: MaterialCardProps) {
  const { addToCompare, removeFromCompare, isInCompare, canAddMore } = useCompare();
  const inCompare = isInCompare(material.id);

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inCompare) {
      removeFromCompare(material.id);
      toast({
        title: '已移除',
        description: `${material.name} 已从对比列表中移除`
      });
    } else {
      const success = addToCompare(material);
      if (success) {
        toast({
          title: '已添加',
          description: `${material.name} 已加入对比列表`
        });
      } else {
        toast({
          title: '无法添加',
          description: '最多只能对比 4 个材料',
          variant: 'destructive'
        });
      }
    }
  };

  return (
    <Link to={`/materials/${material.slug}`}>
      <div className="group relative rounded-lg border bg-card overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={material.thumbnail}
            alt={material.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {material.name}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {material.category}
              </Badge>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {material.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {material.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-2 mb-4 text-sm">
            {material.specs.tensileStrengthMPa && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">拉伸强度</span>
                <span className="font-medium">{material.specs.tensileStrengthMPa} MPa</span>
              </div>
            )}
            {material.specs.tensileModulusGPa && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">拉伸模量</span>
                <span className="font-medium">{material.specs.tensileModulusGPa} GPa</span>
              </div>
            )}
            {material.specs.hdtAt0_45MPaC && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">热变形温度</span>
                <span className="font-medium">{material.specs.hdtAt0_45MPaC}°C</span>
              </div>
            )}
          </div>

          <Button
            variant={inCompare ? 'secondary' : 'outline'}
            size="sm"
            className="w-full"
            onClick={handleToggleCompare}
            disabled={!inCompare && !canAddMore}
          >
            {inCompare ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                已加入对比
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                加入对比
              </>
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
}
