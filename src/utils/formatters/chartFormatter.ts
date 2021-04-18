import { useTypedSelector } from './../../hooks/useTypedSelector';

export const chartFormatter = () => {
  const categories = useTypedSelector((state) => state.home.categories);
  let chartData = categories.map((item) => {
    const total = item.expenses.reduce((a, b) => a + (b.total || 0), 0);
    return {
      name: item.name,
      y: total,
      expenseCount: item.expenses.length,
      color: item.color,
      id: item.id,
    };
  });
  let filterChartData = chartData.filter((a) => a.y > 0);
  let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);
  let finalChartData = filterChartData.map((item) => {
    let percentage = ((item.y / totalExpense) * 100).toFixed(0);
    return {
      label: `${percentage}%`,
      y: Number(item.y),
      expenseCount: item.expenseCount,
      color: item.color,
      name: item.name,
      id: item.id,
      percentFlat: percentage,
    };
  });
  return finalChartData;
};
