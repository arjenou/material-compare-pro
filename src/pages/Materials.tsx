import { useState, useMemo } from 'react';
import { materials } from '@/lib/materials';
import { MaterialCategory, SortOption } from '@/types/material';
import { MaterialCard } from '@/components/MaterialCard';
import { FilterBar } from '@/components/FilterBar';
import { SortMenu } from '@/components/SortMenu';
import { EmptyState } from '@/components/EmptyState';
import { Search } from 'lucide-react';

export default function Materials() {
  const [selectedCategories, setSelectedCategories] = useState<MaterialCategory[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  // 获取所有可用的标签
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    materials.forEach(m => m.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // 筛选和排序材料
  const filteredMaterials = useMemo(() => {
    let filtered = materials;

    // 按分类筛选
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(m => selectedCategories.includes(m.category));
    }

    // 按标签筛选
    if (selectedTags.length > 0) {
      filtered = filtered.filter(m => 
        selectedTags.some(tag => m.tags.includes(tag))
      );
    }

    // 排序
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'strength-high':
          return (b.specs.tensileStrengthMPa || 0) - (a.specs.tensileStrengthMPa || 0);
        case 'price-low':
          const priceOrder = { Low: 1, Medium: 2, High: 3 };
          return (priceOrder[a.priceTier || 'Medium'] || 2) - (priceOrder[b.priceTier || 'Medium'] || 2);
        case 'price-high':
          const priceOrderHigh = { Low: 1, Medium: 2, High: 3 };
          return (priceOrderHigh[b.priceTier || 'Medium'] || 2) - (priceOrderHigh[a.priceTier || 'Medium'] || 2);
        case 'newest':
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategories, selectedTags, sortBy]);

  const handleCategoryToggle = (category: MaterialCategory) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen flex flex-col pb-24">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            为你的项目挑选合适材料
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            从验证到量产，材料库全覆盖。关键指标对比，一目了然。
          </p>
        </div>

        {/* Filter and Sort Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <FilterBar
                selectedCategories={selectedCategories}
                selectedTags={selectedTags}
                onCategoryToggle={handleCategoryToggle}
                onTagToggle={handleTagToggle}
                onClear={handleClearFilters}
                availableTags={availableTags}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                共 {filteredMaterials.length} 个材料
              </p>
              <SortMenu value={sortBy} onChange={setSortBy} />
            </div>

            {filteredMaterials.length === 0 ? (
              <EmptyState
                icon={<Search className="h-12 w-12 text-muted-foreground" />}
                title="未找到匹配的材料"
                description="尝试调整筛选条件或清空筛选"
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMaterials.map((material) => (
                  <MaterialCard key={material.id} material={material} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
