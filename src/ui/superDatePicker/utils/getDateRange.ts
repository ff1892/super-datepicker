import dateMath from '@elastic/datemath';

// Возвращает дату начала и конца выбранного периода
// используется в Commonly Used Section
export const getDateRange = (query: string) => {
  const now = new Date();
  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  switch (query) {
    case 'Today':
      break;
    case 'This week':
      start.setDate(now.getDate() - now.getDay());
      end.setDate(start.getDate() + 7);
      break;
    case 'This month':
      start.setDate(1);
      end.setMonth(now.getMonth() + 1);
      end.setDate(0);
      break;
    case 'This year':
      start.setMonth(0);
      start.setDate(1);
      end.setMonth(12);
      end.setDate(0);
      break;
    case 'Yesterday':
      start.setDate(now.getDate() - 1);
      end.setDate(now.getDate());
      break;
    case 'Week to date':
      end = now;
      start = dateMath.parse('now-1w')!.toDate();
      break;
    case 'Month to date':
      end = now;
      start = dateMath.parse('now-1M')!.toDate();
      break;
    case 'Year to date':
      end = now;
      start = dateMath.parse('now-1y')!.toDate();
      break;
    default:
      throw new Error(`Invalid query: ${query}`);
  }

  return { start, end };
};
