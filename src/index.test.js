import humanDateRange from './index';

describe('humanDateRange', () => {
  it('should recognize dates within the same month', () => {
    expect(humanDateRange({startDate: new Date(2017, 0, 1), endDate: new Date(2017, 0, 6)})).toBe('Jan 1-6 2017');
  });

  it('should recognize dates within the same year', () => {
    expect(humanDateRange({startDate: new Date(2017, 0, 1), endDate: new Date(2017, 1, 1)})).toBe('Jan 1-Feb 1 2017');
  });

  it('should print full dates when different years', () => {
    expect(humanDateRange({startDate: new Date(2016, 0, 1), endDate: new Date(2017, 0, 1)})).toBe('Jan 1 2016-Jan 1 2017');
  });
});
