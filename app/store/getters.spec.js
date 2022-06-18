import getters from './getters';
import { expect, test } from '@jest/globals';

test('return the count of chart items ', () => {
  const state = {
    chartData: [
      { date_ms: 1641772800000, performance: 0.2 },
      { date_ms: 1641859200000, performance: 0.33 },
      { date_ms: 1641945600000, performance: 0.83 },
      { date_ms: 1642032000000, performance: 0.31 },
      { date_ms: 1642118400000, performance: 0.65 },
      { date_ms: 1642204800000, performance: 0.88 },
      { date_ms: 1642291200000, performance: 0.9 },
    ],
    startDate: '2022-01-11',
    endDate: '2022-01-15',
  };
  expect(getters.chartData(state)).toHaveLength(4);
});
