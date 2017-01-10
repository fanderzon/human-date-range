export default function humanDateRange({
  startDate,
  endDate,
  showWeekDays = false,
  month = 'short',
  year = 'numeric',
  weekday = 'short'
}) {
  // Make sure both startDate and endDate are dates
  if (!isDate(startDate) || !isDate(endDate)) {
    return null;
  }

  console.log('startDate', startDate);

  const sY = startDate.getFullYear();
  const sM = startDate.getMonth();
  const sD = startDate.getDate();
  const eY = endDate.getFullYear();
  const eM = endDate.getMonth();
  const eD = endDate.getDate();

  // Check if month and year are the same
  if (sY === eY && sM === eM) {
    return `${startDate.toLocaleString('en-US', {month})} ${sD}-${eD} ${sY}`;
  }

  return null;
}

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]';
}
