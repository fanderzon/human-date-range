# human-date-range
Small module without external dependencies for formatting a human readable date range. The basic idea is to write `Jan 1-7 2017` if the dates are within the same month, but `Jan 1-Feb 2 2017` if they are not, and `Jan 1 2016-Jan 1 2017` if they are not within the same year.

## Usage
```
import formatRange from 'human-date-range';

formatRange({
  startDate: new Date(2016,0,1),
  endDate: new Date(2016,0,7)
});
// Jan 1-7 2017

formatRange({
  startDate: new Date(2016,0,1),
  endDate: new Date(2016,0,7),
  month: 'long'
});
// January 1-7 2017
```

## Input properties

`startDate`: Date object (required)

`endDate`: Date object (required)

`showWeekDays`: Boolean (default false) - Show weekday name before dates

`month`: String `short` || `long` - Format for month, `Jan` or `January`

`year`: String `numeric` || `2-digit` - Format for year `2017` or `17`

`weekday`: String `short` || `long` - Format for weekday `Mon` or `Monday`
