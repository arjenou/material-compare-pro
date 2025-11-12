import { useCompare } from '@/contexts/compare-context';
import { CompareTable } from '@/components/CompareTable';
import { EmptyState } from '@/components/EmptyState';
import { Button } from '@/components/ui/button';
import { GitCompare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Compare() {
  const { compareList, removeFromCompare } = useCompare();
  const navigate = useNavigate();

  if (compareList.length < 2) {
    return (
      <div className="min-h-screen flex flex-col pb-24">
        <div className="container mx-auto px-4 py-12">
          <EmptyState
            icon={<GitCompare className="h-12 w-12 text-muted-foreground" />}
            title={compareList.length === 0 ? '还没有选择材料' : '至少需要 2 个材料才能对比'}
            description="请从材料列表中选择材料加入对比列表"
          />
          <div className="text-center mt-6">
            <Button onClick={() => navigate('/')}>
              浏览材料列表
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pb-24">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">材料对比</h1>
          <p className="text-muted-foreground">
            关键指标对比，一目了然。正在对比 {compareList.length} 个材料。
          </p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <CompareTable
            materials={compareList}
            onRemove={removeFromCompare}
          />
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => navigate('/')}>
            继续选择材料
          </Button>
        </div>
      </div>
    </div>
  );
}
