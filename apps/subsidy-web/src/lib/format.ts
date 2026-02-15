export function formatYen(amount: number | null): string {
  if (amount === null) return "金額未定";
  if (amount >= 100_000_000) return `${(amount / 100_000_000).toFixed(1).replace(/\.0$/, "")}億円`;
  if (amount >= 10_000) return `${Math.round(amount / 10_000).toLocaleString()}万円`;
  return `${amount.toLocaleString()}円`;
}

export function formatDateJP(date: Date | string | null): string {
  if (!date) return "期限未定";
  const d = new Date(date);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export function daysUntil(date: Date | string | null): number | null {
  if (!date) return null;
  const target = new Date(date);
  return Math.ceil((target.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}
