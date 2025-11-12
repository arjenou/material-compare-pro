export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">关于我们</h3>
            <p className="text-sm text-muted-foreground">
              提供专业的3D打印材料解决方案，从验证到量产全覆盖。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">快速链接</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">技术支持</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">下载中心</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">联系方式</h3>
            <p className="text-sm text-muted-foreground">
              邮箱: support@example.com<br />
              电话: 400-xxx-xxxx
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © 2024 材料库. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
