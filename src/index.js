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
    return `${startDate.toLocaleString('en-US', {month})} ${sD}-${eD} ${eY}`;
  }

  // Check if year is the same
  if (sY === eY) {
    return `${startDate.toLocaleString('en-US', {month})} ${sD}-${endDate.toLocaleString('en-US', {month})} ${eD} ${eY}`;
  }

  return `${startDate.toLocaleString('en-US', {month})} ${sD} ${sY}-${endDate.toLocaleString('en-US', {month})} ${eD} ${eY}`;
}

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]';
}
