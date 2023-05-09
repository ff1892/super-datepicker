import datemath from '@elastic/datemath';

interface quickTimeProps {
  timeTense: string,
  timeCount: string,
  timeUnits: string,
}

export const getQuickTimeRange = ({ timeTense, timeCount, timeUnits }: quickTimeProps) => {
  const shortUnit = timeUnits === 'months' ? timeUnits[0].toUpperCase() : timeUnits[0];
  const now = new Date();
  if (timeTense === 'Last') {
    const start = datemath.parse(`now-${timeCount}${shortUnit}`)?.toDate();
    console.log(start);
    return [start, now];
  }
  const end = datemath.parse(`now+${timeCount}${shortUnit}`)?.toDate();
  return [now, end];
};
