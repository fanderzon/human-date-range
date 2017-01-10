import humanDateRange from './index';

describe('humanDateRange', () => {
  it('should recognize dates within the same month', () => {
    expect(humanDateRange(new Date(2017, 1, 1), new Date(2017, 1, 6))).toBe('Jan 1-6 2017');
  });
});
