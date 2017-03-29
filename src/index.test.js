import humanDateRange from './index';

describe('humanDateRange', () => {
  it('should recognize dates within the same month', () => {
    expect(humanDateRange({
      startDate: new Date(2017, 0, 1),
      endDate: new Date(2017, 0, 6)
    })).toBe('Jan 1-6 2017');
  });

  it('should recognize dates within the same year', () => {
    expect(humanDateRange({
      startDate: new Date(2017, 0, 1),
      endDate: new Date(2017, 1, 1)
    })).toBe('Jan 1-Feb 1 2017');
  });

  it('should print full dates when different years', () => {
    expect(humanDateRange({
      startDate: new Date(2016, 0, 1),
      endDate: new Date(2017, 0, 1)
    })).toBe('Jan 1 2016-Jan 1 2017');
  });

  it('should use long month name if specified', () => {
    expect(humanDateRange({
      startDate: new Date(2016, 0, 1),
      endDate: new Date(2017, 0, 1),
      month: 'long'
    })).toBe('January 1 2016-January 1 2017');
  });

  it('should show weekdays if specified', () => {
    expect(humanDateRange({
      startDate: new Date(2017, 0, 1),
      endDate: new Date(2017, 0, 6),
      showWeekDays: true
    })).toBe('Sun Jan 1-Fri 6 2017');
  });

  it('should use long weekday name if specified', () => {
    expect(humanDateRange({
      startDate: new Date(2017, 0, 1),
      endDate: new Date(2017, 0, 6),
      showWeekDays: true,
      weekday: 'long'
    })).toBe('Sunday Jan 1-Friday 6 2017');
  });

  it('should return null if startDate or endDate are not date objects', () => {
    expect(humanDateRange({
      startDate: '2017-01-01',
      endDate: new Date(2017, 0, 6)
    })).toBe(null);
  });
});
