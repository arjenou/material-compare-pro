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
    tensileStrengthMPa: '拉伸强度',
    tensileModulusGPa: '拉伸模量',
    elongationAtBreakPct: '断裂伸长率',
    hdtAt0_45MPaC: '热变形温度',
    densityGPerCm3: '密度',
    color: '颜色'
  };
  return labels[key] || key;
}
