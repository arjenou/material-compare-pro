import { NavLink } from '@/components/NavLink';
import { Layers } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-semibold text-lg hover:text-primary transition-colors">
          <Layers className="h-6 w-6" />
          <span>3Dマテリアルラボ</span>
        </NavLink>
        
        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground"
          >
            すべての材料
          </NavLink>
          <NavLink 
            to="/compare" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground"
          >
            比較する
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
