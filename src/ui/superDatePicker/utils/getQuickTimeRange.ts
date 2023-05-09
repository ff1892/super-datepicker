import datemath from '@elastic/datemath';

interface quickTimeProps {
  timeTense: string,
  timeCount: string,
  timeUnits: string,
}

// Используется для опеределения начала и конца периода
// например: 'Last 15 minutes' - {timetense: 'Last', timeCount: 15, timeUnits: 'minutes', }
// вернет: [Date(сейчас - 15 минут), Date(сейчас)]
export const getQuickTimeRange = ({ timeTense, timeCount, timeUnits }: quickTimeProps) => {
  const shortUnit = timeUnits === 'months' ? timeUnits[0].toUpperCase() : timeUnits[0];
  const now = new Date();
  if (timeTense === 'Last') {
    const start = datemath.parse(`now-${timeCount}${shortUnit}`)?.toDate();
    return [start, now];
  }
  const end = datemath.parse(`now+${timeCount}${shortUnit}`)?.toDate();
  return [now, end];
};
