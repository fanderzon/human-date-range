'use strict';

function humanDateRange(ref) {
  var startDate = ref.startDate;
  var endDate = ref.endDate;
  var showWeekDays = ref.showWeekDays; if ( showWeekDays === void 0 ) showWeekDays = false;
  var month = ref.month; if ( month === void 0 ) month = 'short';
  var weekday = ref.weekday; if ( weekday === void 0 ) weekday = 'short';

  // Make sure both startDate and endDate are dates
  if (!isDate(startDate) || !isDate(endDate)) {
    return null;
  }

  var sYear = startDate.getFullYear();
  var sDate = startDate.getDate();
  var sWeekday = showWeekDays ? startDate.toLocaleString('en-US', {weekday: weekday}) + ' ' : '';
  var sMonth = startDate.toLocaleString('en-US', {month: month});
  var eYear = endDate.getFullYear();
  var eDate = endDate.getDate();
  var eWeekday = showWeekDays ? endDate.toLocaleString('en-US', {weekday: weekday}) + ' ' : '';
  var eMonth = endDate.toLocaleString('en-US', {month: month});

  // Check if month and year are the same
  if (sYear === eYear && sMonth === eMonth) {
    return ("" + sWeekday + sMonth + " " + sDate + "-" + eWeekday + eDate + " " + eYear);
  }

  // Check if year is the same
  if (sYear === eYear) {
    return ("" + sWeekday + sMonth + " " + sDate + "-" + eWeekday + eMonth + " " + eDate + " " + eYear);
  }

  return ("" + sWeekday + sMonth + " " + sDate + " " + sYear + "-" + eWeekday + eMonth + " " + eDate + " " + eYear);
}

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]';
}

module.exports = humanDateRange;
