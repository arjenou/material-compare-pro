import { Material, MaterialCategory } from '@/types/material';

export const materials: Material[] = [
  {
    id: '1',
    slug: 'tough-2000-resin',
    name: 'Tough 2000 レジン',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop',
    tags: ['高強度', '耐衝撃', 'エンジニアリング'],
    summary: '高い強度と靭性を兼ね備えたエンジニアリングレジン。機能性プロトタイプや治具に最適です。',
    specs: {
      tensileStrengthMPa: 55.7,
      tensileModulusGPa: 2.7,
      elongationAtBreakPct: 18,
      hdtAt0_45MPaC: 68,
      densityGPerCm3: 1.17,
      color: 'ブラック'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' },
      { label: '安全データシート (SDS)', url: '#' }
    ],
    faq: [
      { q: 'どのような用途に適していますか？', a: '機能性プロトタイプ、スナップフィット部品、治具・固定具などに最適です。' },
      { q: '後処理は必要ですか？', a: 'はい、洗浄と二次硬化が必要です。' }
    ],
    priceTier: 'High'
  },
  {
    id: '2',
    slug: 'rigid-10k-resin',
    name: 'Rigid 10K レジン',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&h=600&fit=crop',
    tags: ['超高剛性', 'ガラス充填', '精密'],
    summary: 'ガラス充填により10 GPaの超高剛性を実現。精密な治具や金型に最適です。',
    specs: {
      tensileStrengthMPa: 87,
      tensileModulusGPa: 10,
      elongationAtBreakPct: 1.6,
      hdtAt0_45MPaC: 111,
      densityGPerCm3: 1.17,
      color: 'ホワイト'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' },
      { label: '安全データシート (SDS)', url: '#' }
    ],
    faq: [
      { q: 'なぜ剛性が高いのですか？', a: 'ガラス繊維が充填されており、金属に近い剛性を実現しています。' }
    ],
    priceTier: 'High'
  },
  {
    id: '3',
    slug: 'elastic-50a-resin',
    name: 'Elastic 50A レジン',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1200&h=600&fit=crop',
    tags: ['超柔軟', 'シリコンライク', '伸縮'],
    summary: 'Shore 50A硬度の超柔軟レジン。シリコンのような質感でウェアラブルに最適。',
    specs: {
      tensileStrengthMPa: 2.9,
      tensileModulusGPa: 0.006,
      elongationAtBreakPct: 160,
      hdtAt0_45MPaC: 41,
      densityGPerCm3: 1.11,
      color: '半透明'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: 'シリコンとの違いは？', a: '3Dプリントの精度を維持しながら、シリコンに近い触感を実現しています。' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '4',
    slug: 'clear-resin',
    name: 'Clear レジン',
    category: 'General',
    thumbnail: 'https://images.unsplash.com/photo-1563520240344-52b067aa5f84?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1563520240344-52b067aa5f84?w=1200&h=600&fit=crop',
    tags: ['透明', '光学用途', 'ビジュアル'],
    summary: '高い透明度を持つレジン。研磨後はほぼ透明になり、光学部品に最適です。',
    specs: {
      tensileStrengthMPa: 65,
      tensileModulusGPa: 2.8,
      elongationAtBreakPct: 12,
      hdtAt0_45MPaC: 58,
      densityGPerCm3: 1.18,
      color: 'クリア'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: '完全に透明になりますか？', a: '研磨とコーティング処理により、ほぼ光学的透明度を実現できます。' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '5',
    slug: 'standard-resin',
    name: 'Grey レジン',
    category: 'General',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=600&fit=crop',
    tags: ['汎用', 'コスト効率', '高精度'],
    summary: 'コストパフォーマンスに優れた汎用レジン。コンセプトモデルや形状確認に最適です。',
    specs: {
      tensileStrengthMPa: 65,
      tensileModulusGPa: 2.8,
      elongationAtBreakPct: 6.2,
      hdtAt0_45MPaC: 62,
      densityGPerCm3: 1.19,
      color: 'グレー'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: '初心者に適していますか？', a: 'はい、扱いやすく失敗が少ないため初めての方にもお勧めです。' }
    ],
    priceTier: 'Low'
  },
  {
    id: '6',
    slug: 'dental-model-resin',
    name: 'Dental Model レジン',
    category: 'Dental',
    thumbnail: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop',
    tags: ['歯科', '高精度', 'マット仕上げ'],
    summary: '歯科模型用に最適化された高精度レジン。滑らかなマット仕上げが特徴です。',
    specs: {
      tensileStrengthMPa: 60,
      tensileModulusGPa: 2.5,
      elongationAtBreakPct: 8,
      hdtAt0_45MPaC: 55,
      densityGPerCm3: 1.18,
      color: 'ホワイト'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: '一般的な用途は何ですか？', a: '矯正セットアップモデル、クラウン・ブリッジモデルなどに使用されます。' }
    ],
    priceTier: 'High'
  },
  {
    id: '7',
    slug: 'high-temp-resin',
    name: 'High Temp レジン',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop',
    tags: ['耐熱', '高温環境', '金型'],
    summary: '238°Cの高い熱変形温度を持つ、高温環境下での使用に適したレジンです。',
    specs: {
      tensileStrengthMPa: 62,
      tensileModulusGPa: 2.4,
      elongationAtBreakPct: 7.5,
      hdtAt0_45MPaC: 238,
      densityGPerCm3: 1.17,
      color: 'オレンジ'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: 'どのくらいの温度に耐えられますか？', a: '熱変形温度は238°C（0.45 MPa）です。' }
    ],
    priceTier: 'High'
  },
  {
    id: '8',
    slug: 'castable-wax-resin',
    name: 'Castable Wax レジン',
    category: 'Dental',
    thumbnail: 'https://images.unsplash.com/photo-1582719471384-894fbb16f251?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16f251?w=1200&h=600&fit=crop',
    tags: ['鋳造', 'ジュエリー', '歯科'],
    summary: 'ロストワックス鋳造用レジン。クリーンな燃焼で精密な鋳造が可能です。',
    specs: {
      tensileStrengthMPa: 32,
      tensileModulusGPa: 1.2,
      elongationAtBreakPct: 5,
      hdtAt0_45MPaC: 45,
      densityGPerCm3: 1.05,
      color: 'パープル'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' },
      { label: '鋳造ガイド', url: '#' }
    ],
    faq: [
      { q: '鋳造工程の注意点は？', a: '標準的なロストワックス工程で使用可能です。' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '9',
    slug: 'durable-resin',
    name: 'Durable レジン',
    category: 'Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
    tags: ['耐摩耗', '耐久性', 'PP相当'],
    summary: 'ポリプロピレン相当の特性を持つ耐久性レジン。繰り返し使用する部品に最適。',
    specs: {
      tensileStrengthMPa: 39,
      tensileModulusGPa: 1.6,
      elongationAtBreakPct: 25,
      hdtAt0_45MPaC: 48,
      densityGPerCm3: 1.13,
      color: 'ホワイト'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: '耐久性はどの程度ですか？', a: '繰り返しの曲げや圧縮に強く、割れにくい特性があります。' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '10',
    slug: 'nylon-12-powder',
    name: 'Nylon 12 パウダー',
    category: 'SLS',
    thumbnail: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=600&fit=crop',
    tags: ['SLS', '耐久性', '量産'],
    summary: 'SLS方式用の高性能ナイロンパウダー。最終部品製造に最適です。',
    specs: {
      tensileStrengthMPa: 48,
      tensileModulusGPa: 1.65,
      elongationAtBreakPct: 18,
      densityGPerCm3: 1.01,
      color: 'ホワイト'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: 'SLSとSLAの違いは？', a: 'SLSは粉末材料をレーザーで焼結する方式で、サポート不要です。' }
    ],
    priceTier: 'Medium'
  },
  {
    id: '11',
    slug: 'ceramic-resin',
    name: 'Ceramic レジン',
    category: 'SLA',
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=600&fit=crop',
    tags: ['セラミック', '耐熱', '耐摩耗'],
    summary: 'セラミック充填レジン。焼結後にセラミック部品として使用可能です。',
    specs: {
      tensileStrengthMPa: 42,
      tensileModulusGPa: 8.5,
      elongationAtBreakPct: 0.9,
      hdtAt0_45MPaC: 170,
      densityGPerCm3: 1.65,
      color: 'ホワイト'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' },
      { label: '焼結ガイド', url: '#' }
    ],
    faq: [
      { q: '焼結工程は必要ですか？', a: 'はい、専用の焼結炉で処理することでセラミック部品になります。' }
    ],
    priceTier: 'High'
  },
  {
    id: '12',
    slug: 'grey-pro-resin',
    name: 'Grey Pro レジン',
    category: 'General',
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
    tags: ['高精度', '細部再現', 'プロ仕様'],
    summary: 'プロフェッショナル向け高精度レジン。細部の再現性に優れています。',
    specs: {
      tensileStrengthMPa: 70,
      tensileModulusGPa: 3.2,
      elongationAtBreakPct: 6.5,
      hdtAt0_45MPaC: 66,
      densityGPerCm3: 1.20,
      color: 'プロフェッショナルグレー'
    },
    downloads: [
      { label: '技術データシート (TDS)', url: '#' }
    ],
    faq: [
      { q: 'Grey レジンとの違いは？', a: '精度がより高く、表面品質に優れています。' }
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
