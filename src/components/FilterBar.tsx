import { MaterialCategory } from '@/types/material';
import { Button } from './ui/button';
import { Badge } from './Badge';
import { X } from 'lucide-react';

interface FilterBarProps {
  selectedCategories: MaterialCategory[];
  selectedTags: string[];
  onCategoryToggle: (category: MaterialCategory) => void;
  onTagToggle: (tag: string) => void;
  onClear: () => void;
  availableTags: string[];
}

const categories: MaterialCategory[] = ['Engineering', 'Dental', 'General', 'SLS', 'SLA'];

const categoryLabels: Record<MaterialCategory, string> = {
  Engineering: '工程级',
  Dental: '牙科',
  General: '通用型',
  SLS: 'SLS烧结',
  SLA: 'SLA光固化'
};

export function FilterBar({
  selectedCategories,
  selectedTags,
  onCategoryToggle,
  onTagToggle,
  onClear,
  availableTags
}: FilterBarProps) {
  const hasFilters = selectedCategories.length > 0 || selectedTags.length > 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">筛选条件</h2>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={onClear}>
            <X className="mr-2 h-4 w-4" />
            清空筛选
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-3">材料分类</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategories.includes(category) ? 'default' : 'outline'}
                size="sm"
                onClick={() => onCategoryToggle(category)}
              >
                {categoryLabels[category]}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">材料特性</h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                size="sm"
                onClick={() => onTagToggle(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {hasFilters && (
        <div className="pt-2">
          <p className="text-sm text-muted-foreground">
            已应用 {selectedCategories.length + selectedTags.length} 个筛选条件
          </p>
        </div>
      )}
    </div>
  );
}
