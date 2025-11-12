import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMaterialBySlug, materials } from '@/lib/materials';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/Badge';
import { SpecTable } from '@/components/SpecTable';
import { MaterialCard } from '@/components/MaterialCard';
import { useCompare } from '@/contexts/compare-context';
import { ArrowLeft, Download, Check, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function MaterialDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const material = slug ? getMaterialBySlug(slug) : undefined;
  const { addToCompare, removeFromCompare, isInCompare, canAddMore } = useCompare();

  if (!material) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">材料未找到</h1>
        <Button onClick={() => navigate('/')}>返回首页</Button>
      </div>
    );
  }

  const inCompare = isInCompare(material.id);
  
  const handleToggleCompare = () => {
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

  // 获取相关推荐（同分类）
  const relatedMaterials = materials
    .filter(m => m.category === material.category && m.id !== material.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pb-24">
      {/* Back Button */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回材料列表
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src={material.heroImage || material.thumbnail}
              alt={material.name}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit mb-3">
              {material.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{material.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              {material.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {material.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                variant={inCompare ? 'secondary' : 'default'}
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
              <Button variant="outline">联系咨询</Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">技术规格</h2>
          <SpecTable material={material} />
        </div>

        {/* Downloads */}
        {material.downloads && material.downloads.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">技术文档下载</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {material.downloads.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.url}
                  className="flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <Download className="h-5 w-5 text-primary" />
                  <span className="font-medium">{doc.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        {material.faq && material.faq.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">常见问题</h2>
            <Accordion type="single" collapsible className="w-full">
              {material.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Related Materials */}
        {relatedMaterials.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">相关推荐</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMaterials.map((m) => (
                <MaterialCard key={m.id} material={m} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
