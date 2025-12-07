export function formatNumber(value: number | undefined, decimals: number = 1): string {
  if (value === undefined) return '-';
  return value.toFixed(decimals);
}

export function formatSpec(key: string, value: number | string | undefined): string {
  if (value === undefined) return '-';
  
  switch (key) {
    case 'tensileStrengthMPa':
      return `${formatNumber(value as number)} MPa`;
    case 'tensileModulusGPa':
      return `${formatNumber(value as number)} GPa`;
    case 'elongationAtBreakPct':
      return `${formatNumber(value as number)}%`;
    case 'hdtAt0_45MPaC':
      return `${formatNumber(value as number)}°C`;
    case 'densityGPerCm3':
      return `${formatNumber(value as number)} g/cm³`;
    default:
      return String(value);
  }
}

export function getSpecLabel(key: string): string {
  const labels: Record<string, string> = {
    tensileStrengthMPa: '引張強度',
    tensileModulusGPa: '引張弾性率',
    elongationAtBreakPct: '破断伸び',
    hdtAt0_45MPaC: '熱変形温度',
    densityGPerCm3: '密度',
    color: 'カラー'
  };
  return labels[key] || key;
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    Engineering: 'エンジニアリング',
    Dental: '歯科用',
    General: '汎用',
    SLS: 'SLS',
    SLA: 'SLA'
  };
  return labels[category] || category;
}
