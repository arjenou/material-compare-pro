import { Material, MaterialCategory } from '@/types/material';

export const materials: Material[] = [
  {
    id: '1',
    slug: 'tough-2000-resin',
    name: 'Tough 2000 Resin',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=1200&h=600&fit=crop',
    tags: ['高韧性', '耐冲击', '工程级'],
    summary: '极高韧性和延展性的工程树脂，适合需要承受反复冲击和变形的应用场景',
    specs: {
      tensileStrengthMPa: 55.7,
      tensileModulusGPa: 2.7,
      elongationAtBreakPct: 18,
      hdtAt0_45MPaC: 68,
      densityGPerCm3: 1.17,
      color: '黑色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '适合哪些应用？', a: '适合需要高韧性的功能原型、工装夹具、卡扣连接件等' },
      { q: '后处理要求？', a: '需要进行紫外线固化和热处理以达到最佳机械性能' }
    ],
    priceTier: 'High'
  },
  {
    id: '2',
    slug: 'rigid-10k-resin',
    name: 'Rigid 10K Resin',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa4?w=1200&h=600&fit=crop',
    tags: ['高刚性', '高模量', '工程级'],
    summary: '超高刚性材料，模拟玻璃纤维增强塑料的性能表现',
    specs: {
      tensileStrengthMPa: 87,
      tensileModulusGPa: 10,
      elongationAtBreakPct: 1.6,
      hdtAt0_45MPaC: 111,
      densityGPerCm3: 1.17,
      color: '白色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '适合哪些应用？', a: '适合需要高刚性和尺寸稳定性的结构件、外壳、支架等' },
      { q: '后处理要求？', a: '标准清洗和紫外线固化即可' }
    ],
    priceTier: 'High'
  },
  {
    id: '3',
    slug: 'elastic-50a-resin',
    name: 'Elastic 50A Resin',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
    tags: ['弹性', '类橡胶', '柔软'],
    summary: '柔软且具有弹性的材料，类似硅胶和橡胶的触感和性能',
    specs: {
      tensileStrengthMPa: 2.9,
      tensileModulusGPa: 0.006,
      elongationAtBreakPct: 160,
      hdtAt0_45MPaC: 41,
      densityGPerCm3: 1.11,
      color: '自然色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '适合哪些应用？', a: '适合密封件、垫圈、软把手、柔性铰链等' },
      { q: '后处理要求？', a: '清洗后紫外线固化，注意不要过度固化以保持弹性' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '4',
    slug: 'clear-resin',
    name: 'Clear Resin',
    category: 'General',
    thumbnail: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?w=1200&h=600&fit=crop',
    tags: ['透明', '通用型', '打磨可达透明'],
    summary: '透明树脂，打磨抛光后可达到高透明度，适合需要透光或透视效果的应用',
    specs: {
      tensileStrengthMPa: 65,
      tensileModulusGPa: 2.8,
      elongationAtBreakPct: 12,
      hdtAt0_45MPaC: 58,
      densityGPerCm3: 1.18,
      color: '透明'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '如何达到高透明度？', a: '需要精细打磨（从400目到3000目砂纸）和抛光处理' },
      { q: '适合哪些应用？', a: '适合透镜、流体通道、灯罩、展示模型等' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '5',
    slug: 'standard-resin',
    name: 'Standard Resin',
    category: 'General',
    thumbnail: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1200&h=600&fit=crop',
    tags: ['通用型', '高性价比', '易加工'],
    summary: '多用途通用树脂，打印速度快，性价比高，适合概念模型和快速迭代',
    specs: {
      tensileStrengthMPa: 65,
      tensileModulusGPa: 2.8,
      elongationAtBreakPct: 6.2,
      hdtAt0_45MPaC: 62,
      densityGPerCm3: 1.19,
      color: '灰色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '适合哪些应用？', a: '适合概念模型、原型验证、测试件等' },
      { q: '后处理要求？', a: '标准清洗和紫外线固化' }
    ],
    priceTier: 'Low'
  },
  {
    id: '6',
    slug: 'dental-model-resin',
    name: 'Dental Model Resin',
    category: 'Dental',
    thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=600&fit=crop',
    tags: ['牙科', '高精度', '医疗级'],
    summary: '专为牙科模型设计，高精度、低收缩率，表面细腻',
    specs: {
      tensileStrengthMPa: 60,
      tensileModulusGPa: 2.5,
      elongationAtBreakPct: 8,
      hdtAt0_45MPaC: 55,
      densityGPerCm3: 1.18,
      color: '米白色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '是否获得医疗认证？', a: '符合 ISO 10993 生物相容性标准' },
      { q: '适合哪些应用？', a: '适合诊断模型、手术导板、牙套模型等' }
    ],
    priceTier: 'High'
  },
  {
    id: '7',
    slug: 'high-temp-resin',
    name: 'High Temp Resin',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1581093458791-9d42e85b4a5f?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581093458791-9d42e85b4a5f?w=1200&h=600&fit=crop',
    tags: ['耐高温', '热稳定', '工程级'],
    summary: '耐高温材料，热变形温度高达238°C，适合高温环境应用',
    specs: {
      tensileStrengthMPa: 62,
      tensileModulusGPa: 2.4,
      elongationAtBreakPct: 7.5,
      hdtAt0_45MPaC: 238,
      densityGPerCm3: 1.17,
      color: '深灰色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '适合哪些应用？', a: '适合汽车零部件、高温测试夹具、注塑模具等' },
      { q: '后处理要求？', a: '需要进行热处理以激活最佳耐温性能' }
    ],
    priceTier: 'High'
  },
  {
    id: '8',
    slug: 'castable-wax-resin',
    name: 'Castable Wax Resin',
    category: 'Dental',
    thumbnail: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&h=600&fit=crop',
    tags: ['可铸造', '珠宝', '牙科'],
    summary: '专为失蜡铸造设计，燃尽干净，灰分少，适合珠宝和牙科铸造',
    specs: {
      tensileStrengthMPa: 32,
      tensileModulusGPa: 1.2,
      elongationAtBreakPct: 5,
      hdtAt0_45MPaC: 45,
      densityGPerCm3: 1.05,
      color: '紫色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' },
      { label: '铸造指南', url: '#' }
    ],
    faq: [
      { q: '铸造工艺要求？', a: '标准失蜡铸造工艺，升温曲线见技术文档' },
      { q: '适合哪些应用？', a: '适合珠宝首饰、牙冠牙桥铸造蜡型等' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '9',
    slug: 'durable-resin',
    name: 'Durable Resin',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1580870069867-74c57ee60d19?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1580870069867-74c57ee60d19?w=1200&h=600&fit=crop',
    tags: ['耐磨', '耐用', '类PP'],
    summary: '类似聚丙烯的材料特性，耐磨耐用，适合需要长期使用的功能件',
    specs: {
      tensileStrengthMPa: 39,
      tensileModulusGPa: 1.6,
      elongationAtBreakPct: 25,
      hdtAt0_45MPaC: 48,
      densityGPerCm3: 1.13,
      color: '白色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '适合哪些应用？', a: '适合装配件、活动铰链、反复使用的原型等' },
      { q: '耐用性如何？', a: '可承受反复弯曲和挤压而不易断裂' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '10',
    slug: 'nylon-12-powder',
    name: 'Nylon 12 Powder',
    category: 'SLS',
    thumbnail: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=1200&h=600&fit=crop',
    tags: ['SLS', '尼龙', '功能件'],
    summary: 'SLS 选择性激光烧结用尼龙粉末，强度高、韧性好，无需支撑结构',
    specs: {
      tensileStrengthMPa: 48,
      tensileModulusGPa: 1.65,
      elongationAtBreakPct: 18,
      densityGPerCm3: 1.01,
      color: '白色/灰色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '适合哪些应用？', a: '适合功能性终端零件、复杂几何、批量生产等' },
      { q: '后处理要求？', a: '无需支撑移除，可染色、打磨、抛光等' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '11',
    slug: 'ceramic-resin',
    name: 'Ceramic Resin',
    category: 'SLA',
    thumbnail: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=600&fit=crop',
    tags: ['陶瓷', '高温烧结', '耐磨'],
    summary: '陶瓷填充树脂，烧结后可获得陶瓷部件，耐高温、耐磨损',
    specs: {
      tensileStrengthMPa: 42,
      tensileModulusGPa: 8.5,
      elongationAtBreakPct: 0.9,
      hdtAt0_45MPaC: 170,
      densityGPerCm3: 1.65,
      color: '白色'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' },
      { label: '烧结指南', url: '#' }
    ],
    faq: [
      { q: '烧结工艺？', a: '需要专用烧结炉，升温曲线见技术文档，烧结后收缩约15%' },
      { q: '适合哪些应用？', a: '适合陶瓷零件、高温应用、耐磨部件等' }
    ],
    priceTier: 'High'
  },
  {
    id: '12',
    slug: 'grey-pro-resin',
    name: 'Grey Pro Resin',
    category: 'General',
    thumbnail: 'https://images.unsplash.com/photo-1597589022928-bb4002c099ec?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1597589022928-bb4002c099ec?w=1200&h=600&fit=crop',
    tags: ['通用型', '高精度', '细节丰富'],
    summary: '专业级灰色树脂，打印精度高，表面细节丰富，适合展示模型',
    specs: {
      tensileStrengthMPa: 70,
      tensileModulusGPa: 3.2,
      elongationAtBreakPct: 6.5,
      hdtAt0_45MPaC: 66,
      densityGPerCm3: 1.20,
      color: '专业灰'
    },
    downloads: [
      { label: 'TDS 技术数据表', url: '#' },
      { label: 'SDS 安全数据表', url: '#' }
    ],
    faq: [
      { q: '与 Standard Resin 的区别？', a: '精度更高、表面质量更好、细节表现力更强' },
      { q: '适合哪些应用？', a: '适合高精度模型、展示原型、细节丰富的零件等' }
    ],
    priceTier: 'Medium'
  }
];

export function getMaterialBySlug(slug: string): Material | undefined {
  return materials.find(m => m.slug === slug);
}

export function getMaterialsByCategory(category: MaterialCategory): Material[] {
  return materials.filter(m => m.category === category);
}

export function getMaterialsByTags(tags: string[]): Material[] {
  return materials.filter(m => m.tags.some(tag => tags.includes(tag)));
}
