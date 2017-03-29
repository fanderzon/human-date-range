export default function humanDateRange({
  startDate,
  endDate,
  showWeekDays = false,
  month = 'short',
  weekday = 'short'
}) {
  // Make sure both startDate and endDate are dates
  if (!isDate(startDate) || !isDate(endDate)) {
    return null;
  }

  const sYear = startDate.getFullYear();
  const sDate = startDate.getDate();
  const sWeekday = showWeekDays ? startDate.toLocaleString('en-US', {weekday}) + ' ' : '';
  const sMonth = startDate.toLocaleString('en-US', {month});
  const eYear = endDate.getFullYear();
  const eDate = endDate.getDate();
  const eWeekday = showWeekDays ? endDate.toLocaleString('en-US', {weekday}) + ' ' : '';
  const eMonth = endDate.toLocaleString('en-US', {month});

  // Check if month and year are the same
  if (sYear === eYear && sMonth === eMonth) {
    return `${sWeekday}${sMonth} ${sDate}-${eWeekday}${eDate} ${eYear}`;
  }

  // Check if year is the same
  if (sYear === eYear) {
    return `${sWeekday}${sMonth} ${sDate}-${eWeekday}${eMonth} ${eDate} ${eYear}`;
  }

  return `${sWeekday}${sMonth} ${sDate} ${sYear}-${eWeekday}${eMonth} ${eDate} ${eYear}`;
}

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]';
}
