import { useCompare } from '@/contexts/compare-context';
import { Button } from './ui/button';
import { X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function CompareBar() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t shadow-lg">
      <div className="container mx-auto px-4">
        <div className={cn(
          "transition-all duration-300 overflow-hidden",
          isCollapsed ? "max-h-12" : "max-h-48"
        )}>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span className="font-semibold">
                  对比列表 ({compareList.length}/4)
                </span>
                {isCollapsed ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={clearCompare}
              >
                清空
              </Button>
              <Button
                size="sm"
                onClick={() => navigate('/compare')}
                disabled={compareList.length < 2}
              >
                开始对比
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isCollapsed && (
            <div className="pb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {compareList.map((material) => (
                  <div
                    key={material.id}
                    className="flex items-center gap-2 p-2 rounded-md border bg-card"
                  >
                    <img
                      src={material.thumbnail}
                      alt={material.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {material.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {material.category}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => removeFromCompare(material.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
